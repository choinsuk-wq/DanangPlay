const https = require('https');

const search = (q) => {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size&gsrsearch=' + encodeURIComponent(q);
    https.get(url, {
      headers: { 'User-Agent': 'DanangPlayApp/1.0 (https://danangplay.com; admin@danangplay.com)' }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const list = pages.filter(p => p.imageinfo && p.imageinfo[0] && p.title.match(/\.(jpg|jpeg)$/i) && p.imageinfo[0].size > 200000).map(p => ({
            title: p.title,
            url: p.imageinfo[0].url
          }));
          resolve(list);
        } catch(e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
};

async function main() {
  const palm = await search('golf course palm tree');
  console.log('--- PALM GOLF ---');
  palm.forEach(p => console.log(p.title, p.url));

  const fairway = await search('golf course fairway bunker');
  console.log('--- FAIRWAY BUNKER ---');
  fairway.forEach(p => console.log(p.title, p.url));
}

main();
