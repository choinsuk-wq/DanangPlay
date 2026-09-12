const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'golf');
fs.mkdirSync(dir, { recursive: true });

const downloads = [
  {
    name: 'montgomerie.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/DZ6_2423_A_sunlit_golf_course_with_a_neatly_raked_bunker_in_the_foreground_and_palm_trees_lining_the_fairway.jpg'
  },
  {
    name: 'vinpearl.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/DZ6_2508_Sun-drenched_golf_course_beside_a_calm_water_hazard_framed_by_palm_trees_and_a_clear_blue_sky.jpg'
  },
  {
    name: 'laguna.jpg',
    url: 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'goldensands.jpg',
    url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=80'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const filePath = path.join(dir, item.name);
    const file = fs.createWriteStream(filePath);
    const req = https.get(item.url, {
      headers: {
        'User-Agent': 'DanangPlayApp/1.0 (https://danangplay.com; admin@danangplay.com)'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, {
          headers: {
            'User-Agent': 'DanangPlayApp/1.0 (https://danangplay.com; admin@danangplay.com)'
          }
        }, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Saved (redirect):', item.name, fs.statSync(filePath).size);
            resolve();
          });
        });
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved:', item.name, fs.statSync(filePath).size);
        resolve();
      });
    });
    req.on('error', (e) => {
      console.log('Err:', item.name, e.message);
      resolve();
    });
  });
}

async function run() {
  for (const item of downloads) {
    await download(item);
  }
}

run();
