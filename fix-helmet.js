// Fix Helmet injection for multi-line opening tags
// The original script placed Helmet after <div but before className="..." >
// This script: moves Helmet to AFTER the closing > of the opening tag

import fs from 'fs';
import path from 'path';

const BASE = '/root/bionic-test-2/src/pages';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Pattern: <Helmet>...</Helmet>  followed by attributes on the same line
  // Example: </Helmet> className="min-h-screen bg-bg-primary">
  const brokenPattern = /(<Helmet>[\s\S]*?<\/Helmet>)(\s+(?:className|style|id|dir|lang|ref|onClick)[\s\S]*?>)/;
  
  const match = content.match(brokenPattern);
  if (!match) {
    // Check for different pattern where Helmet is between div and attributes
    const pattern2 = /(<div|<section|<main|<article)(\s*\n\s*<Helmet>[\s\S]*?<\/Helmet>)([\s\S]*?>)/;
    const match2 = content.match(pattern2);
    if (!match2) {
      // Already OK
      return false;
    }
    
    const beforeTag = match2[1];
    const helmetBlock = match2[2].replace(/^\s*\n\s*/, ''); // Clean leading whitespace
    const afterAttrs = match2[3];
    
    // Reconstruct: <div className="...">\n  <Helmet>...</Helmet>
    const replacement = `${beforeTag}${afterAttrs}\n${helmetBlock}`;
    content = content.replace(pattern2, replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  // Pattern 1: Helmet block followed by attributes and closing >
  // Move Helmet after the closing >
  const fullMatch = match[0];
  const helmetBlock = match[1];
  const attrsAndClose = match[2];
  
  // Find where to insert: after the attrsAndClose
  const replacement = attrsAndClose + '\n' + helmetBlock;
  content = content.replace(fullMatch, replacement);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
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

console.log('🔧 Fixing Helmet placement in page files...');
const allFiles = walkDir(BASE);
let fixed = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(BASE, filePath);
  if (fixFile(filePath)) {
    console.log(`  ✓ Fixed: ${relPath}`);
    fixed++;
  }
}

console.log(`\n✅ Fixed ${fixed} files`);
