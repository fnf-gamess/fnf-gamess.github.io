const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-everywhere-at-the-end-of-funk/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Everywhere At The End Of Funk – Surreal Rhythm Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Experience the hauntingly beautiful FNF: Everywhere At The End Of Funk. Face a surreal musical journey inspired by memory loss in this emotional rhythm experience.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Everywhere At The End Of Funk – Surreal Rhythm Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Experience the hauntingly beautiful FNF: Everywhere At The End Of Funk. Face a surreal musical journey inspired by memory loss in this emotional rhythm experience.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Experience the hauntingly beautiful FNF: Everywhere At The End Of Funk. Face a surreal musical journey inspired by memory loss in this emotional rhythm experience."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF: Everywhere At The End Of Funk</strong> is a uniquely surreal and emotionally resonant Friday Night Funkin' mod inspired by the legendary experimental music project <em>Everywhere At The End Of Time</em>. The original work is widely known for its haunting depiction of memory deterioration through progressively distorted music. This mod translates that artistic vision into a rhythm game format, where each stage pushes Boyfriend deeper into an abstract, decaying world of sound.</p>
                    <p>The mod stands out in the FNF community for its artistic ambition. It goes far beyond simple character swaps, instead crafting a genuinely unsettling and thought-provoking experience that fans of experimental art and music will deeply appreciate. The visual design and track composition evolve dramatically as you progress, mirroring the emotional journey of the source material.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="brain"></i> A Journey Through Fading Memories</h2>
                <div class="static-content">
                    <p>What makes this mod special is how it weaponizes FNF's core mechanic — the comfort of hit notes and rhythm — to create a growing sense of unease. Early stages feel familiar, even cheerful. But as you progress through the acts, the music warps, the visuals fragment, and the charted notes become increasingly unpredictable. It's a mod designed to make you feel something, not just beat a high score.</p>
                    <p>Whether you find it unsettling or beautiful, FNF: Everywhere At The End Of Funk is a testament to what creative modders can achieve when they push the medium to its absolute limits.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="gamepad-2"></i> Performance and Survival</h3>
                <div class="static-content">
                    <p>As the atmosphere grows more abstract, the gameplay requires a deep connection to the underlying rhythm. Accuracy and calm are essential as the visual feedback begins to decay.</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Match the notes accurately as they align with the dissolving markers</li>
                        <li style="margin-bottom:8px;">Tune into the auditory cues as visual indicators may become distorted</li>
                        <li style="margin-bottom:8px;">Steady your reactions through the shifting melodies and abstract stages</li>
                    </ul>
                    
                    <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 15px; margin-top: 25px;"><i data-lucide="keyboard" style="display:inline-block; vertical-align:middle; margin-right:8px; width:18px; height:18px; color:var(--accent-blue);"></i> Control Scheme</h3>
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
                                    <td><strong>Memory Keys</strong></td>
                                    <td>Follow the fading musical patterns of the past</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the surreal exploration through time</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to exit the memory zone and return home</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Deep FNF Experiences</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique emotional or atmospheric twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Garcello -->
                        <a href="/fnf-vs-garcello/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-garcello.webp" alt="Garcello" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Garcello</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A touching musical journey featuring a calm yet powerful atmosphere.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Zardy -->
                        <a href="/fnf-vs-zardy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-zardy.webp" alt="Zardy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Zardy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face off against a silent guardian in a dark, atmospheric cornfield battle.</span>
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
                    <a href="/horror.games/" class="category-pill">Horror</a>
                </div>
            </div>
        </div>`;

// Replace existing content wrapper or body content
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF: Everywhere At The End Of Funk with Premium Visual Style');
