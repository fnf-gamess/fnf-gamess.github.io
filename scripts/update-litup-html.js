const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-lit-up-darnell-mix/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Lit Up (Darnell Mix) – Play the Darnell Remix Online</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Jump into FNF: Lit Up (Darnell Mix), a fast-paced Friday Night Funkin’ mod featuring Darnell and a fiery remix track. Hit the beat and win the rap battle.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Lit Up (Darnell Mix) – Play the Darnell Remix Online">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Jump into FNF: Lit Up (Darnell Mix), a fast-paced Friday Night Funkin’ mod featuring Darnell and a fiery remix track. Hit the beat and win the rap battle.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Jump into FNF: Lit Up (Darnell Mix), a fast-paced Friday Night Funkin’ mod featuring Darnell and a fiery remix track. Hit the beat and win the rap battle."');

// 2. Replace the entire static card content
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p>FNF: Lit Up (Darnell Mix) is an exciting rhythm mod that highlights Darnell in a stylish musical battle. Inspired by the rhythm-driven gameplay of Friday Night Funkin’, this mod focuses on delivering a fast and energetic experience through a remixed version of the song “Lit Up.” The moment the music begins, players are pulled into a colorful showdown where timing and rhythm become the key to victory.</p>
                    <p>The visual design keeps the familiar Friday Night Funkin’ style but gives the characters lively movements that match the music’s tempo. Darnell’s presence adds personality to the performance, turning the rhythm battle into a playful yet competitive encounter. As the track progresses, note patterns become more dynamic, encouraging players to stay focused and keep their accuracy high.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="music"></i> Rhythm and Gameplay Experience</h3>
                <div class="static-content">
                    <p>At its core, FNF: Lit Up (Darnell Mix) delivers the classic rhythm mechanics fans expect from a Friday Night Funkin’ mod. Notes scroll toward the target markers while the music sets the pace. Players must press the correct keys at the right moment to keep the performance meter balanced.</p>
                    <p>The remix track is the centerpiece of the experience. Its upbeat tempo creates a lively flow that feels satisfying when every note is hit perfectly. The challenge increases gradually, making the mod approachable for new players while still engaging for experienced rhythm game fans.</p>
                    <p>During the battle, the animations and music work together to create a lively atmosphere. Each successful streak of notes keeps the performance strong, while missed inputs can quickly shift the balance of the musical duel.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="gamepad-2"></i> Learning the Controls and Rhythm</h3>
                <div class="static-content">
                    <p>Understanding the basic controls is the first step to mastering the game. As arrows rise toward the markers at the top of the screen, players must press the matching keys in sync with the rhythm. Accuracy is important because consistent timing helps maintain the performance meter throughout the song.</p>
                    
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
                                    <td><strong>Fire Keys</strong></td>
                                    <td>Match the direction of the notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Ignite the battle or pause</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Return to the menu selection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Darnell Mixtape -->
                        <a href="/fnf-darnell-s-mixtape/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-darnell-s-mixtape.webp" alt="Darnell Mixtape" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Darnell’s Mixtape</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Experience more of Darnell's signature style in this high-energy musical mixtape.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Hex 2 -->
                        <a href="/fnf-vs-hex-2/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 204, 113, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-hex-2.webp" alt="Hex 2" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Hex 2</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A smooth and nostalgic rhythm encounter featuring a friendly robotic companion.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ecc71; width: 18px;"></i>
                        </a>

                        <!-- Card 3: Zardy -->
                        <a href="/fnf-vs-zardy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 159, 67, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-zardy.webp" alt="Vs Zardy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Zardy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face off against a silent guardian in a dark, atmospheric cornfield battle.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ff9f43; width: 18px;"></i>
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
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newStaticCard + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for FNF Lit Up Darnell Mix');
