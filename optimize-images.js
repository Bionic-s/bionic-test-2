// Performance image optimization script
import fs from 'fs';
import path from 'path';

const BASE = '/root/bionic-test-2/src';

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules') walkDir(fullPath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function optimizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. Hero images: "loading=\"eager\"" → "fetchpriority=\"high\" decoding=\"async\""
  if (content.includes('loading="eager"')) {
    content = content.replace(/loading="eager"/g, 'fetchpriority="high" decoding="async"');
    changed = true;
  }

  // 2. Add loading="lazy" decoding="async" to partner logos in PartnerLogo.tsx
  if (filePath.endsWith('PartnerLogo.tsx')) {
    // The img tag in PartnerLogo doesn't have loading attribute
    if (!content.includes('loading=') && content.includes('<img')) {
      content = content.replace(
        /className=\{`object-contain/,
        'loading="lazy" decoding="async" className={`object-contain'
      );
      changed = true;
    }
  }

  // 3. Footer logos - add loading="lazy" decoding="async" 
  if (filePath.endsWith('Footer.tsx') || filePath.endsWith('FooterAr.tsx')) {
    // Already have various attributes, check img tags
    if (content.includes('<img') && !content.includes('loading=')) {
      content = content.replace(
        /(<img\s)/g,
        '<img loading="lazy" decoding="async" '
      );
      changed = true;
    }
  }

  // 4. Header logos - add fetchpriority="high" (above fold)
  if (filePath.endsWith('Header.tsx') || filePath.endsWith('HeaderAr.tsx')) {
    if (content.includes('<img') && !content.includes('fetchpriority=')) {
      content = content.replace(
        /(<img\s)/g,
        '<img fetchpriority="high" '
      );
      changed = true;
    }
  }

  // 5. Old Arabic pages - add loading="lazy" to bionic logo images
  if (content.includes('bionic-full-white.svg') && !content.includes('loading=')) {
    const relPath = path.relative(BASE, filePath);
    if (relPath.startsWith('pages/Arabic')) {
      content = content.replace(
        /<img src="\/test-site-2\/bionic-full-white\.svg"/g,
        '<img loading="lazy" decoding="async" src="/test-site-2/bionic-full-white.svg"'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  return changed;
}

console.log('⚡ Optimizing images for performance...');
const allFiles = walkDir(BASE);
let optimized = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(BASE, filePath);
  if (optimizeFile(filePath)) {
    console.log(`  ✓ Optimized: ${relPath}`);
    optimized++;
  }
}

console.log(`\n✅ Optimized ${optimized} files`);
