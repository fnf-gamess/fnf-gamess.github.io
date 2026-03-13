const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-suicide-mouse-remastered/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs. Suicide Mouse Remastered – Dark Cartoon Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="A haunting cartoon legend returns in FNF Vs. Suicide Mouse Remastered. Follow the beat and face Suicide Mouse in this chilling rhythm showdown.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs. Suicide Mouse Remastered – Dark Cartoon Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="A haunting cartoon legend returns in FNF Vs. Suicide Mouse Remastered. Follow the beat and face Suicide Mouse in this chilling rhythm showdown.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"A haunting cartoon legend returns in FNF Vs. Suicide Mouse Remastered. Follow the beat and face Suicide Mouse in this chilling rhythm showdown."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Vs. Suicide Mouse Remastered</strong> is a horror-themed Friday Night Funkin’ mod inspired by one of the internet’s most famous creepypasta stories. The mod places players in a dark musical confrontation against the eerie version of Suicide Mouse, turning a disturbing cartoon legend into a rhythm battle filled with tension and haunting music.</p>
                    <p>The stage atmosphere in FNF Vs. Suicide Mouse Remastered gradually shifts as the song progresses. At first, the environment feels quiet and almost empty, but as the rhythm intensifies, the visuals and music become more unsettling. This progression gives the mod a unique pacing that builds suspense throughout the performance.</p>
                    <p>What makes FNF Vs. Suicide Mouse Remastered memorable is the combination of creepy visual storytelling and classic rhythm gameplay. Instead of relying only on fast note patterns, the mod also focuses on mood and atmosphere to create a darker musical experience.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="ghost"></i> A Rhythm Battle with a Creepy Atmosphere</h2>
                <div class="static-content">
                    <p>The theme of the mod draws inspiration from old black-and-white cartoons while adding an unsettling twist. The character design and stage presentation reflect a distorted version of a classic cartoon world.</p>
                    <p>Several elements contribute to the unique tone of the game:</p>
                    <ul>
                        <li>Dark visual effects inspired by vintage cartoon styles</li>
                        <li>Slow, eerie musical sections that gradually become intense</li>
                        <li>Character animations designed to create an unsettling mood</li>
                    </ul>
                    <p>These features give the rhythm battle a cinematic feeling, where each section of the song feels like a new stage of the encounter.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Structure</h2>
                <div class="static-content">
                    <p>Although the theme is darker than most mods, the gameplay mechanics remain familiar. Players must follow the rhythm of the music and press the correct arrow keys as the notes reach the target markers.</p>
                    <p>The challenge increases as the music becomes faster and the note patterns grow more complex.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Gameplay Element</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Rhythm Matching</strong></td>
                                    <td>Press the correct arrow key when notes reach the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Shows how well the player keeps the rhythm</td>
                                </tr>
                                <tr>
                                    <td><strong>Song Progression</strong></td>
                                    <td>Music gradually becomes more intense</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Maintaining accuracy helps keep the performance meter balanced and prevents the battle from ending early.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Controls Overview</h3>
                <div class="static-content">
                    <p>The control system stays consistent with the classic Friday Night Funkin’ setup.</p>
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
                                    <td><strong>Directional Input</strong></td>
                                    <td>Press the arrows to survive the haunting performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter Key</strong></td>
                                    <td>Start or pause your descent into the dark rhythm</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Leave the eerie stage and return to the main selection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The simple control scheme lets you focus on the unsettling rhythm of this legendary mod.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Handling the Dark Rhythm</h3>
                <div class="static-content">
                    <p>The atmosphere of the mod can feel intense, but maintaining focus on the music helps players keep control of the rhythm. Listening closely to the beat is often more effective than reacting only to visual arrows.</p>
                    <p>Survive the haunting performance with these survival strategies:</p>
                    <ul>
                        <li>Align your inputs precisely with the distorted beats of the track</li>
                        <li>Ensure your hands are ready over the directional controls at all times</li>
                        <li>Maintain your concentration as the unsettling tempo increases</li>
                    </ul>
                    <p>Practicing these habits helps players handle the more challenging sections of the song.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Several other mods also explore darker themes or unique rhythm experiences.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Herobrine -->
                        <a href="/fnf-herobrine/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(76, 209, 55, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-herobrine.webp" alt="Herobrine" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Herobrine</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Follow the flow of dark beats in this mysterious rhythm-based performance.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #4cd137; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Huggy Wuggy -->
                        <a href="/fnf-vs-huggy-wuggy/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(255, 71, 87, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-huggy-wuggy-poppy-playtime.webp" alt="Huggy Wuggy" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Huggy Wuggy</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Experience a high-stakes rhythm challenge featuring unpredictable toy factory stage hazards.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #ff4757; width: 18px;"></i>
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
console.log('Successfully updated Suicide Mouse Remastered with Premium Visual Style');
