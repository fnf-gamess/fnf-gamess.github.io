const fs = require('fs');
const path = require('path');

const rootDir = path.dirname(__dirname);
const skipDirs = new Set(['.git', 'assets', 'scripts']);
const skipFiles = new Set([
    '404.html',
    'privacy-policy/index.html',
    'terms-of-service/index.html',
    'dmca/index.html',
    'about-us/index.html',
    'contact-us/index.html'
]);

let updatedCount = 0;
let skippedCount = 0;

function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
        const filePath = path.join(currentPath, file);
        const stats = fs.statSync(filePath);
        const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
        
        if (stats.isDirectory()) {
            if (skipDirs.has(file)) continue;
            walkDir(filePath);
        } else if (file.endsWith('.html')) {
            if (skipFiles.has(relPath)) {
                // console.log(`Skipping system/legal page: ${relPath}`);
                skippedCount++;
                continue;
            }
            processFile(filePath, relPath);
        }
    }
}

function processFile(filePath, relPath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Try to find <h1 class="game-title"> (most specific)
        let gameName = null;
        const h1GameTitle = content.match(/<h1[^>]*class=["']game-title["'][^>]*>([\s\S]*?)<\/h1>/i);
        if (h1GameTitle) {
            gameName = h1GameTitle[1];
        } else {
            // 2. Try to find <h1> (fallback for index/category pages)
            const h1Any = content.match(/<h1>([\s\S]*?)<\/h1>/i);
            if (h1Any) gameName = h1Any[1];
        }
        
        if (gameName) {
            // Clean gameName: remove HTML tags, trim, and collapse whitespace
            gameName = gameName.replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
            
            // Escape double quotes for meta tag content
            const metaGameName = gameName.replace(/"/g, '&quot;');
            
            let newContent = content;
            
            // Update <title>
            newContent = newContent.replace(/<title>[\s\S]*?<\/title>/i, `<title>${gameName}</title>`);
            
            // Update og:title
            newContent = newContent.replace(/<meta property=["']og:title["'] content=["'].*?["']>/gi, `<meta property="og:title" content="${metaGameName}">`);
            
            // Update twitter:title
            newContent = newContent.replace(/<meta name=["']twitter:title["'] content=["'].*?["']>/gi, `<meta name="twitter:title" content="${metaGameName}">`);
            
            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated: ${relPath} -> Title: '${gameName}'`);
                updatedCount++;
            }
        } else {
            // console.warn(`Warning: No <h1> or game-title found in ${relPath}`);
        }
    } catch (err) {
        console.error(`Error processing ${relPath}: ${err.message}`);
    }
}

console.log('Starting title standardization (Node.js version)...');
walkDir(rootDir);
console.log(`\nStandardization complete.`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} system/legal files`);
