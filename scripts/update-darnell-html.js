const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-darnell-s-mixtape/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Darnell’s Mixtape – Play the Darnell Rhythm Mod Online</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Drop into the beat with FNF: Darnell’s Mixtape, a stylish Friday Night Funkin’ mod featuring Darnell, fresh tracks, and smooth rhythm gameplay.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Darnell’s Mixtape – Play the Darnell Rhythm Mod Online">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Drop into the beat with FNF: Darnell’s Mixtape, a stylish Friday Night Funkin’ mod featuring Darnell, fresh tracks, and smooth rhythm gameplay.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Drop into the beat with FNF: Darnell’s Mixtape, a stylish Friday Night Funkin’ mod featuring Darnell, fresh tracks, and smooth rhythm gameplay."');

// 2. Build the semantic layout (Masonry/Card style)
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px; background: transparent; padding: 0; box-shadow: none; border: none;">
            
            <!-- Intro Card -->
            <section class="static-section" style="background: rgba(30,30,40,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05);">
                <p style="font-size: 1.1rem; line-height: 1.8; color: #fff; margin-bottom: 15px;"><strong>FNF: Darnell’s Mixtape</strong> is a rhythm mod that highlights Darnell, one of the memorable characters connected to the Friday Night Funkin’ universe. Instead of a single short battle, the mod presents a collection of music-driven moments that feel like a mixtape performance. Each segment focuses on energetic beats, stylish animations, and fast note patterns that challenge the player’s timing.</p>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 15px;">The atmosphere of FNF: Darnell’s Mixtape blends street-style visuals with a lively musical tone. The stage design and character animations help create the feeling of a casual but competitive rap session. As the songs progress, the rhythm patterns become more complex, encouraging players to stay focused and maintain strong accuracy.</p>
                <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted);">Fans who enjoy rhythm-focused mods often appreciate how FNF: Darnell’s Mixtape expands the musical side of the game while keeping the familiar mechanics that make Friday Night Funkin’ easy to pick up.</p>
            </section>

            <!-- 2-Column Masonry Style Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; margin-bottom: 25px;">
                
                <!-- Left Column Group -->
                <div style="display: flex; flex-direction: column; gap: 25px;">
                    
                    <!-- Music and Rhythm Card -->
                    <section class="static-section" style="background: linear-gradient(145deg, rgba(255,71,87,0.1) 0%, rgba(30,30,40,0.8) 100%); border-radius: 16px; padding: 25px; border: 1px solid rgba(255, 71, 87, 0.2); height: 100%;">
                        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #ff4757; color: #fff; padding: 6px; border-radius: 8px; display: inline-flex;"><i data-lucide="music-2" style="width: 20px; height: 20px;"></i></span>
                            Music and Rhythm Style
                        </h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem; line-height: 1.6;">One of the main highlights of FNF: Darnell’s Mixtape is its music-driven structure. The mod revolves around tracks that emphasize rhythm flow and musical timing. Each section of the performance feels like part of a continuous mixtape session rather than a traditional one-round battle.</p>
                        <p style="color: #fff; font-weight: 600; font-size: 0.95rem; margin-bottom: 10px;">The gameplay experience stands out because of several elements:</p>
                        <ul style="color: var(--text-muted); padding-left: 20px; font-size: 0.95rem; margin-bottom: 15px;">
                            <li style="margin-bottom: 6px;">Smooth rhythm tracks that gradually increase in complexity</li>
                            <li style="margin-bottom: 6px;">Character animations that react naturally to the beat</li>
                            <li style="margin-bottom: 6px;">A stylish stage atmosphere inspired by urban music culture</li>
                        </ul>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: auto;">Together, these features help the rhythm battle feel energetic while maintaining a relaxed and playful vibe.</p>
                    </section>

                    <!-- Tips Card -->
                    <section class="static-section" style="background: rgba(30,30,40,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 25px; border: 1px dashed rgba(255,255,255,0.15);">
                        <h3 style="font-size: 1.3rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                            <i data-lucide="headphones" style="color: var(--accent-blue);"></i> Tips for Maintaining Rhythm
                        </h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">Mastering Darnell's mixtape requires a deep connection to the urban rhythm flow.</p>
                        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; border-left: 3px solid var(--accent-blue);">
                            <ul style="color: var(--text-muted); font-size: 0.9rem; margin: 0; padding-left: 15px;">
                                <li style="margin-bottom: 5px;">Synchronize your inputs with the heavy-hitting urban beats</li>
                                <li style="margin-bottom: 5px;">Listen carefully to the flow of Darnell's signature tracks</li>
                                <li>Keep your edge sharp even as the note speed increases</li>
                            </ul>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 15px;">Practicing these habits helps players adapt to more complex note patterns.</p>
                    </section>

                </div>

                <!-- Right Column Group -->
                <div style="display: flex; flex-direction: column; gap: 25px;">
                    
                    <!-- Gameplay Mechanics Card -->
                    <section class="static-section" style="background: rgba(30,30,40,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 25px; border: 1px solid rgba(255,255,255,0.05);">
                        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i data-lucide="flame" style="color: #ffa502;"></i> Gameplay Mechanics
                        </h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px; line-height: 1.6;">The core gameplay of FNF: Darnell’s Mixtape follows the traditional Friday Night Funkin’ rhythm system. Arrows move toward the target markers, and players must press the matching keys in sync with the music. The goal is to keep the performance meter balanced by hitting notes accurately.</p>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px; line-height: 1.6;">Consistency becomes important as the track speeds up. Maintaining a steady rhythm allows players to survive the faster note sequences that appear later in the song.</p>
                        <div style="background: rgba(255,165,2,0.1); border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                            <strong style="color: #ffa502; display: block; margin-bottom: 8px; font-size: 0.95rem;">Key gameplay mechanics include:</strong>
                            <ul style="color: var(--text-muted); font-size: 0.9rem; margin: 0; padding-left: 15px;">
                                <li style="margin-bottom: 5px;">Matching arrow directions with keyboard inputs</li>
                                <li style="margin-bottom: 5px;">Maintaining note streaks to keep the rhythm flowing</li>
                                <li>Reacting quickly when the tempo increases</li>
                            </ul>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Recognizing the musical patterns often helps players anticipate upcoming notes and perform more accurately.</p>
                    </section>

                    <!-- Controls Card -->
                    <section class="static-section" style="background: rgba(30,30,40,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 25px; border: 1px solid rgba(255,255,255,0.05); height: 100%;">
                        <h3 style="font-size: 1.3rem; margin-bottom: 15px; color: #fff; display: flex; align-items: center; gap: 8px;"><i data-lucide="keyboard" style="color: #7bed9f;"></i> Controls Overview</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px;">The street-style inputs allow for a natural rhythm experience, letting you focus on the mixtape's unique flow.</p>
                        <div class="table-container">
                            <table class="themed-table">
                                <thead>
                                    <tr>
                                        <th>Control Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Street Keys</strong></td>
                                        <td>Precision inputs to match the street-style notes</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enter</strong></td>
                                        <td>Start or pause the session</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Escape</strong></td>
                                        <td>Return to the mixtape selection and choose a new track</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </div> <!-- End Masonry Grid -->

            <!-- More FNF Mods Footer Card -->
            <section class="static-section" style="background: rgba(30,30,40,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 25px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 30px;">
                <h3 style="font-size: 1.35rem; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="layout-grid" style="color: var(--accent-pink);"></i> More FNF Mods to Discover
                </h3>
                <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 0.95rem;">Other mods also offer creative rhythm challenges and memorable musical battles.</p>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <a href="/fnf-lit-up-darnell-mix/" style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; text-decoration: none; border: 1px solid transparent; transition: border 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='var(--accent-pink)'" onmouseout="this.style.borderColor='transparent'">
                        <strong style="color: #fff; display: block; margin-bottom: 5px;">FNF: Lit Up (Darnell Mix)</strong>
                        <span style="color: var(--text-muted); font-size: 0.85rem;">Paces you against a fiery opponent in a fast-paced urban remix.</span>
                    </a>
                    <a href="/friday-night-funkin-neo/" style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; text-decoration: none; border: 1px solid transparent; transition: border 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#00f2fe'" onmouseout="this.style.borderColor='transparent'">
                        <strong style="color: #fff; display: block; margin-bottom: 5px;">Friday Night Funkin' Neo</strong>
                        <span style="color: var(--text-muted); font-size: 0.85rem;">Experience visually striking stages and updated musical remixes.</span>
                    </a>
                </div>
            </section>

            <div class="category-tags-section">
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
console.log('Successfully updated HTML for Darnell Mixtape with a Masonry Card layout');
