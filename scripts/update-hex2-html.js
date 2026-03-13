const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-hex-2/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs. Hex 2 – Rhythm Battle with the Friendly Robot</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Challenge the musical robot in FNF Vs. Hex 2. Enjoy smooth beats, lively animations, and a rhythm duel that tests timing and focus.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs. Hex 2 – Rhythm Battle with the Friendly Robot">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Challenge the musical robot in FNF Vs. Hex 2. Enjoy smooth beats, lively animations, and a rhythm duel that tests timing and focus.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Challenge the musical robot in FNF Vs. Hex 2. Enjoy smooth beats, lively animations, and a rhythm duel that tests timing and focus."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs. Hex 2</strong> continues the musical rivalry with Hex, the friendly basketball-playing robot who became one of the most popular characters in the Friday Night Funkin’ mod community. This sequel expands the rhythm experience with new songs, improved animations, and a polished stage presentation that keeps the gameplay fresh and engaging.</p>
                    <p>The charm of FNF Vs. Hex 2 lies in its smooth musical flow and vibrant character personality. Hex performs with a calm and confident attitude, turning the rhythm battle into a friendly competition rather than an intense confrontation. As the track builds momentum, players must stay focused on the beat to keep their performance meter balanced.</p>
                    <p>Many players enjoy FNF Vs. Hex 2 because it keeps the classic rhythm mechanics while introducing a refined musical style and memorable character interactions.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="cpu"></i> A Musical Duel with a Robotic Performer</h2>
                <div class="static-content">
                    <p>The stage atmosphere emphasizes the idea of a friendly musical performance rather than a typical competitive battle. Hex’s animations move smoothly with the rhythm, creating the impression that every note is part of a coordinated performance.</p>
                    <p>Highlights of the mod include:</p>
                    <ul>
                        <li>A charismatic robotic opponent with expressive animations</li>
                        <li>Rhythm tracks that flow smoothly from one section to another</li>
                        <li>A vibrant stage atmosphere designed for musical showdowns</li>
                    </ul>
                    <p>These elements make the gameplay feel energetic without becoming overwhelming.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Breakdown</h2>
                <div class="static-content">
                    <p>The gameplay structure of FNF Vs. Hex 2 follows the traditional Friday Night Funkin’ rhythm system. Notes scroll toward the target markers, and players must press the matching directional keys at the right moment.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Gameplay Aspect</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Note Matching</strong></td>
                                    <td>Press the correct arrow keys in sync with the music</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Reflects rhythm accuracy during the battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Rhythm Progression</strong></td>
                                    <td>Later sections of the song become faster</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Success in the battle depends on maintaining steady rhythm accuracy throughout the performance.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Layout</h3>
                <div class="static-content">
                    <p>Players only need a few simple inputs to participate in the rhythm duel.</p>
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
                                    <td><strong>Mechanical Keys</strong></td>
                                    <td>Direct inputs to match the friendly notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the robot duel or pause the music</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to exit the stage and return home</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>This simple control scheme allows players to focus entirely on timing and rhythm awareness.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Playing Strategies</h3>
                <div class="static-content">
                    <p>Maintaining rhythm accuracy becomes easier when players focus on the musical tempo rather than reacting only to the arrows.</p>
                    <p>Master the robotic groove with these core strategies:</p>
                    <ul>
                        <li>Align your timing with the digital pulse of the soundtrack</li>
                        <li>Maintain your readiness for rapid robotic rhythm variations</li>
                        <li>Keep your focus sharp during the most energetic synth sequences</li>
                    </ul>
                    <p>These techniques help players maintain longer streaks of successful notes.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Rhythm Mods to Explore</h2>
                <div class="static-content">
                    <p>The Friday Night Funkin’ community has created many memorable rhythm mods featuring unique characters.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Garcello -->
                        <a href="/fnf-vs-garcello/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 204, 113, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-garcello.webp" alt="Garcello" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Garcello</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A touching musical journey featuring a calm yet powerful atmosphere.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ecc71; width: 18px;"></i>
                        </a>

                        <!-- Card 2: StarCatcher -->
                        <a href="/fnf-starcatcher/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-starcatcher.webp" alt="StarCatcher" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF StarCatcher</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Offers a whimsical rhythm adventure under a star-filled sky.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #9b59b6; width: 18px;"></i>
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
console.log('Successfully updated FNF Vs. Hex 2 with Premium Visual Style');
