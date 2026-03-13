const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-henry-stickmin/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs Henry Stickmin – Iconic Stickman Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Face the legendary Henry Stickmin in this energetic Friday Night Funkin’ mod. Experience the comedy and rhythm of the Stickmin universe through catchy music.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs Henry Stickmin – Iconic Stickman Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Face the legendary Henry Stickmin in this energetic Friday Night Funkin’ mod. Experience the comedy and rhythm of the Stickmin universe through catchy music.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Face the legendary Henry Stickmin in this energetic Friday Night Funkin’ mod. Experience the comedy and rhythm of the Stickmin universe through catchy music."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs Henry Stickmin</strong> is a creative Friday Night Funkin’ mod that brings the iconic character from the Henry Stickmin series into the world of rhythm battles. Known for its humor, unpredictable situations, and action-packed storytelling, the Henry Stickmin universe fits surprisingly well with the fast-paced musical gameplay of FNF. In this mod, players face Henry in a series of challenging rap battles while enjoying unique songs, colorful visuals, and plenty of references to the original Stickmin adventures.</p>
                    <p>The mod was created by Spider Thiago and the Stickmin Dev Team and quickly gained attention in the FNF community. Although development eventually stopped before the full version could be completed, the playable build still offers plenty of content, including multiple songs and memorable rhythm battles that fans continue to enjoy.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="smile"></i> A Comedy of Rhythm and Errors</h2>
                <div class="static-content">
                    <p>One of the most interesting aspects of this mod is how it recreates the unpredictable style of Henry Stickmin games. Unexpected animations, funny background details, and creative stage designs make each battle feel lively and entertaining. The mod also captures the quirky personality that made the Stickmin series so popular, merging comedy with the energetic music battles of FNF.</p>
                    <ul>
                        <li>Familiar characters and references from Henry’s world</li>
                        <li>Dynamic animations that capture the Stickman aesthetic</li>
                        <li>Catchy soundtracks spread across story and freeplay modes</li>
                    </ul>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="gamepad-2"></i> How to Master the Stickman Rhythm</h3>
                <div class="static-content">
                    <p>The gameplay requires strong timing and quick reactions as the songs gradually increase in difficulty. Strategic focus is key to surviving the more intense note sequences.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Control Key</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Stick Keys</strong></td>
                                    <td>Match the directional inputs with the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Start your musical journey through the Stickmin world</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to retreat and choose a new path</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Adventure Mods</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); display: grid; gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Garcello -->
                        <a href="/fnf-vs-garcello/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-garcello.webp" alt="Garcello" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Garcello</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Offers a powerful musical story with a calm and memorable atmosphere.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Zardy -->
                        <a href="/fnf-vs-zardy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-zardy.webp" alt="Zardy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Zardy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers an intense and atmospheric rhythm battle in a cornfield.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing content wrapper or body content
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Vs Henry Stickmin with Premium Visual Style');
