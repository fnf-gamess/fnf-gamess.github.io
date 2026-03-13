const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-garcello/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs Garcello – Emotional Rhythm Battle Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Experience one of the most memorable FNF mods in FNF Vs Garcello, featuring emotional songs, smooth beats, and a powerful musical story.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs Garcello – Emotional Rhythm Battle Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Experience one of the most memorable FNF mods in FNF Vs Garcello, featuring emotional songs, smooth beats, and a powerful musical story.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Experience one of the most memorable FNF mods in FNF Vs Garcello, featuring emotional songs, smooth beats, and a powerful musical story."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs Garcello</strong> is one of the most beloved character mods in the Friday Night Funkin’ community. Instead of focusing purely on difficulty or flashy visuals, this mod stands out because of its emotional storytelling and memorable music. Players face Garcello in a series of rhythm battles that gradually reveal more about the mysterious character.</p>
                    <p>The musical atmosphere of FNF Vs Garcello is calm at first but slowly grows more intense as the songs progress. Each track brings a slightly different tone, moving from relaxed rhythms to more dramatic sequences. This progression makes the experience feel like a complete musical journey rather than just a single rhythm duel.</p>
                    <p>Many players remember FNF Vs Garcello for its emotional impact and strong soundtrack, which helped the mod become one of the most iconic creations in the FNF modding scene.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="music"></i> A Story Told Through Music</h3>
                <div class="static-content">
                    <p>Unlike many rhythm mods that focus only on gameplay difficulty, FNF Vs Garcello places strong emphasis on character atmosphere and musical storytelling. The opponent Garcello is portrayed as a relaxed but mysterious figure, which adds personality to the performance.</p>
                    <p>Important aspects of the experience include:</p>
                    <ul>
                        <li>A character-driven rhythm battle with emotional tone</li>
                        <li>Multiple songs that gradually increase intensity</li>
                        <li>Smooth musical transitions between each stage of the duel</li>
                    </ul>
                    <p>This storytelling approach helps the rhythm battles feel meaningful and memorable.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="list-music"></i> Songs Featured in the Mod</h3>
                <div class="static-content">
                    <p>The soundtrack plays a major role in shaping the identity of FNF Vs Garcello. Each song introduces a different mood and rhythm style.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Song</th>
                                    <th>Style</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Headache</strong></td>
                                    <td>Relaxed rhythm introduction</td>
                                </tr>
                                <tr>
                                    <td><strong>Nerves</strong></td>
                                    <td>Faster tempo and stronger beats</td>
                                </tr>
                                <tr>
                                    <td><strong>Release</strong></td>
                                    <td>Emotional and dramatic tone</td>
                                </tr>
                                <tr>
                                    <td><strong>Fading</strong></td>
                                    <td>A reflective final performance</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>These tracks create a musical arc that builds tension while keeping the gameplay engaging.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="gamepad-2"></i> Gameplay Mechanics</h3>
                <div class="static-content">
                    <p>The gameplay follows the classic Friday Night Funkin’ system. Arrows appear on the screen, and players must press the corresponding keys in time with the music.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Control Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Directional Input</strong></td>
                                    <td>Press the arrows to match the soulful melody</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter Key</strong></td>
                                    <td>Start the emotional journey or pause the session</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Depart from the smoke-filled stage and return to the menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Maintaining rhythm accuracy is essential for keeping the performance meter balanced during the battle.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Playing the Mod</h3>
                <div class="static-content">
                    <p>The songs in FNF Vs Garcello are known for their smooth rhythm flow. Following the beat carefully can help players maintain accuracy even when the tempo increases.</p>
                    <p>Helpful strategies include:</p>
                    <ul>
                        <li>Absorb the mellow rhythm and follow the unique vocal cues</li>
                        <li>Maintain a consistent pace through the extended musical patterns</li>
                        <li>Remain calm and composed as the emotional melody intensifies</li>
                    </ul>
                    <p>Recognizing musical patterns early can help players maintain long streaks of accurate notes.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods You Might Enjoy</h3>
                <div class="static-content">
                    <p>Several other popular mods also focus on memorable characters and strong musical themes.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Cassandra -->
                        <a href="/fnf-cassandra/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-cassandra.webp" alt="Cassandra" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Cassandra</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face a confident and stylish opponent in this energetic musical battle.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Sweet Licorice -->
                        <a href="/fnf-sweet-licorice/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(241, 196, 15, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-sweet-licorice.webp" alt="Sweet Licorice" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Sweet Licorice</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers a playful rhythm experience with a vibrant candy-inspired theme.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #f1c40f; width: 18px;"></i>
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

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Vs Garcello with Premium Visual Style');
