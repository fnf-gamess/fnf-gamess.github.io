const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();

// Load games data to identify game slugs
const gamesDataContent = fs.readFileSync(path.join(ROOT_DIR, 'assets', 'js', 'games-data.js'), 'utf8');
// Simple extraction of slugs
const slugs = [];
const slugRegex = /slug:\s*["']\/([^"']+)["']/g;
let match;
while ((match = slugRegex.exec(gamesDataContent)) !== null) {
    const slug = match[1];
    // Ignore /, or pages that are recognized as categories/static
    if (slug !== '' && !slug.includes('.games') && !['fnf-mods', 'about-us', 'contact-us', 'dmca', 'privacy-policy', 'terms-of-service', 'favorite-games', 'new-games', 'hot-games'].includes(slug)) {
        slugs.push(slug);
    }
}

console.log(`Found ${slugs.length} game slugs to process.`);

slugs.forEach(slug => {
    const dirPath = path.join(ROOT_DIR, slug);
    const indexPath = path.join(dirPath, 'index.html');
    const targetPath = path.join(ROOT_DIR, slug + '.html');

    if (fs.existsSync(indexPath)) {
        // Read and move
        let content = fs.readFileSync(indexPath, 'utf8');
        
        // Ensure canonical is correct (no trailing slash)
        const canonicalRegex = /<link rel="canonical" href="([^"]*)\/?" \/>/;
        content = content.replace(canonicalRegex, (m, p1) => {
            const cleanUrl = p1.endsWith('/') ? p1.slice(0, -1) : p1;
            return `<link rel="canonical" href="${cleanUrl}" />`;
        });

        // Ensure OG URL is correct
        const ogUrlRegex = /<meta property="og:url" content="([^"]*)\/?" \/>/;
        content = content.replace(ogUrlRegex, (m, p1) => {
            const cleanUrl = p1.endsWith('/') ? p1.slice(0, -1) : p1;
            return `<meta property="og:url" content="${cleanUrl}" />`;
        });

        fs.writeFileSync(targetPath, content);
        console.log(`Converted: ${slug}/index.html -> ${slug}.html`);
        
        // Remove old files and dir
        fs.unlinkSync(indexPath);
        // Check if dir is empty before removing
        const files = fs.readdirSync(dirPath);
        if (files.length === 0) {
            fs.rmdirSync(dirPath);
        } else {
            console.warn(`Directory ${slug} is not empty, skipping removal.`);
        }
    } else {
        console.log(`No index.html found for ${slug}, skipping.`);
    }
});

console.log("Conversion complete.");
