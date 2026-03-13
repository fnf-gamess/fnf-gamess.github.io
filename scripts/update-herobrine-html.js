const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-herobrine/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Herobrine – Face the Minecraft Legend in a Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="The mysterious Minecraft legend steps into the spotlight in FNF: Herobrine. Keep the rhythm and survive a dark musical showdown.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Herobrine – Face the Minecraft Legend in a Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="The mysterious Minecraft legend steps into the spotlight in FNF: Herobrine. Keep the rhythm and survive a dark musical showdown.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"The mysterious Minecraft legend steps into the spotlight in FNF: Herobrine. Keep the rhythm and survive a dark musical showdown."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF: Herobrine</strong> is a crossover rhythm mod that introduces one of the most famous legends from the Minecraft community into the world of Friday Night Funkin’. Instead of exploring caves or building structures, players face Herobrine in a musical battle where rhythm and timing determine the outcome.</p>
                    <p>The atmosphere in FNF: Herobrine leans toward a darker style compared with many colorful FNF mods. The stage design and character animations capture the mysterious aura often associated with the Herobrine myth. As the music begins, the rhythm duel slowly builds intensity, encouraging players to stay focused and react quickly to incoming notes.</p>
                    <p>Fans of crossover mods often enjoy how FNF: Herobrine combines the familiar rhythm mechanics of Friday Night Funkin’ with the eerie presence of a well-known gaming legend.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="ghost"></i> The Legend Enters the Rhythm Stage</h2>
                <div class="static-content">
                    <p>Herobrine has been a mysterious figure in Minecraft stories for years, often described as a strange character appearing in empty worlds. In FNF: Herobrine, that mysterious presence becomes the opponent in a musical duel.</p>
                    <p>Several elements help shape the atmosphere of the mod:</p>
                    <ul>
                        <li>A darker stage environment inspired by Minecraft worlds</li>
                        <li>Character animations that emphasize Herobrine’s mysterious presence</li>
                        <li>Music tracks designed to create tension during the rhythm battle</li>
                    </ul>
                    <p>These details help transform a simple rhythm challenge into something that feels more suspenseful.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> What Makes the Mod Interesting</h2>
                <div class="static-content">
                    <p>The gameplay follows the traditional Friday Night Funkin’ formula, but the theme gives it a unique identity. Instead of bright or comedic settings, the battle feels slightly eerie, adding extra tension while the music plays.</p>
                    <p>Notable aspects of the experience include:</p>
                    <ul>
                        <li>A crossover featuring the legendary Herobrine character</li>
                        <li>Gradually increasing rhythm difficulty throughout the track</li>
                        <li>A dark visual theme that contrasts with the energetic music</li>
                    </ul>
                    <p>This combination makes each part of the song feel like a new phase in the musical confrontation.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Gameplay Basics</h3>
                <div class="static-content">
                    <p>Players must match directional arrows with the correct keys as they align with the markers on the screen. Maintaining rhythm accuracy keeps the performance meter balanced throughout the battle.</p>
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
                                    <td><strong>Legend Keys</strong></td>
                                    <td>Match the blocky notes in this mysterious realm</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Start the encounter or pause the battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Leave the mines and return to menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Staying in sync with the music helps maintain control of the rhythm duel.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Rhythm Tips for Surviving the Battle</h3>
                <div class="static-content">
                    <p>Keeping a steady rhythm is the key to winning the musical duel against Herobrine. Focusing on the beat rather than only watching the arrows can improve accuracy.</p>
                    <p>To survive the legendary encounter, keep these tips in mind:</p>
                    <ul>
                        <li>Pay close attention to the eerie musical timing</li>
                        <li>Stay alert as the tension within the track increases</li>
                        <li>Keep your rhythm steady during the most chaotic segments</li>
                    </ul>
                    <p>Practicing these habits makes it easier to maintain long streaks of accurate notes.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Mods from the FNF Universe</h2>
                <div class="static-content">
                    <p>Many other mods also bring creative characters and new rhythm challenges.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Minecraft Funky Edition -->
                        <a href="/fnf-minecraft-funky-edition/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 210, 211, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-minecraft-funky-edition.webp" alt="Minecraft Funky Edition" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Minecraft Funky Edition</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Explores a blocky pixel world with energetic musical battles.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #00d2d3; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Zardy -->
                        <a href="/fnf-vs-zardy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 159, 67, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-zardy.webp" alt="Vs Zardy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Zardy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face the cornfield terror in a high-intensity rhythm encounter.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ff9f43; width: 18px;"></i>
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
console.log('Successfully updated Herobrine with Premium Visual Style');
