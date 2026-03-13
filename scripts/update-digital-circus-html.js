const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-the-amazing-digital-circus/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF The Amazing Digital Circus – Digital Circus Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Step into a surreal rhythm stage in FNF The Amazing Digital Circus. Face colorful characters, follow the beat, and survive the chaotic musical performance.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF The Amazing Digital Circus – Digital Circus Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Step into a surreal rhythm stage in FNF The Amazing Digital Circus. Face colorful characters, follow the beat, and survive the chaotic musical performance.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Step into a surreal rhythm stage in FNF The Amazing Digital Circus. Face colorful characters, follow the beat, and survive the chaotic musical performance."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF The Amazing Digital Circus</strong> is a creative rhythm mod that blends the musical gameplay of Friday Night Funkin’ with the surreal atmosphere inspired by the digital circus world. The mod transforms a simple rap battle into a strange and colorful performance where characters appear in a quirky virtual environment filled with unexpected visuals and energetic music.</p>
                    <p>The stage in FNF The Amazing Digital Circus feels lively and unusual. Bright digital colors, expressive character animations, and playful effects create the impression that the entire rhythm battle is taking place inside a chaotic virtual show. Every section of the music adds new energy to the performance, making the gameplay feel dynamic from the first beat.</p>
                    <p>Players who enjoy creative crossover mods often find FNF The Amazing Digital Circus entertaining because it combines rhythm gameplay with imaginative character design. The musical duel becomes more intense as the song progresses, encouraging players to keep their timing precise.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="circus-tent"></i> Enter the Digital Circus Stage</h2>
                <div class="static-content">
                    <p>The visual presentation plays a big role in shaping the identity of the mod. Instead of a traditional street battle or concert setting, the stage resembles a strange digital show where colorful characters perform alongside the rhythm.</p>
                    <p>The experience is defined by several distinctive elements:</p>
                    <ul>
                        <li>A surreal circus-style digital environment</li>
                        <li>Bright animations that react to the rhythm of the music</li>
                        <li>Energetic soundtracks that drive the musical duel</li>
                    </ul>
                    <p>Together, these features make the rhythm battle feel playful yet unpredictable.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="zap"></i> Gameplay Highlights</h2>
                <div class="static-content">
                    <p>The gameplay of FNF The Amazing Digital Circus follows the familiar rhythm mechanics that Friday Night Funkin’ players already know. Arrows move toward the target markers while the music sets the pace for the battle.</p>
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
                                    <td><strong>Rhythm Matching</strong></td>
                                    <td>Press the correct arrow keys in sync with the music</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Shows how well the player maintains rhythm accuracy</td>
                                </tr>
                                <tr>
                                    <td><strong>Increasing Tempo</strong></td>
                                    <td>Later sections of the song become faster and more challenging</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Players must stay focused as the rhythm patterns become more complex. Accurate timing helps maintain a strong performance and keeps the musical duel balanced.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Getting Comfortable with the Controls</h3>
                <div class="static-content">
                    <p>Although the visuals may look chaotic, the control system remains simple. The challenge comes from reacting quickly to the incoming notes and staying in sync with the rhythm.</p>
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
                                    <td><strong>Virtual Keys</strong></td>
                                    <td>Press the arrows to match the digital patterns</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Launch the virtual show or pause the performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to leave the circus arena</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Because the tempo may increase during certain sections, maintaining concentration becomes important.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="brain"></i> Strategies for Keeping the Beat</h3>
                <div class="static-content">
                    <p>Understanding the rhythm of the soundtrack helps players perform better during intense moments of the song. Rather than focusing only on the arrows, listening closely to the beat can make upcoming patterns easier to anticipate.</p>
                    <p>Useful tips for improving rhythm accuracy:</p>
                    <ul>
                        <li>Tune into the unique digital tempo of the soundtrack</li>
                        <li>Position your hands efficiently over the arrow keys</li>
                        <li>Remain calm during the most chaotic note sequences</li>
                    </ul>
                    <p>These habits make it easier to handle more complex rhythm sections later in the performance.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Rhythm Mods to Discover</h2>
                <div class="static-content">
                    <p>Several other mods also feature creative characters and memorable musical battles.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Huggy Wuggy -->
                        <a href="/fnf-vs-huggy-wuggy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 168, 255, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-huggy-wuggy-poppy-playtime.webp" alt="Huggy Wuggy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Huggy Wuggy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face a mysterious blue toy character in this suspenseful musical duel.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: var(--accent-blue); width: 18px;"></i>
                        </a>

                        <!-- Card 2: Blueballs Incident -->
                        <a href="/fnf-the-blueballs-incident/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(156, 136, 255, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-the-blueballs-incident.webp" alt="Blueballs Incident" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: The Blueballs Incident</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers a dramatic rhythm experience with dark visuals and intense note patterns.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #9c88ff; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated The Amazing Digital Circus with Premium Visual Style');
