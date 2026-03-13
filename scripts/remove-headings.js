const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');

// 1. First, update main.js (game cards)
const mainJsPath = path.join(baseDir, 'assets', 'js', 'main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');
mainJs = mainJs.replace(/<h3 class="game-title">/g, '<div class="game-title">');
mainJs = mainJs.replace(/<\/h3>/g, '</div>');
fs.writeFileSync(mainJsPath, mainJs, 'utf8');
console.log('Updated main.js (h3 -> div)');

// Also update search.js if it exists
const searchJsPath = path.join(baseDir, 'assets', 'js', 'search.js');
if (fs.existsSync(searchJsPath)) {
    let searchJs = fs.readFileSync(searchJsPath, 'utf8');
    searchJs = searchJs.replace(/<h3 class="game-title">/g, '<div class="game-title">');
    searchJs = searchJs.replace(/<\/h3>/g, '</div>');
    fs.writeFileSync(searchJsPath, searchJs, 'utf8');
    console.log('Updated search.js (h3 -> div)');
}

// 2. Scan all index.html files (root, category pages, static pages, game pages)
// Let's do a recursive scan
const getAllFiles = function (dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (!['.vscode', '.git', 'assets', 'scripts'].includes(file)) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            }
        } else {
            if (file === 'index.html') {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
};

// Also include root index.html
const htmlFiles = getAllFiles(baseDir);
if (fs.existsSync(path.join(baseDir, 'index.html'))) {
    htmlFiles.push(path.join(baseDir, 'index.html'));
}

console.log('Found ' + htmlFiles.length + ' HTML files.');

let countH4Replaced = 0;
let countH3Replaced = 0;

for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');
    let originalHtml = html;

    // Replace footer H4s with div class="footer-title"
    // <h4>FNF</h4>
    // <h4>Quick Links</h4>
    // <h4>Legal</h4>
    html = html.replace(/<h4>(FNF|Quick Links|Legal)<\/h4>/g, '<div class="footer-title">$1</div>');

    // Also check if there are any hardcoded game cards in HTML using h3 game-title
    html = html.replace(/<h3 class="game-title">([\s\S]*?)<\/h3>/g, '<div class="game-title">$1</div>');

    // Make sure we add a style block for .footer-title if we replaced h4s
    if (html !== originalHtml) {
        fs.writeFileSync(file, html, 'utf8');
        countH4Replaced++;
    }
}

// 3. Update styles.css to style .footer-title
const cssPath = path.join(baseDir, 'assets', 'css', 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('.footer-title')) {
    css += `\n\n/* Footer title replacements for h4 */\n.footer-title {\n    font-size: 1.1rem;\n    font-weight: 700;\n    margin-bottom: 12px;\n    color: var(--text-primary);\n}\n`;
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Updated styles.css with .footer-title');
}

console.log('Processed ' + countH4Replaced + ' files with footers.');
