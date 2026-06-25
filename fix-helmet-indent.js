// Fix Helmet block indentation properly
import fs from 'fs';
import path from 'path';

const BASE = '/root/bionic-test-2/src/pages';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    
    if (trimmed === '<Helmet>' && lines[i].trimStart() === lines[i]) {
      // Helmet at column 0 - needs indentation
      // Look at next line's indentation to determine target
      let titleIndent = '        '; // default 8 spaces
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        const t = lines[j].trim();
        if (t.startsWith('<title>') || t.startsWith('<meta')) {
          const match = lines[j].match(/^(\s+)/);
          if (match) {
            titleIndent = match[1];
          }
          break;
        }
      }
      
      // Helmet should be indented 2 less than title
      const helmetIndent = titleIndent.length >= 2 ? titleIndent.slice(0, -2) : '      ';
      lines[i] = helmetIndent + '<Helmet>';
      changed = true;
    }
    
    if (trimmed === '</Helmet>' && lines[i].trimStart() === lines[i]) {
      // Same indentation logic
      let titleIndent = '        ';
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        const t = lines[j].trim();
        if (t.startsWith('<title>') || t.startsWith('<meta')) {
          const match = lines[j].match(/^(\s+)/);
          if (match) {
            titleIndent = match[1];
          }
          break;
        }
      }
      const helmetIndent = titleIndent.length >= 2 ? titleIndent.slice(0, -2) : '      ';
      lines[i] = helmetIndent + '</Helmet>';
      changed = true;
    }
  }

  if (changed) {
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  return changed;
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('🔧 Fixing Helmet indentation...');
const allFiles = walkDir(BASE);
let fixed = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(BASE, filePath);
  if (fixFile(filePath)) {
    console.log(`  ✓ Fixed indent: ${relPath}`);
    fixed++;
  }
}

console.log(`\n✅ Fixed indentation in ${fixed} files`);
