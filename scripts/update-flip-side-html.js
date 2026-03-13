const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-flip-side/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Flip-Side – A Twisted Rhythm Remix of Friday Night Funkin’</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Enter the alternate world of FNF Flip-Side where familiar battles feel completely different. Follow the rhythm and master the flipped musical challenge.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Flip-Side – A Twisted Rhythm Remix of Friday Night Funkin’">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Enter the alternate world of FNF Flip-Side where familiar battles feel completely different. Follow the rhythm and master the flipped musical challenge.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Enter the alternate world of FNF Flip-Side where familiar battles feel completely different. Follow the rhythm and master the flipped musical challenge."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Flip-Side</strong> presents a creative twist on the traditional Friday Night Funkin’ rhythm experience. Instead of simply adding new characters or songs, the mod explores the idea of an alternate perspective on familiar gameplay. The musical battles feel similar at first, but subtle changes in rhythm patterns and presentation give the experience a unique identity.</p>
                    <p>In FNF Flip-Side, players encounter a version of the rhythm duel that feels slightly unpredictable. Visual details and musical variations create the impression that the stage exists in a parallel version of the FNF universe. The environment still feels recognizable, yet the mood and pacing make the performance feel fresh.</p>
                    <p>Fans who enjoy experimental rhythm mods often appreciate FNF Flip-Side because it plays with expectations while keeping the core gameplay accessible.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="refresh-cw"></i> An Alternate Take on Rhythm Battles</h2>
                <div class="static-content">
                    <p>The concept behind FNF Flip-Side revolves around presenting a familiar musical format from a slightly altered perspective. The songs may follow similar structures to traditional FNF tracks, but the rhythm arrangements and visual tone make the gameplay feel different.</p>
                    <p>Features that define the experience include:</p>
                    <ul>
                        <li>An alternate interpretation of classic rhythm battles</li>
                        <li>Creative visual adjustments that change the stage atmosphere</li>
                        <li>Rhythm patterns that feel slightly unconventional</li>
                    </ul>
                    <p>These elements give the mod a distinctive personality while preserving the recognizable FNF gameplay style.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Flow</h2>
                <div class="static-content">
                    <p>Players still follow the standard rhythm mechanics used in Friday Night Funkin’. Arrows appear on the screen and move toward the target markers, requiring accurate timing from the player.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Gameplay Feature</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Arrow Matching</strong></td>
                                    <td>Press the correct directional key when the note aligns</td>
                                </tr>
                                <tr>
                                    <td><strong>Rhythm Timing</strong></td>
                                    <td>Accurate timing keeps the performance meter balanced</td>
                                </tr>
                                <tr>
                                    <td><strong>Pattern Variation</strong></td>
                                    <td>Some rhythm sequences may feel slightly different</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Staying synchronized with the music is the key to maintaining control of the rhythm battle.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Controls and Inputs</h3>
                <div class="static-content">
                    <p>The control system remains simple and familiar, allowing players to concentrate on the rhythm.</p>
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
                                    <td><strong>Flipped Keys</strong></td>
                                    <td>React to the unconventional note directions</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the mirrored track or pause the action</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to return to the selection hub</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The straightforward inputs allow you to focus on the mirrored world's unique musical patterns.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Playing Tips</h3>
                <div class="static-content">
                    <p>The altered rhythm style in FNF Flip-Side can sometimes surprise players who expect traditional note patterns. Listening closely to the soundtrack helps maintain better timing.</p>
                    <p>Alternate reality rhythm tips:</p>
                    <ul>
                        <li>Master the mirrored musical arrangements of this reality</li>
                        <li>Keep your focus sharp as the patterns unexpectedly reverse</li>
                        <li>Steady your reactions when facing the alternate rhythm flow</li>
                    </ul>
                    <p>These habits make it easier to adapt to the mod’s unique rhythm flow.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Several other mods also experiment with creative ideas and new rhythm challenges.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: B-Sides -->
                        <a href="/fnf-b-sides/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-b-sides.webp" alt="B-Sides" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF B-Sides</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Remixes original tracks with vibrant colors and faster rhythms.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #9b59b6; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Level Devil -->
                        <a href="/fnf-vs-level-devil/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-level-devil.webp" alt="Level Devil" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs Level Devil</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A high-stakes rhythm challenge featuring unpredictable stage hazards.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px;">
                <div class="category-pills" style="justify-content: center;">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                    <a href="/skill.games/" class="category-pill">Skill</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Flip-Side with Premium Visual Style');
