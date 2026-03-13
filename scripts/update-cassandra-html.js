const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-cassandra/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Cassandra – Battle Cassandra in a Stylish Rhythm Showdown</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Enter a stylish rap battle in FNF Cassandra. Match the rhythm, face Cassandra’s confident performance, and keep the beat to win.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Cassandra – Battle Cassandra in a Stylish Rhythm Showdown">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Enter a stylish rap battle in FNF Cassandra. Match the rhythm, face Cassandra’s confident performance, and keep the beat to win.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Enter a stylish rap battle in FNF Cassandra. Match the rhythm, face Cassandra’s confident performance, and keep the beat to win."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Cassandra</strong> is a character-focused Friday Night Funkin’ mod that introduces players to a confident and expressive opponent named Cassandra. The rhythm battle places Boyfriend in a stylish musical duel where personality and rhythm combine to create a lively performance. Instead of relying only on flashy visuals, the mod builds its identity through strong character presence and energetic music.</p>
                    <p>The stage atmosphere in FNF Cassandra feels dynamic, with animations and musical cues working together to highlight Cassandra’s attitude during the performance. Each section of the track presents new rhythm patterns, encouraging players to stay focused while the music keeps building intensity.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="mic-2"></i> A Character-Driven Musical Duel</h2>
                <div class="static-content">
                    <p>Unlike some mods that focus heavily on environmental themes, FNF Cassandra centers the spotlight on the opponent herself. Cassandra’s confident stage presence turns the rhythm duel into something closer to a performance.</p>
                    <p>Elements that shape the experience include:</p>
                    <ul>
                        <li>A charismatic opponent with expressive animations</li>
                        <li>Rhythm tracks designed to highlight musical timing</li>
                        <li>Visual reactions that match the flow of the music</li>
                    </ul>
                    <p>These details help make the musical battle feel interactive rather than static.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> What to Expect During the Battle</h2>
                <div class="static-content">
                    <p>The gameplay keeps the traditional Friday Night Funkin’ rhythm system while allowing the music to evolve throughout the track. The note patterns gradually increase in speed, giving players time to adapt before the more challenging sequences appear.</p>
                    <p>Key aspects of the gameplay experience include:</p>
                    <ul>
                        <li>Rhythm patterns that evolve as the song progresses</li>
                        <li>Smooth transitions between different musical sections</li>
                        <li>A performance meter that reflects rhythm accuracy</li>
                    </ul>
                    <p>Because the music drives the gameplay, staying in sync with the beat becomes the most important skill.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Guide</h3>
                <div class="static-content">
                    <p>The control scheme is simple and familiar for most rhythm game players.</p>
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
                                    <td><strong>Rap Keys</strong></td>
                                    <td>Precision directional inputs to match the performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Launch the battle or pause the session</td>
                                </tr>
                                <tr>
                                    <td><strong>Esc</strong></td>
                                    <td>Step back from the stage and return to menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The familiar inputs ensure you can focus entirely on the intense musical showdown with Cassandra.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Winning the Musical Duel</h3>
                <div class="static-content">
                    <p>Players who want to perform well in FNF Cassandra should focus on recognizing rhythm patterns early in the song. Consistent timing helps maintain control as the music becomes faster.</p>
                    <p>Strategic performance tips:</p>
                    <ul>
                        <li>Align your timing with Cassandra's sharp musical transitions</li>
                        <li>Stay locked onto the evolving rhythm patterns as the song progresses</li>
                        <li>Maintain your performance momentum through the fastest segments</li>
                    </ul>
                    <p>Practicing these techniques helps players maintain accuracy during longer note streaks.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Several other mods also offer unique opponents and memorable musical encounters.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Sky -->
                        <a href="/fnf-skys-awesome-mod/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 175, 190, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-skys-awesome-mod-of-cuteness.webp" alt="Sky" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Sky’s Awesome Mod</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features sparkling cosmic visuals and upbeat musical tracks.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ffafbe; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Sweet Licorice -->
                        <a href="/fnf-sweet-licorice/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 121, 121, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-sweet-licorice.webp" alt="Sweet Licorice" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Sweet Licorice</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers a playful rhythm experience with a vibrant candy-inspired theme.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ff7979; width: 18px;"></i>
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
console.log('Successfully updated FNF Cassandra with Premium Visual Style');
