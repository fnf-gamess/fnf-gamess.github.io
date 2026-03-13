const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-sweet-licorice/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Sweet Licorice – Play the Candy-Themed Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Enjoy the colorful rhythm challenge in FNF Sweet Licorice. Follow the beat, match the notes, and experience a lively musical duel.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Sweet Licorice – Play the Candy-Themed Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Enjoy the colorful rhythm challenge in FNF Sweet Licorice. Follow the beat, match the notes, and experience a lively musical duel.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Enjoy the colorful rhythm challenge in FNF Sweet Licorice. Follow the beat, match the notes, and experience a lively musical duel."');

// 2. Replace the entire static card content with a new layout pattern (Z-pattern / ZigZag inspired)
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px; overflow: hidden; position: relative;">
            
            <!-- Abstract decorative background shape -->
            <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,107,107,0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

            <!-- Intro Header Section -->
            <section class="static-section" style="border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 30px; position: relative;">
                <p style="font-size: 1.15rem; line-height: 1.8; color: #fff;"><strong>FNF Sweet Licorice</strong> is a creative Friday Night Funkin’ mod that combines rhythmic gameplay with a colorful candy-inspired theme. The mod places players in a lively musical showdown where timing and rhythm determine the outcome of the battle. Bright visuals, playful character animations, and energetic music all work together to create a fun and engaging experience.</p>
                
                <p style="font-size: 1.05rem; line-height: 1.7; margin-top: 15px; color: var(--text-muted);">The charm of FNF Sweet Licorice comes from its cheerful atmosphere and catchy soundtrack. Instead of dark or intense environments, the stage design uses vibrant colors and playful details that match the candy-inspired theme. This makes the rhythm battle feel lighthearted while still offering a satisfying challenge for players who enjoy fast-paced musical gameplay.</p>
                
                <p style="font-size: 1.05rem; line-height: 1.7; margin-top: 15px; color: var(--text-muted);">Fans of rhythm games often appreciate how FNF Sweet Licorice keeps the classic mechanics of Friday Night Funkin’ while introducing a fresh visual style. As the music builds momentum, the incoming notes appear more frequently, encouraging players to stay focused and maintain strong timing accuracy.</p>
            </section>

            <!-- ZigZag Feature 1 -->
            <section class="static-section" style="padding-top: 40px; border-bottom: none;">
                <div style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="font-size: 1.6rem; font-weight: 800; color: #ff9ff3; margin-bottom: 15px; display: flex; align-items: center; gap: 12px;">
                            <span style="background: rgba(255, 159, 243, 0.2); padding: 10px; border-radius: 50%; display: flex;"><i data-lucide="lollipop" style="color: #ff9ff3;"></i></span>
                            Candy-Themed Gameplay
                        </h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 1.05rem; line-height: 1.6;">The visual style of FNF Sweet Licorice gives the mod a unique personality. Characters appear in a playful environment filled with bright colors and animated details that reflect the sugary theme. These visuals help make the rhythm battle feel lively and energetic from the start.</p>
                        <p style="color: var(--text-muted); margin-bottom: 15px;">Several elements contribute to the enjoyable gameplay experience:</p>
                        <ul style="color: #fff; padding-left: 0; list-style: none; margin-bottom: 15px;">
                            <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><i data-lucide="check-circle-2" style="color: #ff9ff3; width: 16px; height: 16px;"></i> Colorful candy-inspired stage design</li>
                            <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><i data-lucide="check-circle-2" style="color: #ff9ff3; width: 16px; height: 16px;"></i> Catchy rhythm tracks maintaining steady tempo</li>
                            <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><i data-lucide="check-circle-2" style="color: #ff9ff3; width: 16px; height: 16px;"></i> Expressive synchronized character animations</li>
                        </ul>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Because the music drives the gameplay, hitting each note correctly feels rewarding. The stronger the rhythm accuracy, the smoother the performance becomes.</p>
                    </div>
                    <div style="flex: 0.8; min-width: 250px; background: rgba(0,0,0,0.3); border-radius: 16px; padding: 25px; border: 1px solid rgba(255, 159, 243, 0.2);">
                        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;"><i data-lucide="music-4" style="color: #54a0ff; vertical-align: middle; margin-right: 8px;"></i> Gameplay Mechanics</h3>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem;">The gameplay follows the familiar structure of Friday Night Funkin’. Arrows scroll toward the markers at the top of the screen, and players must press the matching directional keys at the exact moment they align with the targets.</p>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.95rem;">Success depends on maintaining rhythm accuracy. Missing too many notes causes the performance meter to drop.</p>
                        <ul style="color: var(--text-muted); padding-left: 20px; font-size: 0.95rem;">
                            <li style="margin-bottom: 5px;">Matching arrow directions with keyboard inputs</li>
                            <li style="margin-bottom: 5px;">Maintaining note streaks for higher accuracy</li>
                            <li style="margin-bottom: 5px;">Reacting quickly during faster rhythm segments</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Tools & Info Grid -->
            <section class="static-section" style="padding-top: 10px; border-bottom: none;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
                    
                    <!-- Controls Box -->
                    <div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 20px;">
                        <h3 style="font-size: 1.3rem; margin-bottom: 15px; color: #feca57; display: flex; align-items: center; gap: 8px;"><i data-lucide="gamepad-2"></i> Basic Controls</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px;">The control system is simple and easy to understand, allowing players to focus mainly on rhythm and reaction speed.</p>
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
                                        <td><strong>Candy Keys</strong></td>
                                        <td>Hit the matching sugary notes</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enter</strong></td>
                                        <td>Start or pause the sweet show</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Escape</strong></td>
                                        <td>Return to the candy selection menu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Tips Box -->
                    <div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 20px; border-top: 3px solid #ff9ff3;">
                        <h3 style="font-size: 1.3rem; margin-bottom: 15px; color: #fff; display: flex; align-items: center; gap: 8px;"><i data-lucide="lightbulb" style="color: #ff9ff3;"></i> Tips for Keeping the Rhythm</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">Syncing your timing with the sugary sweet beats is the secret to a perfect performance.</p>
                        <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
                            <ul style="color: var(--text-muted); padding-left: 20px; margin: 0; font-size: 0.95rem;">
                                <li style="margin-bottom: 8px;">Tune into the energetic pulse of the candy-themed tracks</li>
                                <li style="margin-bottom: 8px;">Stay ready for the playful rhythm variations</li>
                                <li>Maintain your sweet momentum through the most intense sequences</li>
                            </ul>
                        </div>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 15px;">With practice, recognizing the rhythm patterns becomes easier and the musical performance feels more natural.</p>
                    </div>

                </div>
            </section>

            <!-- Related Mods -->
            <section class="static-section" style="border-bottom: none; border-top: 1px dashed rgba(255,255,255,0.1); margin-top: 10px; padding-bottom: 0;">
                <h3 style="font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;"><i data-lucide="layout-grid" style="color: #54a0ff;"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p style="margin-bottom: 15px;">Some other rhythm mods also offer creative characters and entertaining musical battles.</p>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <a href="/fnf-starcatcher/" style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; text-decoration: none; border-left: 3px solid var(--accent-pink); transition: transform 0.2s;">
                            <strong style="color: #fff; display: block; margin-bottom: 5px;">FNF StarCatcher</strong>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Features magical visuals and energetic rhythm challenges.</span>
                        </a>
                        <a href="/fnf-cassandra/" style="flex: 1; min-width: 250px; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; text-decoration: none; border-left: 3px solid #ff4757; transition: transform 0.2s;">
                            <strong style="color: #fff; display: block; margin-bottom: 5px;">FNF Cassandra</strong>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Introduces a darker atmosphere combined with intense musical showdowns.</span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Categories -->
            <div class="category-tags-section" style="margin-top: 30px;">
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
console.log('Successfully updated HTML for FNF Sweet Licorice with a distinct layout');
