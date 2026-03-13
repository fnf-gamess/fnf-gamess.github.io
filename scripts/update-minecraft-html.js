const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-minecraft-funky-edition/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Minecraft Funky Edition – Play the Minecraft Rhythm Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Explore the musical crossover in FNF: Minecraft Funky Edition. Face pixel-style characters and match the beat in this creative Friday Night Funkin’ mod.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Minecraft Funky Edition – Play the Minecraft Rhythm Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Explore the musical crossover in FNF: Minecraft Funky Edition. Face pixel-style characters and match the beat in this creative Friday Night Funkin’ mod.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Explore the musical crossover in FNF: Minecraft Funky Edition. Face pixel-style characters and match the beat in this creative Friday Night Funkin’ mod."');

// 2. Build the "Minecraft Funky Edition" Layout (100% FNF Mods Style)
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF: Minecraft Funky Edition</strong> is a creative crossover mod that blends the rhythm gameplay of Friday Night Funkin’ with the blocky world inspired by Minecraft. In this version, the familiar musical duel takes place in a pixel-style environment where characters, stages, and animations reflect the iconic sandbox aesthetic. The result is a rhythm battle that feels both nostalgic and refreshing.</p>
                    <p>The gameplay experience in FNF: Minecraft Funky Edition stays true to the original Friday Night Funkin’ mechanics. Players must follow the beat of the music and press the correct arrow keys as notes reach their markers. As the track progresses, note patterns become faster and more demanding, encouraging players to stay focused and keep their timing precise.</p>
                    <p>One of the reasons FNF: Minecraft Funky Edition stands out is its visual theme. The mod transforms the usual stage into a blocky environment reminiscent of pixel-based worlds. Characters appear in a style that resembles the classic cube-based design, which adds personality to the musical performance.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="palette"></i> Pixel-Inspired Rhythm Adventure</h2>
                <div class="static-content">
                    <p>The visual theme of the mod plays an important role in shaping the overall atmosphere. Everything from the stage layout to the character animations reflects a block-style aesthetic that many players immediately recognize.</p>
                    <p>Notable features of the mod include:</p>
                    <ul>
                        <li>A pixel-inspired environment that mirrors Minecraft-style visuals</li>
                        <li>Rhythm tracks that match the playful atmosphere of the setting</li>
                        <li>Character animations designed with a blocky artistic style</li>
                    </ul>
                    <p>These elements make the musical duel feel like a rhythm adventure taking place inside a vibrant pixel world.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="info"></i> Gameplay Overview</h2>
                <div class="static-content">
                    <p>The core mechanics of FNF: Minecraft Funky Edition revolve around rhythm accuracy and quick reactions. Notes appear on the screen and move toward the target markers, and players must press the corresponding arrow keys at the right moment.</p>
                    <p>Keeping up with the rhythm helps maintain the performance meter. Missing too many notes can shift the balance of the battle, while consistent timing keeps the musical performance strong.</p>
                    <p>Key gameplay characteristics include:</p>
                    <ul>
                        <li>Classic Friday Night Funkin’ rhythm mechanics</li>
                        <li>Gradually increasing note speed as the song progresses</li>
                        <li>A focus on timing and rhythm awareness</li>
                    </ul>
                    <p>Learning the rhythm of the track often helps players anticipate upcoming notes and maintain a steady flow during the battle.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Controls and Basic Inputs</h3>
                <div class="static-content">
                    <p>The control scheme remains simple, making the mod easy to learn even for players who are new to rhythm games.</p>
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
                                    <td><strong>Directional Keys</strong></td>
                                    <td>Strike the corresponding blocks on time</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Initiate or halt the rhythmic duel</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Back out to the main selection screen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>These controls allow players to focus primarily on rhythm and timing rather than complicated inputs.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Playing Smoothly</h3>
                <div class="static-content">
                    <p>Players who want to improve their performance should try to follow the music closely. Recognizing the beat makes it easier to respond to incoming note patterns.</p>
                    <p>A few helpful strategies:</p>
                    <ul>
                        <li>Pay close attention to the pixel-based musical beat</li>
                        <li>Maintain your hands in position over the direction arrows at all times</li>
                        <li>Stay calm and composed when the difficulty ramps up</li>
                    </ul>
                    <p>With enough practice, the rhythm patterns become easier to recognize and the musical battle feels more natural.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> Other FNF Mods to Try</h2>
                <div class="static-content">
                    <p>Several other mods also offer creative themes and unique rhythm challenges.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Herobrine -->
                        <a href="/fnf-herobrine/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(76, 209, 55, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-herobrine.webp" alt="Herobrine" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Herobrine</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features a darker Minecraft-inspired setting with intense musical battles.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #4cd137; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Level Devil -->
                        <a href="/fnf-vs-level-devil/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(238, 82, 83, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-level-devil.webp" alt="Level Devil" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Level Devil</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Introduces unusual rhythm patterns and a challenging gameplay style.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ee5253; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated Minecraft Funky Edition with 100% FNF Mods Visual Style');
