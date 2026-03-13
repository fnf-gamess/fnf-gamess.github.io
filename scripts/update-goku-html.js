const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-funkin-ball-z-vs-goku/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Funkin Ball Z vs Goku – Dragon Ball Rhythm Battle Game</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Test your rhythm skills in FNF Funkin Ball Z vs Goku. Face Goku in a high-energy musical duel inspired by the Dragon Ball universe.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Funkin Ball Z vs Goku – Dragon Ball Rhythm Battle Game">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Test your rhythm skills in FNF Funkin Ball Z vs Goku. Face Goku in a high-energy musical duel inspired by the Dragon Ball universe.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Test your rhythm skills in FNF Funkin Ball Z vs Goku. Face Goku in a high-energy musical duel inspired by the Dragon Ball universe."');

// 2. Build the "Super Shonen Strip" Layout
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px; padding: 0; background: transparent; box-shadow: none; border: none;">
            
            <!-- Strip 1: Hero Introduction -->
            <section class="static-section" style="background: rgba(30, 30, 40, 0.8); backdrop-filter: blur(10px); border-radius: 16px; padding: 35px; margin-bottom: 25px; border: 1px solid rgba(255, 255, 255, 0.05);">
                <p style="font-size: 1.25rem; line-height: 1.8; color: #fff; margin-bottom: 20px; font-weight: 700;"><strong>FNF Funkin Ball Z vs Goku</strong> brings the legendary Dragon Ball hero into the world of rhythm battles.</p>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 20px;">Instead of intense martial arts combat, this crossover mod transforms the encounter into a musical showdown powered by energetic beats and fast note patterns. Players step into a rhythm duel where timing and concentration are just as important as the music itself.</p>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted);">The highlight of FNF Funkin Ball Z vs Goku is the fusion of anime-inspired visuals with the classic Friday Night Funkin’ gameplay style. The stage, character animations, and overall atmosphere reflect the high-energy spirit often associated with Dragon Ball.</p>
            </section>

            <!-- Strip 2: High-Energy Highlights -->
            <section class="static-section" style="background: rgba(255, 159, 67, 0.08); border: 1px solid rgba(255, 159, 67, 0.2); border-radius: 16px; padding: 30px; margin-bottom: 25px;">
                <h2 style="font-size: 1.5rem; color: #ff9f43; margin-bottom: 25px; text-align: center; text-transform: uppercase; letter-spacing: 1px;">A High-Energy Anime Rhythm Showdown</h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 20px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 12px;">
                        <span style="background: #ff9f43; padding: 10px; border-radius: 10px; display: flex;"><i data-lucide="sparkles" style="color: #fff; width: 24px; height: 24px;"></i></span>
                        <div>
                            <strong style="color: #fff; display: block; margin-bottom: 3px;">Anime-Inspired Design</strong>
                            <span style="color: var(--text-muted); font-size: 0.95rem;">Character animations and artwork that capture the true Dragon Ball spirit.</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 20px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 12px;">
                        <span style="background: #54a0ff; padding: 10px; border-radius: 10px; display: flex;"><i data-lucide="zap" style="color: #fff; width: 24px; height: 24px;"></i></span>
                        <div>
                            <strong style="color: #fff; display: block; margin-bottom: 3px;">Fast-Paced Sequences</strong>
                            <span style="color: var(--text-muted); font-size: 0.95rem;">Explosive note patterns that challenge your reaction speed and focus.</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 20px; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 12px;">
                        <span style="background: #ee5253; padding: 10px; border-radius: 10px; display: flex;"><i data-lucide="shiel-alert" style="color: #fff; width: 24px; height: 24px;"></i></span>
                        <div>
                            <strong style="color: #fff; display: block; margin-bottom: 3px;">Dramatic Battle Beats</strong>
                            <span style="color: var(--text-muted); font-size: 0.95rem;">Soundtracks designed to capture the intense dramatic tone of shonen battles.</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Strip 3: What Makes This Mod Stand Out -->
            <section class="static-section" style="background: linear-gradient(135deg, rgba(30,30,40,0.9), rgba(46, 134, 222, 0.1)); border-radius: 16px; padding: 35px; margin-bottom: 25px; border-right: 6px solid #54a0ff;">
                <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 20px;">What Makes This Mod Stand Out</h2>
                <p style="color: var(--text-muted); margin-bottom: 25px; font-size: 1.05rem; line-height: 1.7;">Unlike many standard rhythm mods, FNF Funkin Ball Z vs Goku focuses heavily on the crossover theme. Each part of the song feels like a new stage in the musical duel.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="border-left: 3px solid #feca57; padding-left: 20px;">
                        <strong style="color: #fff; display: block; margin-bottom: 8px;">Crossover Concept</strong>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Inspired by the iconic Dragon Ball universe with authentic movements.</p>
                    </div>
                    <div style="border-left: 3px solid #ff9f43; padding-left: 20px;">
                        <strong style="color: #fff; display: block; margin-bottom: 8px;">Dynamic Visuals</strong>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">High-energy character movements that react naturally to every note.</p>
                    </div>
                    <div style="border-left: 3px solid #ff6b6b; padding-left: 20px;">
                        <strong style="color: #fff; display: block; margin-bottom: 8px;">Difficulty Curve</strong>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Rhythm sections that gradually build intensity for a satisfying finish.</p>
                    </div>
                </div>
            </section>

            <!-- Strip 4: How Gameplay Works -->
            <section class="static-section" style="background: rgba(30, 30, 40, 0.8); border-radius: 16px; padding: 30px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05);">
                <h2 style="font-size: 1.4rem; color: #fff; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;"><i data-lucide="gamepad-2" style="color: #ff9f43;"></i> How the Gameplay Works</h2>
                <p style="color: var(--text-muted); margin-bottom: 25px; line-height: 1.7;">Players must match incoming arrows with the correct directional keys while staying in sync with the music. The arrows scroll upward on the screen, and pressing the correct key at the right moment keeps the rhythm performance strong.</p>
                <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                    <table class="themed-table">
                        <thead>
                            <tr>
                                <th>Control Key</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Z-Keys</strong></td>
                                <td>Precision inputs to match the high-speed notes</td>
                            </tr>
                            <tr>
                                <td><strong>Enter</strong></td>
                                <td>Use Enter to begin the showdown or pause</td>
                            </tr>
                            <tr>
                                <td><strong>Escape</strong></td>
                                <td>Press Esc to exit the martial arts arena</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Strip 5: Rhythm Tips -->
            <section class="static-section" style="background: linear-gradient(90deg, rgba(84, 160, 255, 0.1), rgba(30,30,40,0.8)); border-radius: 16px; padding: 35px; margin-bottom: 25px; border-left: 6px solid #54a0ff;">
                <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;"><i data-lucide="award" style="color: #54a0ff;"></i> Rhythm Tips for Better Performance</h3>
                <p style="color: var(--text-muted); margin-bottom: 25px; font-size: 1.05rem;">Improving rhythm accuracy usually comes from understanding the musical flow of the track. Focus on the beat itself rather than only the arrows.</p>
                <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                    <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-top: 3px solid #54a0ff;">
                        <strong style="color: #fff; display: block; margin-bottom: 5px;">Listen Carefully</strong>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Anticipate the rhythm by listening closely to the shonen beats.</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-top: 3px solid #feca57;">
                        <strong style="color: #fff; display: block; margin-bottom: 5px;">Hands Ready</strong>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Keep your fingers hovering over the Z-Keys for rapid responses.</p>
                    </div>
                    <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-top: 3px solid #ff6b6b;">
                        <strong style="color: #fff; display: block; margin-bottom: 5px;">Battle Focus</strong>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Maintain persistent concentration during the ultimate note streaks.</p>
                    </div>
                </div>
            </section>

            <!-- Strip 6: Other Mods (Square Thumbnails Row) -->
            <section class="static-section" style="padding: 30px; background: rgba(30, 30, 40, 0.4); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); border-bottom: none;">
                <h2 style="font-size: 1.4rem; color: #fff; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="layout-grid" style="color: #ff9f43;"></i> More FNF Mods to Discover
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
                    
                    <!-- Related Card 1 -->
                    <a href="/fnf-kick-kick-funk-vs-dan-the-man/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(238, 82, 83, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                        <img src="/assets/images/fnf-kick-kick-funk-vs-dan-the-man.webp" alt="Dan The Man" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                        <div style="flex: 1;">
                            <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Kick Kick Funk Vs. Dan The Man</strong>
                            <span style="color: var(--text-muted); font-size: 0.85rem;">Test your reflexes in this energetic action-inspired rhythm battle.</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: #ee5253; width: 18px;"></i>
                    </a>

                    <!-- Related Card 2 -->
                    <a href="/fnf-vs-hex-2/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(84, 160, 255, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                        <img src="/assets/images/fnf-vs-hex-2.webp" alt="Hex 2" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                        <div style="flex: 1;">
                            <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Hex 2</strong>
                            <span style="color: var(--text-muted); font-size: 0.85rem;">Enjoy a smooth musical duel with a talented robotic friend.</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: #54a0ff; width: 18px;"></i>
                    </a>

                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 30px;">
                <div class="category-pills">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated Goku with Square Related Cards');
