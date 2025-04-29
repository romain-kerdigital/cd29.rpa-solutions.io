/**
 * Migration script to help convert MkDocs to Docusaurus files
 * 
 * This script takes MkDocs markdown files and converts them to
 * Docusaurus format by adding frontmatter and transforming
 * admonitions to the correct format.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const mkdocsDir = './backup-mkdocs/docs';
const docusaurusDir = './docs';
const sidebarPositions = {
  'SAFI': {
    'presentation.md': 1,
    'A_Initialisation.md': 2,
    'B_CreationNouveauMarche.md': 3,
    'C_CreationContractant.md': 4,
    'D_FormulesActes.md': 5,
    'E_RapportExecution.md': 6,
    'F_Finalisation.md': 7,
    'G_RapportErreur.md': 8,
    'annexes.md': 9,
  },
  'memo-javascript': {
    'general.md': 1,
    'grand-angle.md': 2,
  }
};

// Ensure directories exist
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Convert MkDocs admonitions to Docusaurus admonitions
function convertAdmonitions(content) {
  // Convert !!! Note to :::note
  content = content.replace(/!!! Note([\s\S]*?)(?=\n\n|\n!!! |\n$)/g, ':::note$1\n:::');
  
  // Convert !!! Warning to :::warning
  content = content.replace(/!!! Warning([\s\S]*?)(?=\n\n|\n!!! |\n$)/g, ':::warning$1\n:::');
  
  // Convert !!! Tip to :::tip
  content = content.replace(/!!! Tip([\s\S]*?)(?=\n\n|\n!!! |\n$)/g, ':::tip$1\n:::');
  
  // Convert !!! Danger to :::danger
  content = content.replace(/!!! Danger([\s\S]*?)(?=\n\n|\n!!! |\n$)/g, ':::danger$1\n:::');
  
  // Convert !!! Info to :::info
  content = content.replace(/!!! Info([\s\S]*?)(?=\n\n|\n!!! |\n$)/g, ':::info$1\n:::');
  
  return content;
}

// Process a file
function processFile(sourceDir, targetDir, subdir, file) {
  const sourcePath = path.join(sourceDir, subdir, file);
  const targetPath = path.join(targetDir, subdir, file);
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`Source file doesn't exist: ${sourcePath}`);
    return;
  }
  
  ensureDirectoryExistence(targetPath);
  
  let content = fs.readFileSync(sourcePath, 'utf8');
  
  // Extract title from content (first # heading)
  const titleMatch = content.match(/^# (.*)/m);
  const title = titleMatch ? titleMatch[1] : path.basename(file, '.md');
  
  // Get id from filename (without extension)
  const id = path.basename(file, '.md');
  
  // Get sidebar position
  const position = sidebarPositions[subdir] && sidebarPositions[subdir][file] 
    ? sidebarPositions[subdir][file] 
    : 1;
    
  // Create frontmatter
  const frontmatter = `---
id: ${id}
title: ${title}
sidebar_position: ${position}
---

`;
  
  // Convert admonitions
  content = convertAdmonitions(content);
  
  // Convert video syntax
  content = content.replace(/!\[type:video\]\((.*?)\)/g, '<video controls src="$1"></video>');
  
  // Fix internal links
  content = content.replace(/\[([^\]]+)\]\(\/([^)]+)\)/g, '[$1](/$2)');
  
  // Write the file
  fs.writeFileSync(targetPath, frontmatter + content);
  console.log(`Converted: ${targetPath}`);
}

// Process all SAFI files
['C_CreationContractant.md', 'D_FormulesActes.md', 'E_RapportExecution.md', 
 'F_Finalisation.md', 'G_RapportErreur.md', 'annexes.md'].forEach(file => {
  processFile(mkdocsDir, docusaurusDir, 'SAFI', file);
});

// Process all memo-javascript files
['grand-angle.md'].forEach(file => {
  processFile(mkdocsDir, docusaurusDir, 'memo-javascript', file);
});

console.log('Migration complete!'); 