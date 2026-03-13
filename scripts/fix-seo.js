const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');
const dirs = fs.readdirSync(baseDir);

const gameDirs = dirs.filter(d => {
    const fullPath = path.join(baseDir, d);
    if (!fs.statSync(fullPath).isDirectory()) return false;
    if (!fs.existsSync(path.join(fullPath, 'index.html'))) return false;
    // Exclude special directories
    if (d === 'assets' || d === 'scripts' || d === 'search' || d.includes('.')) return false;
    // We expect 32 game directories.
    // They usually start with fnf- or friday-night-funkin-
    // Let's filter out non-game directories like fnf-mods, about-us, etc.
    const nonGames = ['fnf-mods', 'about-us', 'contact-us', 'dmca', 'privacy-policy', 'terms-of-service', '.vscode'];
    if (nonGames.includes(d)) return false;
    return true;
});

console.log('Found ' + gameDirs.length + ' potential game directories.');

let canonicalFixCount = 0;
let redundantH1Count = 0;

for (const dir of gameDirs) {
    const indexPath = path.join(baseDir, dir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf8');

    // 1. Fix canonical URL trailing slash
    // Look for <link rel="canonical" href="https://fnf-games.online/some-slug/" />
    let canonicalModified = false;
    html = html.replace(/<link\s+rel="canonical"\s+href="(https:\/\/fnf-games\.online\/[^"]+?)\/"\s*\/?>/i, (match, p1) => {
        if (p1 === "https://fnf-games.online") return match;
        // console.log(`[${dir}] Fixed canonical: ${p1}/ -> ${p1}`);
        canonicalModified = true;
        canonicalFixCount++;
        return `<link rel="canonical" href="${p1}" />`;
    });

    // 2. Fix multiple H1s
    const h1Regex = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
    const h1Matches = [...html.matchAll(h1Regex)];

    let h1Modified = false;
    if (h1Matches.length > 1) {
        // console.log(`[${dir}] Found ${h1Matches.length} H1 tags.`);

        let newHtml = html;
        let keptFirst = false;

        // Remove ANY h1 that is static-content-title
        if (newHtml.includes('class="static-content-title"')) {
            newHtml = newHtml.replace(/<h1\b[^>]*class="static-content-title"[^>]*>[\s\S]*?<\/h1>/gi, '');
            h1Modified = true;
            redundantH1Count++;
        }

        // Check if there are still > 1 h1s
        const remainingH1s = [...newHtml.matchAll(h1Regex)];
        if (remainingH1s.length > 1) {
            console.log(`  WARNING: Still has ${remainingH1s.length} H1 tags in ${dir}!`);
        }

        html = newHtml;
    }

    if (canonicalModified || h1Modified) {
        fs.writeFileSync(indexPath, html, 'utf8');
    }
}

console.log(`DONE. Processed ${gameDirs.length} games. Fixed ${canonicalFixCount} canonical links and removed ${redundantH1Count} redundant H1 tags.`);
