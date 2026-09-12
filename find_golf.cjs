const https = require('https');
const fs = require('fs');
const path = require('path');

const searchWikimedia = (query) => {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=15&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=1200&gsrsearch=' + encodeURIComponent(query);
    https.get(url, { headers: { 'User-Agent': 'DanangPlayBot/1.0 (test@example.com)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const results = pages.map(p => ({
            title: p.title,
            url: p.imageinfo && p.imageinfo[0] ? (p.imageinfo[0].thumburl || p.imageinfo[0].url) : null
          })).filter(x => x.url && x.title.match(/\.(jpg|jpeg|png)$/i));
          resolve(results);
        } catch(e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
};

async function run() {
  const mont = await searchWikimedia('golf course green fairway');
  console.log('=== Fairway Green ===');
  mont.slice(0, 5).forEach(m => console.log(m.title, m.url));

  const vinpearl = await searchWikimedia('tropical golf course palm');
  console.log('=== Tropical Golf ===');
  vinpearl.slice(0, 5).forEach(m => console.log(m.title, m.url));
}

run();
