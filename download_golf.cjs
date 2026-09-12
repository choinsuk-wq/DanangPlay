const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'golf');
fs.mkdirSync(dir, { recursive: true });

const images = [
  {
    name: 'brg.jpg',
    url: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'montgomerie.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/DZ6_2501_Sunny_day_on_the_green_palm_trees_blue_skies_and_a_peaceful_fairway_awaiting_the_next_shot.jpg'
  },
  {
    name: 'banahills.jpg',
    url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'vinpearl.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/DZ6_2508_Sun-drenched_golf_course_beside_a_calm_water_hazard_framed_by_palm_trees_and_a_clear_blue_sky.jpg'
  },
  {
    name: 'hoiana.jpg',
    url: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=80'
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
    const req = https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Downloaded (redirect):', item.name, fs.statSync(filePath).size);
            resolve();
          });
        });
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded:', item.name, fs.statSync(filePath).size);
        resolve();
      });
    });
    req.on('error', err => {
      console.error('Error downloading:', item.name, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads completed!');
}

run();
