const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-kick-kick-funk-vs-dan-the-man/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Kick Kick Funk Vs. Dan The Man – Play the Rhythm Battle Online</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Join the musical showdown in FNF Kick Kick Funk Vs. Dan The Man. Follow the beat, hit the notes, and face the action hero Dan in a fun rhythm challenge.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Kick Kick Funk Vs. Dan The Man – Play the Rhythm Battle Online">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Join the musical showdown in FNF Kick Kick Funk Vs. Dan The Man. Follow the beat, hit the notes, and face the action hero Dan in a fun rhythm challenge.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Join the musical showdown in FNF Kick Kick Funk Vs. Dan The Man. Follow the beat, hit the notes, and face the action hero Dan in a fun rhythm challenge."');

// 2. Replace the entire static card content
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p>FNF Kick Kick Funk Vs. Dan The Man is a crossover rhythm mod that brings the action hero Dan into the musical world of Friday Night Funkin’. Instead of fists and explosions, this encounter turns into a fast-paced rap battle where rhythm and timing decide the winner. The mod mixes energetic music with animated character performances, creating a fun and lively gameplay experience.</p>
                    <p>The concept of the mod revolves around transforming the combat energy of Dan the Man into a musical challenge. As the battle begins, players must follow the rhythm of the track while matching the incoming notes. The stage visuals and character animations help create the feeling of an intense but entertaining duel.</p>
                    <p>Fans of rhythm games will enjoy how the mod keeps the classic Friday Night Funkin’ mechanics while introducing a recognizable character from another game universe.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="swords"></i> A Rhythm Battle Inspired by Action Gameplay</h3>
                <div class="static-content">
                    <p>The main highlight of FNF Kick Kick Funk Vs. Dan The Man is the energetic musical track that drives the entire gameplay. The song carries a lively tempo that mirrors the fast-paced nature of the character Dan. As the rhythm speeds up, players must maintain focus to keep their note streak alive.</p>
                    <p>Several elements help make the gameplay exciting:</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">A crossover featuring the iconic action character Dan</li>
                        <li style="margin-bottom:8px;">Smooth character animations synchronized with the music</li>
                        <li style="margin-bottom:8px;">Rhythm patterns that gradually increase in difficulty</li>
                    </ul>
                    <p style="margin-top: 15px;">The blend of action-inspired visuals and rhythm gameplay creates a battle that feels dynamic from start to finish.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="crosshair"></i> Core Gameplay Mechanics</h3>
                <div class="static-content">
                    <p>The gameplay follows the familiar format of most Friday Night Funkin’ mods. Arrows move across the screen in sync with the music, and players must press the corresponding keys at the correct moment. Maintaining accuracy is essential because the performance meter reflects how well you are following the beat.</p>
                    <p>To perform well in FNF Kick Kick Funk Vs. Dan The Man, players should focus on the rhythm of the music rather than just reacting to visual prompts. Listening carefully to the beat helps predict incoming patterns and maintain a consistent rhythm.</p>
                    <p>Key gameplay elements include:</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Matching arrows with keyboard inputs</li>
                        <li style="margin-bottom:8px;">Keeping the rhythm streak alive</li>
                        <li style="margin-bottom:8px;">Avoiding missed notes during fast sections</li>
                    </ul>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Basic Controls Overview</h3>
                <div class="static-content">
                    <p>The straightforward inputs allow you to master Dan's action-hero rhythm without missing a beat.</p>
                    
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
                                    <td><strong>Action Keys</strong></td>
                                    <td>Strike the notes to match Dan's heroic performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Start the showdown or pause the action</td>
                                </tr>
                                <tr>
                                    <td><strong>Retreat</strong></td>
                                    <td>Press Esc to exit the arena and return to menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p style="margin-top: 15px;">These simple controls make the mod easy to learn while still allowing challenging rhythm sequences later in the song.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="target"></i> Gameplay Tips for Better Accuracy</h3>
                <div class="static-content">
                    <p>Players who want to improve their performance should keep a steady focus on both the rhythm and the incoming notes. Maintaining a calm pace helps avoid mistakes during the faster parts of the song.</p>
                    <p>Action-ready rhythm tips:</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Sync your movements with the high-energy action soundtrack</li>
                        <li style="margin-bottom:8px;">Anticipate the unique musical sequences during the duel</li>
                        <li style="margin-bottom:8px;">Maintain your momentum as the rhythm intensity scales up</li>
                    </ul>
                    <p style="margin-top: 15px;">With practice, recognizing musical patterns becomes easier and the rhythm battle feels more natural.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Darnell -->
                        <a href="/fnf-darnells-mixtape/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-darnell-s-mixtape.webp" alt="Darnell" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Darnell’s Mixtape</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Follow the flow of urban beats in this stylish musical performance.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Lit Up -->
                        <a href="/fnf-lit-up-darnell-mix/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-lit-up-darnell-mix.webp" alt="Lit Up" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Lit Up</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Paces you against a fiery opponent in a fast-paced urban remix.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for FNF Kick Kick Funk Vs. Dan The Man');
