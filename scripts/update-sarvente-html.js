const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-minus-sarvente-mid-fight-masses-minus/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF vs Minus Sarvente – Stylish Mid-Fight Masses Minus Remix</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Experience a stylish remix of the Mid-Fight Masses mod with FNF vs Minus Sarvente. Follow the rhythm, face iconic Minus characters, and master the music.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF vs Minus Sarvente – Stylish Mid-Fight Masses Minus Remix">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Experience a stylish remix of the Mid-Fight Masses mod with FNF vs Minus Sarvente. Follow the rhythm, face iconic Minus characters, and master the music.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Experience a stylish remix of the Mid-Fight Masses mod with FNF vs Minus Sarvente. Follow the rhythm, face iconic Minus characters, and master the music."');

// 2. Build the Content Layout (Premium Redesign)
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF vs Minus Sarvente (Mid-Fight Masses Minus)</strong> is a bold artistic reinterpretation of the legendary Mid-Fight Masses mod. By applying the iconic Minus aesthetic, this version transforms Sarvente, Ruv, and other characters into stylized, icon-inspired forms. The result is a visually striking experience that breathes new life into one of the most beloved rhythm battles in the Friday Night Funkin’ community.</p>
                    <p>The core of the experience remains faithful to the original’s high-energy atmosphere, but the redesigned animations and character expressions create a completely different vibe. Whether you are a fan of the original monastery duel or a newcomer looking for a unique visual twist, this mod delivers a satisfying blend of classic music and modern FNF artistry.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="brush"></i> A Stylized Vision of the Mid-Fight Duel</h2>
                <div class="static-content">
                    <p>The primary highlight of this version is the shifting of character designs toward the Minus style. Each opponent is rebuilt using simplified shapes and vibrant colors that reflect their health bar icons, turning every frame of the performance into a stylized piece of art.</p>
                    <p>Why players enjoy the Minus transformation:</p>
                    <ul>
                        <li>Simplified yet highly expressive character sprites</li>
                        <li>Brighter, more vibrant color palettes that pop on stage</li>
                        <li>A cohesive visual theme that ties into the FNF Minus universe</li>
                    </ul>
                    <p>This artistic direction ensures that even if you’ve mastered the original songs, the visual feedback feels fresh and engaging.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay and Rhythm Flow</h2>
                <div class="static-content">
                    <p>Mechanically, FNF vs Minus Sarvente stays true to the traditional rhythm system. You’ll need steady fingers and a strong sense of timing to handle the intense note patterns, especially as the tracks build toward their dramatic conclusions.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Minus Designs</strong></td>
                                    <td>Redesigned characters based on health bar icons.</td>
                                </tr>
                                <tr>
                                    <td><strong>Classic Tracks</strong></td>
                                    <td>Experience the original Mid-Fight Masses soundtrack.</td>
                                </tr>
                                <tr>
                                    <td><strong>Stage Dynamics</strong></td>
                                    <td>Animated backgrounds that react to the musical energy.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Controls Overview</h3>
                <div class="static-content">
                    <p>The familiar control scheme allows you to focus entirely on the icon-style note sequences. Quick reactions and steady timing are the keys to out-rhythming Sarvente.</p>
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
                                    <td><strong>Minus Keys</strong></td>
                                    <td>Match the incoming icon-style notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Start Journey</strong></td>
                                    <td>Use Enter to begin the musical battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Leave Monastery</strong></td>
                                    <td>Press Esc to return to the selection screen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Strategic Performance Tips</h3>
                <div class="static-content">
                    <p>To master the Minus version of these legendary battles, you should focus on the connection between the visual icons and the musical beat. Staying calm during fast note streaks is essential.</p>
                    <ul>
                        <li>Align your timing with the stylized Minus tempo changes</li>
                        <li>Keep your focus on the icon-based note patterns at all times</li>
                        <li>Steady your fingers for the climactic musical finishes</li>
                    </ul>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: FNF Minus -->
                        <a href="/fnf-minus/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-minus.webp" alt="FNF Minus" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Minus</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">The original mod that started the icon-inspired redesign trend.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Neo -->
                        <a href="/friday-night-funkin-neo/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 242, 254, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/friday-night-funkin-neo.webp" alt="Neo" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">Friday Night Funkin' Neo</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features glowing neon visuals and a complete musical overhaul.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #00f2fe; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/music.games/" class="category-pill">Music</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF vs Minus Sarvente with Premium Visual Style');
