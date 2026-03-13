const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-skys-awesome-mod-of-cuteness/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Sky’s Awesome Mod of Cuteness!! – Play the Sky Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Enter the colorful world of FNF: Sky’s Awesome Mod of Cuteness!! and face Sky in a fast-paced rhythm battle filled with energetic music and expressive animations.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Sky’s Awesome Mod of Cuteness!! – Play the Sky Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Enter the colorful world of FNF: Sky’s Awesome Mod of Cuteness!! and face Sky in a fast-paced rhythm battle filled with energetic music and expressive animations.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Enter the colorful world of FNF: Sky’s Awesome Mod of Cuteness!! and face Sky in a fast-paced rhythm battle filled with energetic music and expressive animations."');

// 2. Build the semantic, smart layout
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <!-- Semantic Article for SEO -->
            <article class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <div style="font-size: 1.1rem; line-height: 1.8; color: var(--text-color); margin-bottom: 30px;">
                    <p style="margin-bottom: 15px;"><strong>FNF: Sky’s Awesome Mod of Cuteness!!</strong> is a lively rhythm mod that introduces Sky, one of the most recognizable fan-made characters in the Friday Night Funkin’ community. In this musical battle, players face Sky in an energetic rap duel where rhythm and timing determine the winner. The mod blends cute visual elements with intense rhythm gameplay, creating an experience that feels both playful and challenging.</p>
                    <p style="margin-bottom: 15px;">The visual design of FNF: Sky’s Awesome Mod of Cuteness!! focuses on colorful animations and expressive character reactions. Sky’s personality shines through every moment of the performance, making the rhythm battle feel animated and dynamic. As the music progresses, note patterns become more complex, encouraging players to stay focused and keep their timing accurate.</p>
                    <p>Players who enjoy character-driven FNF mods will likely appreciate how FNF: Sky’s Awesome Mod of Cuteness!! turns a simple rhythm duel into a memorable musical encounter.</p>
                </div>

                <!-- Bento-Box Style Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 40px;">
                    
                    <!-- Feature Panel 1 -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 25px; display: flex; flex-direction: column;">
                        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i data-lucide="sparkles" style="color: var(--accent-pink);"></i> A Cute but Intense Rhythm Battle
                        </h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem; line-height: 1.6;">The charm of FNF: Sky’s Awesome Mod of Cuteness!! lies in the contrast between its adorable visual style and the increasingly challenging rhythm sequences. The music drives the gameplay, guiding players through a fast-paced song that gradually introduces more demanding note patterns.</p>
                        <ul style="color: var(--text-muted); font-size: 0.95rem; list-style: none; padding: 0; margin-top: auto;">
                            <li style="margin-bottom: 8px; display: flex; gap: 8px;"><i data-lucide="check" style="color: #69f0ae; flex-shrink: 0; width: 18px;"></i> A popular fan character with expressive animations</li>
                            <li style="margin-bottom: 8px; display: flex; gap: 8px;"><i data-lucide="check" style="color: #69f0ae; flex-shrink: 0; width: 18px;"></i> Energetic music tracks designed for rhythm battles</li>
                            <li style="display: flex; gap: 8px;"><i data-lucide="check" style="color: #69f0ae; flex-shrink: 0; width: 18px;"></i> Bright visuals that match the playful theme</li>
                        </ul>
                    </div>

                    <!-- Feature Panel 2 -->
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 25px; display: flex; flex-direction: column;">
                        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i data-lucide="activity" style="color: var(--accent-blue);"></i> Core Gameplay Mechanics
                        </h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem; line-height: 1.6;">Like most Friday Night Funkin’ mods, FNF: Sky’s Awesome Mod of Cuteness!! follows the classic rhythm gameplay formula. Arrows move across the screen toward the target markers, and players must press the corresponding keys in time with the beat.</p>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem;">Maintaining accuracy is important because every successful note helps keep the performance meter balanced.</p>
                        <ul style="color: var(--text-muted); font-size: 0.95rem; padding-left: 20px; list-style-type: disc; margin-top: auto;">
                            <li style="margin-bottom: 6px;">Matching directional arrows with precise keyboard inputs</li>
                            <li style="margin-bottom: 6px;">Maintaining a steady rhythm during the song</li>
                            <li>Reacting quickly when the tempo increases</li>
                        </ul>
                    </div>
                </div>

                <!-- Info Grid (Controls + Tips) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
                    
                    <!-- Controls -->
                    <div style="background: rgba(0, 0, 0, 0.2); border-left: 4px solid var(--accent-pink); border-radius: 8px; padding: 20px;">
                        <h3 style="font-size: 1.25rem; margin-bottom: 15px; color: #fff; display: flex; align-items: center; gap: 8px;"><i data-lucide="keyboard" style="color: var(--accent-pink); width: 20px;"></i> Basic Controls</h3>
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
                                        <td><strong>Cuteness Keys</strong></td>
                                        <td>Hit the matching notes exactly</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enter</strong></td>
                                        <td>Start / pause the show</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Escape</strong></td>
                                        <td>Return to the menu selection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Tips -->
                    <div style="background: rgba(0, 0, 0, 0.2); border-left: 4px solid #feca57; border-radius: 8px; padding: 20px;">
                        <h3 style="font-size: 1.25rem; margin-bottom: 15px; color: #fff; display: flex; align-items: center; gap: 8px;"><i data-lucide="target" style="color: #feca57; width: 20px;"></i> Tips for Better Rhythm Accuracy</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">Feel the energetic pulse of Sky's musical performance to truly master the rhythm.</p>
                        <ul style="color: var(--text-muted); font-size: 0.95rem; padding-left: 20px;">
                            <li style="margin-bottom: 6px;">Sync your timing with the cute but intense musical cues</li>
                            <li style="margin-bottom: 6px;">Stay focused as the rhythm patterns evolve dynamically</li>
                            <li>Maintain a steady pace through the most energetic segments</li>
                        </ul>
                    </div>
                </div>

                <!-- Related Mods Outline Card -->
                <div style="border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 25px;">
                    <h3 style="font-size: 1.35rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="layers" style="color: var(--accent-blue);"></i> Other FNF Mods to Explore
                    </h3>
                    <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 0.95rem;">A few other mods also offer creative characters and memorable rhythm challenges.</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
                        <a href="/fnf-starcatcher/" style="display: block; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; text-decoration: none; transition: background 0.2s;">
                            <strong style="color: var(--accent-pink); font-size: 1.1rem; display: block; margin-bottom: 5px;">FNF StarCatcher</strong>
                            <span style="color: var(--text-muted); font-size: 0.85rem;">Brings a magical visual theme and energetic rhythm gameplay.</span>
                        </a>
                        <a href="/fnf-cassandra/" style="display: block; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; text-decoration: none; transition: background 0.2s;">
                            <strong style="color: #ff4757; font-size: 1.1rem; display: block; margin-bottom: 5px;">FNF Cassandra</strong>
                            <span style="color: var(--text-muted); font-size: 0.85rem;">Features a darker atmosphere with intense musical duels.</span>
                        </a>
                    </div>
                </div>

            </article>

            <div class="category-tags-section" style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                <div class="category-pills">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for Sky Mod with Bento Box layout');
