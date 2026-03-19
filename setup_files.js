const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/locha/Downloads/sequence';
const destDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.startsWith('frame_'));
files.sort((a, b) => {
  const numA = parseInt(a.match(/frame_(\d+)/)[1]);
  const numB = parseInt(b.match(/frame_(\d+)/)[1]);
  return numA - numB;
});

files.forEach((file, index) => {
  const srcFile = path.join(srcDir, file);
  // Using 1-based indexing for ease, e.g. 0001.webp, 0002.webp
  const destFile = path.join(destDir, `${(index + 1).toString().padStart(4, '0')}.webp`);
  fs.copyFileSync(srcFile, destFile);
});
console.log(`Copied ${files.length} files to public/sequence.`);
