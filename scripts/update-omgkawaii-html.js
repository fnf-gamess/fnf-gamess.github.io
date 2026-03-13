const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../friday-night-funkin-vs-omgkawaiiangel/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 2. Replace the entire static card content with a fresh, alternate layout to avoid repetition
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <section class="static-section" style="padding-bottom: 30px;">
                <div class="static-content" style="font-size: 1.05rem; line-height: 1.7;">
                    <p><strong>Friday Night Funkin’: VS OMGkawaiiAngel</strong> introduces a vibrant rhythm battle inspired by internet idol culture and colorful streaming aesthetics. The mod places Boyfriend in a musical face-off against OMGkawaiiAngel, a character known for her energetic personality and eye-catching visual style. Instead of a typical rap duel, the match feels like a performance on a lively digital stage filled with bright colors and expressive animations.</p>
                    <p style="margin-top: 15px;">The charm of Friday Night Funkin’: VS OMGkawaiiAngel comes from its playful tone and lively soundtrack. Each section of the song moves with a fast rhythm that keeps players focused on the beat. As the track builds momentum, the patterns become more demanding, encouraging precise timing and strong concentration.</p>
                    <p style="margin-top: 15px;">Players who enjoy stylish FNF mods often appreciate how Friday Night Funkin’: VS OMGkawaiiAngel combines catchy music with colorful presentation. The animated reactions of the characters and the energetic tempo make the rhythm battle feel entertaining from beginning to end.</p>
                </div>
            </section>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; padding: 30px; background: rgba(0, 0, 0, 0.2); border-radius: 12px; margin: 20px 0;">
                <div>
                    <h3 style="font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="sparkles" style="color: var(--accent-pink);"></i> 
                        Visual Style & Atmosphere
                    </h3>
                    <p style="color: var(--text-muted); margin-bottom: 15px;">A major highlight of Friday Night Funkin’: VS OMGkawaiiAngel is its distinctive aesthetic. The stage design and character animations reflect a digital idol theme, giving the mod a unique atmosphere compared to many other rhythm battles.</p>
                    <ul style="color: var(--text-muted); padding-left: 20px;">
                        <li style="margin-bottom: 8px;">Bright and expressive character animations</li>
                        <li style="margin-bottom: 8px;">A playful streaming-inspired visual theme</li>
                        <li style="margin-bottom: 8px;">Energetic music that drives the rhythm gameplay</li>
                    </ul>
                </div>
                <div>
                    <h3 style="font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="music" style="color: var(--accent-blue);"></i> 
                        Rhythm Mechanics
                    </h3>
                    <p style="color: var(--text-muted); margin-bottom: 15px;">Like other FNF mods, the gameplay relies on matching notes with the correct directional inputs. Arrows move toward the markers, and players must press the corresponding keys at the exact moment.</p>
                    <ul style="color: var(--text-muted); padding-left: 20px;">
                        <li style="margin-bottom: 8px;">Matching incoming arrows with precise timing</li>
                        <li style="margin-bottom: 8px;">Maintaining note streaks to keep performance strong</li>
                        <li style="margin-bottom: 8px;">Staying focused during faster rhythm sections</li>
                    </ul>
                </div>
            </div>

            <section class="static-section" style="border-bottom: none; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 30px;">
                <div style="display: flex; flex-wrap: wrap; gap: 40px;">
                    <div style="flex: 1; min-width: 250px;">
                        <h3 class="static-section-title" style="font-size: 1.4rem;"><i data-lucide="keyboard"></i> Basic Controls</h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px;">The controls are simple, allowing players to focus mainly on rhythm and timing.</p>
                        <div class="table-container">
                            <table class="themed-table">
                                <thead>
                                    <tr>
                                        <th>Control Key</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Idol Keys</strong></td>
                                        <td>Hit the matching notes exactly</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enter</strong></td>
                                        <td>Start or pause the stream</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Escape</strong></td>
                                        <td>Return to the main menu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div style="flex: 1; min-width: 250px;">
                        <h3 class="static-section-title" style="font-size: 1.4rem;"><i data-lucide="target"></i> Focus & Rhythm Tips</h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px;">Following the idol's musical flow is the key to maintaining a perfect performance on the digital stage.</p>
                        <div style="background: rgba(255, 255, 255, 0.05); border-left: 4px solid var(--accent-pink); padding: 20px; border-radius: 0 8px 8px 0;">
                            <ul style="color: var(--text-muted); padding-left: 20px; margin: 0;">
                                <li style="margin-bottom: 10px;"><strong>Feel the Idol's Beat:</strong> Sync your inputs with the flashy musical cues.</li>
                                <li style="margin-bottom: 10px;"><strong>Ready for the Spotlight:</strong> Maintain focus as the rhythm patterns evolve.</li>
                                <li style="margin-bottom: 0;"><strong>Perfect Performance:</strong> Keep a steady pace through the most intense sequences.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Sky -->
                        <a href="/fnf-skys-awesome-mod-of-cuteness/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-skys-awesome-mod-of-cuteness.webp" alt="Sky" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Sky’s Awesome Mod</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Experience a playful but intense rhythm battle with a fan-favorite character.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Garcello -->
                        <a href="/fnf-vs-garcello/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 213, 115, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-garcello.webp" alt="Garcello" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Garcello</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A touching musical journey featuring a calm yet powerful atmosphere.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ed573; width: 18px;"></i>
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

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for Friday Night Funkin’: VS OMGkawaiiAngel with an alternative layout');
