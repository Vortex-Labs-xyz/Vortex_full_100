#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lime color patterns to check
const limePatterns = [
  /#84cc16/i,
  /#a3e635/i,
  /#bef264/i,
  /#d9f99d/i,
  /lime-\d{3}/i,
  /text-lime/i,
  /bg-lime/i,
  /border-lime/i,
  /from-lime/i,
  /to-lime/i,
  /via-lime/i
];

const excludeDirs = ['node_modules', '.next', '.git', 'scripts'];
const includeExts = ['.tsx', '.ts', '.css', '.js', '.jsx'];

let foundLime = false;
const violations = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    limePatterns.forEach(pattern => {
      if (pattern.test(line)) {
        foundLime = true;
        violations.push({
          file: filePath,
          line: index + 1,
          content: line.trim(),
          pattern: pattern.toString()
        });
      }
    });
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        walkDir(filePath);
      }
    } else if (includeExts.includes(path.extname(file))) {
      checkFile(filePath);
    }
  });
}

// Start checking from project root
walkDir('.');

if (foundLime) {
  console.error('\n❌ Lime color usage detected!\n');
  violations.forEach(v => {
    console.error(`${v.file}:${v.line}`);
    console.error(`  Pattern: ${v.pattern}`);
    console.error(`  Line: ${v.content}\n`);
  });
  console.error(`Total violations: ${violations.length}`);
  process.exit(1);
} else {
  console.log('✅ No lime colors found. All clear!');
  process.exit(0);
} 