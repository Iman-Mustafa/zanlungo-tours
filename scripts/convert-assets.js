const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const zanlungoDir = path.join(__dirname, '..', 'ZANLUNGO');
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
  const publicVideosDir = path.join(__dirname, '..', 'public', 'videos');
  const publicDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }
  if (!fs.existsSync(publicVideosDir)) {
    fs.mkdirSync(publicVideosDir, { recursive: true });
  }

  console.log('1. Converting logo to WebP & Favicons...');
  const logoPath = path.join(zanlungoDir, 'zanlungo-logo.png');
  
  // Convert logo to WebP
  await sharp(logoPath)
    .webp({ quality: 95, lossless: false })
    .toFile(path.join(publicImagesDir, 'logo.webp'));
  console.log('Created public/images/logo.webp');

  // Convert logo to favicon PNG
  await sharp(logoPath)
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created public/favicon.png');

  await sharp(logoPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created public/favicon.ico');

  // 2. Convert all JPGs in ZANLUNGO to WEBP
  const files = fs.readdirSync(zanlungoDir);
  const jpgFiles = files.filter(f => f.match(/\.jpe?g$/i));

  console.log(`2. Converting ${jpgFiles.length} photos to .webp...`);
  for (const file of jpgFiles) {
    const inputPath = path.join(zanlungoDir, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(publicImagesDir, `${baseName}.webp`);
    
    await sharp(inputPath)
      .webp({ quality: 88 })
      .toFile(outputPath);
    console.log(`Converted ${file} -> ${baseName}.webp`);
  }

  // 3. Create semantic aliases for clean, drop-in replacement across the app
  const aliases = [
    // Hero slides:
    { src: 'IMG-20261017-WA0046.jpg', dest: 'hero-serengeti.webp' }, // Real safari with smiling Capitano & lions
    { src: 'IMG-20261017-WA0051.jpg', dest: 'hero-zanzibar.webp' },  // Real dhow boat over turquoise sea
    { src: 'IMG-20261017-WA0042.jpg', dest: 'hero-flyin.webp' },     // Real Mikumi hippo pool with tourists
    { src: 'IMG-20261017-WA0050.jpg', dest: 'hero-sandbank.webp' },  // Real Nakupenda sandbank
    // Welcome photo:
    { src: 'IMG-20261017-WA0046.jpg', dest: 'welcome-safari.webp' }, 
    { src: 'IMG-20261017-WA0040.jpg', dest: 'capitano-lungo-beach.webp' },
    // Cards:
    { src: 'IMG-20261017-WA0043.jpg', dest: 'card-transfer.webp' },  // Airport arrival
    { src: 'IMG-20261017-WA0051.jpg', dest: 'card-safari-blue.webp' }, // Dhow marine cruise
    { src: 'IMG-20261017-WA0042.jpg', dest: 'card-flyin.webp' },       // Mikumi national park
    { src: 'IMG-20261017-WA0046.jpg', dest: 'card-serengeti.webp' },   // Real lions safari
    { src: 'IMG-20261017-WA0050.jpg', dest: 'card-nakupenda.webp' },   // Sandbank
    { src: 'IMG-20261017-WA0041.jpg', dest: 'card-village.webp' },     // Village and school
    { src: 'IMG-20261017-WA0037.jpg', dest: 'brochure-mnemba.webp' },  // Mnemba brochure
    { src: 'IMG-20261017-WA0039.jpg', dest: 'brochure-excursions.webp' } // Zanlungo Excursions
  ];

  for (const alias of aliases) {
    const inputPath = path.join(zanlungoDir, alias.src);
    const outputPath = path.join(publicImagesDir, alias.dest);
    await sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(outputPath);
    console.log(`Created alias ${alias.dest} from ${alias.src}`);
  }

  // 4. Copy videos to public/videos
  const mp4Files = files.filter(f => f.match(/\.mp4$/i));
  console.log(`3. Copying ${mp4Files.length} videos to public/videos/...`);
  for (const video of mp4Files) {
    const src = path.join(zanlungoDir, video);
    const dest = path.join(publicVideosDir, video);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${video} -> public/videos/${video}`);
  }

  // Semantic video copies
  const videoAliases = [
    { src: 'VID-20261017-WA0053.mp4', dest: 'zanzibar-experience.mp4' },
    { src: 'VID-20261017-WA0030.mp4', dest: 'safari-rhinos.mp4' },
    { src: 'VID-20261017-WA0058.mp4', dest: 'safari-lions.mp4' },
    { src: 'VID-20261017-WA0048.mp4', dest: 'dhow-seafood.mp4' },
    { src: 'VID-20261017-WA0059.mp4', dest: 'capitano-mikumi.mp4' }
  ];

  for (const va of videoAliases) {
    const src = path.join(zanlungoDir, va.src);
    const dest = path.join(publicVideosDir, va.dest);
    fs.copyFileSync(src, dest);
    console.log(`Copied video alias ${va.dest}`);
  }

  console.log('All assets converted and organized successfully!');
}

run().catch(err => {
  console.error('Error during asset conversion:', err);
  process.exit(1);
});
