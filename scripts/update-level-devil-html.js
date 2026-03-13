const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-level-devil/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs Level Devil – Tricky Rhythm Challenge Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Expect the unexpected in FNF Vs Level Devil. Face a chaotic rhythm challenge where timing, focus, and quick reactions are the only way to survive the beat.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs Level Devil – Tricky Rhythm Challenge Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Expect the unexpected in FNF Vs Level Devil. Face a chaotic rhythm challenge where timing, focus, and quick reactions are the only way to survive the beat.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Expect the unexpected in FNF Vs Level Devil. Face a chaotic rhythm challenge where timing, focus, and quick reactions are the only way to survive the beat."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs Level Devil</strong> is a creative Friday Night Funkin’ mod that transforms a typical rhythm battle into a chaotic musical challenge. Inspired by the unpredictable nature of the Level Devil concept, the mod introduces unusual rhythm patterns and surprising visual moments that keep players alert throughout the performance.</p>
                    <p>In FNF Vs Level Devil, the rhythm duel becomes more than just hitting notes on time. Players must stay focused while the song introduces tricky patterns and sudden changes in tempo. This makes the gameplay feel unpredictable and exciting, especially for those who enjoy rhythm games that test reaction speed and adaptability.</p>
                    <p>The atmosphere of FNF Vs Level Devil blends humor with challenge. The visuals and character animations sometimes reflect the playful chaos associated with Level Devil-style gameplay, creating a musical experience that feels both entertaining and intense.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="sparkles"></i> A Rhythm Battle Full of Surprises</h2>
                <div class="static-content">
                    <p>Unlike many traditional FNF mods, FNF Vs Level Devil focuses on unpredictability. The music track drives the gameplay, but certain moments in the rhythm pattern may feel unusual compared with standard FNF battles.</p>
                    <p>Elements that define the experience include:</p>
                    <ul>
                        <li>Unexpected rhythm patterns that challenge player reflexes</li>
                        <li>Energetic music that keeps the gameplay fast-paced</li>
                        <li>Playful visual details inspired by chaotic platform challenges</li>
                    </ul>
                    <p>These features make every part of the song feel different, encouraging players to stay alert.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> How the Gameplay Works</h2>
                <div class="static-content">
                    <p>The gameplay mechanics remain rooted in the classic Friday Night Funkin’ rhythm system. Arrows scroll toward the markers on the screen, and players must press the correct keys in time with the music.</p>
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
                                    <td>Hit the correct arrow when notes reach the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Indicates how well the rhythm is maintained</td>
                                </tr>
                                <tr>
                                    <td><strong>Tempo Changes</strong></td>
                                    <td>Some sections introduce faster or trickier note patterns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>As the song continues, the rhythm patterns may become more complex, requiring strong timing and quick reactions.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Guide</h3>
                <div class="static-content">
                    <p>The controls remain simple so that players can concentrate entirely on rhythm accuracy.</p>
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
                                    <td><strong>Movement Keys</strong></td>
                                    <td>React quickly to the unpredictable note patterns</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the chaotic duel or pause the action</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Escape the devilish stage and return to the lobby</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>These controls are consistent with most Friday Night Funkin’ mods.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Beating the Rhythm Challenge</h3>
                <div class="static-content">
                    <p>Because the gameplay can be unpredictable, maintaining focus is especially important during the musical duel.</p>
                    <p>Helpful strategies include:</p>
                    <ul>
                        <li>Tune into the unpredictable rhythm of the soundtrack</li>
                        <li>Hold your position over the arrow keys to react to sudden changes</li>
                        <li>Maintain your concentration when the chaotic tempo shifts unexpectedly</li>
                    </ul>
                    <p>Adapting quickly to the rhythm changes can make the difference between winning and losing the battle.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Other mods also introduce creative rhythm challenges and unique gameplay ideas.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Neo -->
                        <a href="/friday-night-funkin-neo/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 255, 255, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/friday-night-funkin-neo.webp" alt="Neo" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">Friday Night Funkin' Neo</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features glowing neon visuals and remixed songs.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #00ffff; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Zardy -->
                        <a href="/fnf-vs-zardy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(241, 196, 15, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-zardy.webp" alt="Zardy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Zardy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers a darker rhythm battle with intense musical sequences.</span>
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
                    <a href="/skill.games/" class="category-pill">Skill</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Vs Level Devil with Premium Visual Style');
