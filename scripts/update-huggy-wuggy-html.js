const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-huggy-wuggy/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs. Huggy Wuggy (Poppy Playtime) – Spooky Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="A creepy toy factory turns into a music arena in FNF Vs. Huggy Wuggy (Poppy Playtime). Follow the beat and face Huggy Wuggy in this intense rhythm showdown.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs. Huggy Wuggy (Poppy Playtime) – Spooky Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="A creepy toy factory turns into a music arena in FNF Vs. Huggy Wuggy (Poppy Playtime). Follow the beat and face Huggy Wuggy in this intense rhythm showdown.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"A creepy toy factory turns into a music arena in FNF Vs. Huggy Wuggy (Poppy Playtime). Follow the beat and face Huggy Wuggy in this intense rhythm showdown."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs. Huggy Wuggy (Poppy Playtime)</strong> brings a darker atmosphere to the rhythm battles of Friday Night Funkin’. Instead of a typical stage, the musical duel takes place in a setting inspired by the mysterious toy factory from the Poppy Playtime universe. The result is a rhythm mod where colorful music meets an eerie environment.</p>
                    <p>The star of the encounter is Huggy Wuggy, a towering blue toy character known for his unsettling smile. In FNF Vs. Huggy Wuggy (Poppy Playtime), this character becomes the opponent in a fast-paced rap battle. The soundtrack combines energetic beats with a slightly eerie tone, making the rhythm gameplay feel both exciting and tense.</p>
                    <p>What makes FNF Vs. Huggy Wuggy (Poppy Playtime) memorable is the contrast between horror-themed visuals and the classic musical mechanics of Friday Night Funkin’. Players must stay focused on the rhythm while the environment and character animations create a suspenseful mood.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="factory"></i> A Rhythm Battle Inside a Toy Factory</h2>
                <div class="static-content">
                    <p>The mod captures the atmosphere of a strange toy factory while keeping the familiar rhythm gameplay intact. Characters perform on a stage surrounded by industrial details and dim lighting, which adds tension to the musical duel.</p>
                    <p>Some elements that shape the experience include:</p>
                    <ul>
                        <li>A spooky stage inspired by the Poppy Playtime setting</li>
                        <li>Animated movements from Huggy Wuggy that match the beat</li>
                        <li>Music tracks that blend rhythm gameplay with horror vibes</li>
                    </ul>
                    <p>These features give the battle a unique identity compared with more colorful or lighthearted FNF mods.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="ghost"></i> What Players Will Experience</h3>
                <div class="static-content">
                    <p>The gameplay remains accessible while still offering a satisfying challenge. Players must press the correct arrow keys as notes reach their targets on the screen. Maintaining rhythm accuracy keeps the performance meter balanced throughout the song.</p>
                    <p>Important gameplay elements include:</p>
                    <ul>
                        <li>Notes scrolling in sync with the soundtrack</li>
                        <li>Increasing rhythm difficulty as the song progresses</li>
                        <li>A performance meter that reflects timing accuracy</li>
                    </ul>
                    <p>Listening carefully to the music often helps players anticipate upcoming patterns and react more effectively.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Reference</h3>
                <div class="static-content">
                    <p>The controls are straightforward and remain consistent with most Friday Night Funkin’ mods.</p>
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
                                    <td><strong>Factory Inputs</strong></td>
                                    <td>Strike the keys in sync with the industrial notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Start/Pause</strong></td>
                                    <td>Use Enter to control the factory performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Return to Safety</strong></td>
                                    <td>Press Esc to leave the eerie setting</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>These simple inputs allow players to focus on rhythm and timing rather than complicated mechanics.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Rhythm Tips for the Factory Battle</h3>
                <div class="static-content">
                    <p>Staying in sync with the music is the most important skill during the battle. As the song becomes faster, concentration becomes essential to avoid losing the rhythm.</p>
                    <p>Helpful tips:</p>
                    <ul>
                        <li>Listen closely to the industrial beat of the factory</li>
                        <li>Ensure your fingers are hovering over the arrow keys persistently</li>
                        <li>Hold steady timing during the intense toy-fueled sequences</li>
                    </ul>
                    <p>Recognizing the rhythm patterns early can make the later sections of the song much easier to handle.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods Worth Trying</h2>
                <div class="static-content">
                    <p>Other mods also mix creative themes with engaging rhythm gameplay.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Digital Circus -->
                        <a href="/fnf-the-amazing-digital-circus/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 71, 87, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-the-amazing-digital-circus.webp" alt="Digital Circus" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF The Amazing Digital Circus</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Step into a quirky virtual environment for a surreal musical show.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ff4757; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Herobrine -->
                        <a href="/fnf-herobrine/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(76, 209, 55, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-herobrine.webp" alt="Herobrine" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Herobrine</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Experience an intense musical performance in a blocky, dark world.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #4cd137; width: 18px;"></i>
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

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated Huggy Wuggy with Premium Visual Style');
