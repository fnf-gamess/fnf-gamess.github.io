const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

const today = '2026-03-18';
const skipUrls = [
    'https://fnf-games.online/about-us/',
    'https://fnf-games.online/contact-us/',
    'https://fnf-games.online/dmca/',
    'https://fnf-games.online/privacy-policy/',
    'https://fnf-games.online/terms-of-service/'
];

// Regex to find <url> blocks
const urlRegex = /<url>(.*?)<\/url>/gs;

let updatedCount = 0;

const newContent = content.replace(urlRegex, (match, urlContent) => {
    const locMatch = urlContent.match(/<loc>(.*?)<\/loc>/);
    if (locMatch) {
        const loc = locMatch[1];
        if (!skipUrls.includes(loc)) {
            // Update lastmod
            if (match.includes('<lastmod>')) {
                const updatedMatch = match.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${today}</lastmod>`);
                if (updatedMatch !== match) {
                    updatedCount++;
                    return updatedMatch;
                }
            } else {
                // If lastmod not present, add it after loc
                const updatedMatch = match.replace(/<\/loc>/, `</loc><lastmod>${today}</lastmod>`);
                updatedCount++;
                return updatedMatch;
            }
        }
    }
    return match;
});

fs.writeFileSync(sitemapPath, newContent, 'utf8');
console.log(`Sitemap dates updated for ${updatedCount} game pages.`);
