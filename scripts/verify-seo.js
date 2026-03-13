const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');
const gamesDataStr = fs.readFileSync(path.join(baseDir, 'assets', 'js', 'games-data.js'), 'utf8');

// The games are stored in an array: const FNF_GAMES_DATA = [ { slug: '/game-slug/' }, ... ]
const slugMatches = [...gamesDataStr.matchAll(/slug:\s*["']([^"']+)["']/g)];
const allSlugs = slugMatches.map(m => m[1]);

console.log('Total game slugs in games-data.js:', allSlugs.length);

const activeGameSlugs = allSlugs.filter(s => s !== '/'); // Exclude home page if it's there
console.log('Active game pages:', activeGameSlugs.length);

let issues = 0;
let h1Issues = 0;

for (const slug of activeGameSlugs) {
    // slug is usually like "/fnf-minus/"
    const dirName = slug.replace(/\//g, '');
    const indexPath = path.join(baseDir, dirName, 'index.html');

    if (!fs.existsSync(indexPath)) {
        console.log(`[Missing] ${dirName}/index.html missing!`);
        continue;
    }

    let html = fs.readFileSync(indexPath, 'utf8');

    // Check canonical
    const expectedCanonical = `https://fnf-games.online/${dirName}`;
    const canonicalRegex = /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/i;
    const canomatch = html.match(canonicalRegex);

    let needsCanonicalWrite = false;
    let needsH1Write = false;

    if (!canomatch) {
        console.log(`[Canonical] No canonical found for ${dirName}`);
    } else {
        const actualHref = canomatch[1];
        if (actualHref !== expectedCanonical) {
            console.log(`[Canonical] ${dirName} has ${actualHref}, fixing to ${expectedCanonical}`);
            html = html.replace(canonicalRegex, `<link rel="canonical" href="${expectedCanonical}" />`);
            needsCanonicalWrite = true;
            issues++;
        }
    }

    // Check H1s
    const h1Regex = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
    const h1s = [...html.matchAll(h1Regex)];
    if (h1s.length > 1) {
        console.log(`[H1] ${dirName} has ${h1s.length} H1 tags.`);
        h1Issues++;

        // Remove static-content-title if it exists
        if (/<h1\b[^>]*class="static-content-title"/.test(html)) {
            console.log(`  -> Removing static-content-title`);
            html = html.replace(/<h1\b[^>]*class="static-content-title"[^>]*>[\s\S]*?<\/h1>\s*/gi, '');
            needsH1Write = true;
        } else {
            console.log(`  -> Removing all but the first (game-title) h1`);
            // we want to keep the <h1 class="game-title"> and convert others to <h2>
            html = html.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, (match, attrs, content) => {
                if (attrs.includes('game-title')) return match; // keep game-title
                return `<h2${attrs}>${content}</h2>`; // change others to h2
            });
            needsH1Write = true;
        }
    } else if (h1s.length === 0) {
        console.log(`[H1] ${dirName} has NO H1 tags!`);
    }

    if (needsCanonicalWrite || needsH1Write) {
        fs.writeFileSync(indexPath, html, 'utf8');
    }
}

console.log(`\nVerified ${activeGameSlugs.length} games. Fixed canonicals: ${issues}. Fixed H1s: ${h1Issues}.`);
