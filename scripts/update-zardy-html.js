const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-zardy/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs Zardy – Play the Foolhardy Scarecrow Mod Online</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Face the supernatural scarecrow Zardy in the legendary cornfield battle. Survive the intense Foolhardy rhythm track in FNF Vs Zardy mod online.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs Zardy – Play the Foolhardy Scarecrow Mod Online">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Face the supernatural scarecrow Zardy in the legendary cornfield battle. Survive the intense Foolhardy rhythm track in FNF Vs Zardy mod online.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Face the supernatural scarecrow Zardy in the legendary cornfield battle. Survive the intense Foolhardy rhythm track in FNF Vs Zardy mod online."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs Zardy</strong> is one of the most iconic and challenging rhythm mods in the Friday Night Funkin' community. Set in the eerie atmosphere of Zardy's Maze, Boyfriend wanders into a mysterious cornfield only to be confronted by Zardy, a supernatural scarecrow with a flow that's as lethal as his scythe. This mod isn't just a test of rhythm; it's a test of endurance against an unrelenting opponent.</p>
                    <p>The main track, <em>Foolhardy</em>, is famous for its length and unrelenting speed. Unlike standard weeks, this mod focuses on a single, marathon-style song that increases in intensity, featuring complex cord jacks and rapid-fire note streams that challenge even the most seasoned rhythm gamers.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="skull"></i> The Legend of Zardy and the Maze</h2>
                <div class="static-content">
                    <p>Zardy originally hails from his own game, <em>Zardy's Maze</em>, where he hunts players through a field of corn. This FNF mod captures that same sense of dread, using atmospheric sound design and striking character animations. The visual presentation and high-stakes musical duel create an immersive experience that has become a staple for fans of difficult FNF mods.</p>
                    <ul>
                        <li>Supernatural scarecrow opponent with unique animations</li>
                        <li>Intense and marathon-style rhythm track: Foolhardy</li>
                        <li>Atmospheric stage setting under the moonlight</li>
                    </ul>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="shield-check"></i> Defensive Rhythm Maneuvers</h3>
                <div class="static-content">
                    <p>To survive the cornfield conflict, you must maintain absolute focus. The difficulty curve is steep, and accuracy becomes progressively more important as the song evolves.</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;"><strong>Note Accuracy:</strong> Focus on the arrows above Zardy's animations to stay consistent.</li>
                        <li style="margin-bottom:8px;"><strong>Stamina Management:</strong> Prepare for a nearly 4-minute marathon of notes.</li>
                        <li style="margin-bottom:8px;"><strong>Audio Cues:</strong> Use the distinct vocals to anticipate rapid note triplets.</li>
                    </ul>
                    
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
                                    <td><strong>Cornfield Keys</strong></td>
                                    <td>Match the scythe-like rhythm of the notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the supernatural cornfield showdown</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to retreat from the field</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Legend Mods</h2>
                <div class="static-content">
                    <p>Try these other legendary FNF mods, each offering a unique character or challenging melodic twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Stickmin -->
                        <a href="/fnf-vs-henry-stickmin/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-henry-stickmin.webp" alt="Stickmin" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Henry Stickmin</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Step into a high-energy rhythm battle with the iconic stickman hero.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Minus -->
                        <a href="/fnf-minus/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 204, 113, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-minus.webp" alt="FNF Minus" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Minus</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Introduces a complete visual overhaul inspired by health bar icons.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ecc71; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/horror.games/" class="category-pill">Horror</a>
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing content wrapper or body content
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Vs Zardy with Premium Visual Style');
