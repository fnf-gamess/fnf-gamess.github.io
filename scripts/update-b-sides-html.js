const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-b-sides/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF B-Sides – Play the Classic Songs with a New Twist</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Rediscover classic Friday Night Funkin’ songs in FNF B-Sides. Remixed tracks, bold colors, and faster rhythms create a fresh challenge.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF B-Sides – Play the Classic Songs with a New Twist">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Rediscover classic Friday Night Funkin’ songs in FNF B-Sides. Remixed tracks, bold colors, and faster rhythms create a fresh challenge.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Rediscover classic Friday Night Funkin’ songs in FNF B-Sides. Remixed tracks, bold colors, and faster rhythms create a fresh challenge."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF B-Sides</strong> is one of the most recognizable remix mods created by the Friday Night Funkin’ community. Instead of introducing entirely new characters, the mod reimagines the original game with vibrant color changes and energetic remixed versions of the classic soundtrack. The result is a familiar rhythm experience that feels refreshed and more intense.</p>
                    <p>The most noticeable change in FNF B-Sides is its bold visual style. Characters appear with bright alternate color palettes, and the stages feel more vibrant than in the base game. At the same time, the music tracks have been remixed to add new energy and rhythm complexity, giving players a fresh challenge even if they already know the original songs.</p>
                    <p>Many fans enjoy FNF B-Sides because it keeps the heart of the classic game while transforming the music and visuals into something more dynamic.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="layers"></i> What Makes B-Sides Different</h2>
                <div class="static-content">
                    <p>Unlike many mods that introduce entirely new stories, FNF B-Sides focuses on remixing the original experience. Every familiar opponent and stage receives a musical and visual update.</p>
                    <p>The mod stands out because of several creative changes:</p>
                    <ul>
                        <li>Remixed versions of classic Friday Night Funkin’ songs</li>
                        <li>Bright alternate color palettes for characters</li>
                        <li>Faster and more energetic rhythm sequences</li>
                    </ul>
                    <p>These modifications make the gameplay feel familiar while still offering a new rhythm challenge.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> How the Rhythm Gameplay Works</h2>
                <div class="static-content">
                    <p>The gameplay system in FNF B-Sides remains consistent with the original Friday Night Funkin’ structure. Players must match incoming arrows with the correct directional keys as they reach the target markers.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Gameplay Element</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Arrow Timing</strong></td>
                                    <td>Hit notes precisely as they reach the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Shows how well the player keeps the rhythm</td>
                                </tr>
                                <tr>
                                    <td><strong>Remix Difficulty</strong></td>
                                    <td>Some songs become faster and more demanding</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Because the songs are remixed, players may encounter different rhythms compared to the original versions.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Controls Overview</h3>
                <div class="static-content">
                    <p>The control system remains simple and accessible for both new and experienced rhythm players.</p>
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
                                    <td><strong>Remix Keys</strong></td>
                                    <td>Match the increased speed of the B-Side notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter Key</strong></td>
                                    <td>Launch the remixed track or pause the action</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to go back to the song list</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The classic control scheme ensures you can handle the remixed speed without any confusion.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Playing B-Sides</h3>
                <div class="static-content">
                    <p>Remixed songs can sometimes feel unfamiliar, even if the player knows the original soundtrack. Paying attention to the rhythm of the remix helps maintain accuracy.</p>
                    <p>Remix mastery strategies:</p>
                    <ul>
                        <li>Embrace the high-octane energy of the reimagined remixes</li>
                        <li>Anticipate the increased speed of the remixed note patterns</li>
                        <li>Keep your concentration sharp during the most demanding musical sections</li>
                    </ul>
                    <p>Practicing these techniques makes it easier to adapt to the new musical patterns.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> Other FNF Mods Worth Trying</h2>
                <div class="static-content">
                    <p>Players who enjoy remix-style mods may also like other creative rhythm experiences.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Neo -->
                        <a href="/friday-night-funkin-neo/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 255, 255, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/friday-night-funkin-neo.webp" alt="Neo" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">Friday Night Funkin' Neo</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Enter a digital world of glowing colors and electronic remixes.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #00ffff; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Hex 2 -->
                        <a href="/fnf-vs-hex-2/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-hex-2.webp" alt="Hex 2" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Hex 2</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Pits you against a talented robotic friend in a mechanical groove.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF B-Sides with Premium Visual Style');
