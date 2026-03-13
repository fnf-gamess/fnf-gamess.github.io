const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-funkin-at-freddys-vs-afton/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Funkin at Freddy’s vs Afton – Survive the Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Step into a dark musical showdown in FNF Funkin at Freddy’s vs Afton. Match the beat and face the mysterious Afton in a tense rhythm duel.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Funkin at Freddy’s vs Afton – Survive the Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Step into a dark musical showdown in FNF Funkin at Freddy’s vs Afton. Match the beat and face the mysterious Afton in a tense rhythm duel.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Step into a dark musical showdown in FNF Funkin at Freddy’s vs Afton. Match the beat and face the mysterious Afton in a tense rhythm duel."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Funkin at Freddy’s vs Afton</strong> is a horror-inspired rhythm mod that blends the musical gameplay of Friday Night Funkin’ with the eerie world associated with the Freddy’s universe. Instead of a typical concert stage, the rhythm battle takes place in a darker environment where tension builds as the music progresses.</p>
                    <p>In FNF Funkin at Freddy’s vs Afton, players face Afton in a musical duel that gradually becomes more intense. The soundtrack combines rhythmic energy with a slightly ominous tone, creating a performance that feels both exciting and suspenseful. Each section of the track introduces new note patterns that challenge timing and focus.</p>
                    <p>The atmosphere of FNF Funkin at Freddy’s vs Afton stands out because of its balance between rhythm gameplay and horror-inspired visuals. Dim lighting, expressive character animations, and dramatic music cues help create the feeling that the battle is unfolding inside a mysterious stage.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="ghost"></i> A Dark Musical Encounter</h2>
                <div class="static-content">
                    <p>The mod focuses on transforming the tension of a horror setting into a rhythm-based experience. Instead of jump scares, the challenge comes from maintaining accuracy while the song builds intensity.</p>
                    <p>Some elements that shape the gameplay include:</p>
                    <ul>
                        <li>A shadowy stage inspired by Freddy’s locations</li>
                        <li>Character animations that reflect the eerie atmosphere</li>
                        <li>Music tracks that gradually increase in rhythm complexity</li>
                    </ul>
                    <p>Together, these features make the rhythm battle feel suspenseful while still keeping the classic FNF gameplay structure.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Flow and Rhythm Mechanics</h2>
                <div class="static-content">
                    <p>The core gameplay of FNF Funkin at Freddy’s vs Afton follows the familiar Friday Night Funkin’ rhythm system. Arrows move across the screen toward the target markers, and players must press the correct keys at the right moment to keep the performance going.</p>
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
                                    <td>Press the correct arrow key when notes reach the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Indicates how accurately the rhythm is maintained</td>
                                </tr>
                                <tr>
                                    <td><strong>Tempo Changes</strong></td>
                                    <td>Some sections of the song become faster and more demanding</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Staying focused on the beat helps maintain a strong performance throughout the battle.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Basic Controls</h3>
                <div class="static-content">
                    <p>The control layout is simple, allowing players to concentrate on rhythm accuracy rather than complex commands.</p>
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
                                    <td><strong>Survival Keys</strong></td>
                                    <td>Match the direction of the haunting notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the dark encounter or pause the battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to exit the stage and return home</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The control layout is designed for quick reactions, letting you focus on surviving the dark performance.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Keeping Up with the Beat</h3>
                <div class="static-content">
                    <p>Rhythm battles in darker-themed mods can feel intense, especially when the tempo increases. Maintaining steady timing helps players survive the more challenging parts of the track.</p>
                    <p>To survive the encounter with Afton, keep these strategies in mind:</p>
                    <ul>
                        <li>Listen closely to the ominous rhythm of the eerie soundtrack</li>
                        <li>Keep your reactions sharp as the tension within the mines builds</li>
                        <li>Maintain persistent concentration during the most intense rhythm sequences</li>
                    </ul>
                    <p>These habits help improve accuracy during long note sequences.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Other mods also offer creative rhythm battles with memorable themes.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Huggy Wuggy -->
                        <a href="/fnf-vs-huggy-wuggy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-huggy-wuggy-poppy-playtime.webp" alt="Huggy Wuggy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Huggy Wuggy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Experience a blocky descent into mysterious rhythm-based tension.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Suicide Mouse -->
                        <a href="/fnf-vs-suicide-mouse-remastered/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(149, 165, 166, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-suicide-mouse-remastered.webp" alt="Suicide Mouse" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Suicide Mouse Remastered</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Presents a darker cartoon-inspired rhythm encounter.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #95a5a6; width: 18px;"></i>
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
console.log('Successfully updated FNF Funkin at Freddy’s vs Afton with Premium Visual Style');
