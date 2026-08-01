const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
  { from: /IJARCM/g, to: 'IJLSCL' },
  { from: /ijarcm/g, to: 'ijlscl' },
  { from: /International Journal of Academic Research in Commerce & Management/g, to: 'International Journal of Legal Studies and Contemporary Law' },
  { from: /Commerce & Management/g, to: 'Legal Studies and Contemporary Law' },
  { from: /Commerce \& Management/g, to: 'Legal Studies and Contemporary Law' }
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.json'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      for (const rep of REPLACEMENTS) {
        content = content.replace(rep.from, rep.to);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

// Target directories
const targets = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'public')
];

for (const target of targets) {
  if (fs.existsSync(target)) {
    processDirectory(target);
  }
}

// Update package.json name specifically
const pkgPath = path.join(__dirname, 'package.json');
if (fs.existsSync(pkgPath)) {
  let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = 'ijlscl';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
  console.log('Updated package.json name');
}

console.log('Rebranding complete.');
