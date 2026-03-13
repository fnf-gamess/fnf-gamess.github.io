const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-the-blueballs-incident/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: The Blueballs Incident – Dark Story Rhythm Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Strange events unfold in FNF: The Blueballs Incident. Keep the beat, survive eerie music battles, and uncover a mysterious rhythm experience.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: The Blueballs Incident – Dark Story Rhythm Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Strange events unfold in FNF: The Blueballs Incident. Keep the beat, survive eerie music battles, and uncover a mysterious rhythm experience.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Strange events unfold in FNF: The Blueballs Incident. Keep the beat, survive eerie music battles, and uncover a mysterious rhythm experience."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF: The Blueballs Incident</strong> is a story-driven Friday Night Funkin’ mod known for its darker tone and unusual presentation. Instead of focusing only on music battles, the mod introduces a mysterious atmosphere that slowly unfolds as the rhythm gameplay progresses. Players are pulled into a strange musical encounter where every beat feels tied to the unsettling events happening on screen.</p>
                    <p>The world of FNF: The Blueballs Incident feels different from typical colorful FNF stages. Lighting, background details, and character expressions all contribute to a tense environment. As the song develops, the mood becomes more intense, encouraging players to stay focused on both the rhythm and the strange narrative elements surrounding the battle.</p>
                    <p>Many fans enjoy FNF: The Blueballs Incident because it mixes storytelling with rhythm gameplay. The music still drives the action, but the overall experience feels more dramatic and immersive.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="book-open"></i> A Rhythm Mod with a Dark Narrative</h2>
                <div class="static-content">
                    <p>One of the defining features of the mod is its narrative atmosphere. Instead of presenting a simple musical duel, the game creates the feeling that something unusual is happening behind the scenes. Visual changes and character reactions often appear during key moments in the track.</p>
                    <p>Several elements shape the identity of the mod:</p>
                    <ul>
                        <li>A darker visual style compared with most FNF mods</li>
                        <li>Music tracks designed to match the tense mood of the story</li>
                        <li>Character animations that reflect emotional intensity</li>
                    </ul>
                    <p>These details help transform the rhythm battle into a performance that feels both musical and cinematic.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Structure and Musical Flow</h2>
                <div class="static-content">
                    <p>Despite its mysterious tone, the gameplay of FNF: The Blueballs Incident still follows the classic Friday Night Funkin’ mechanics. Arrows scroll across the screen, and players must press the matching keys when they align with the target markers.</p>
                    <p>The challenge gradually increases as the song moves forward. Faster patterns and more complex sequences appear later in the track, requiring strong timing and concentration.</p>
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
                                    <td><strong>Note Matching</strong></td>
                                    <td>Press the correct arrow keys in time with the music</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Shows how well the player maintains rhythm accuracy</td>
                                </tr>
                                <tr>
                                    <td><strong>Song Progression</strong></td>
                                    <td>Rhythm difficulty increases as the music develops</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Staying in sync with the beat is the key to maintaining control of the musical duel.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Basic Controls</h3>
                <div class="static-content">
                    <p>The control scheme remains simple and consistent with most Friday Night Funkin’ mods.</p>
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
                                    <td><strong>Incident Keys</strong></td>
                                    <td>Match the eerie notes as they appear on stage</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the story or pause the musical session</td>
                                </tr>
                                <tr>
                                    <td><strong>Return to Menu</strong></td>
                                    <td>Press Esc to exit the mysterious encounter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Because the inputs are intuitive, you can focus entirely on navigating the eerie rhythm of this story.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Strategies for Maintaining the Beat</h3>
                <div class="static-content">
                    <p>The tense atmosphere of the mod can make the rhythm sections feel more intense, but strong timing helps maintain control during the battle.</p>
                    <p>Master the unsettling atmosphere with these key strategies:</p>
                    <ul>
                        <li>Analyze the subtle rhythm variations within the soundtrack</li>
                        <li>Maintain a relaxed grip while tracking the complex note flows</li>
                        <li>Stay composed as the atmospheric musical patterns intensify</li>
                    </ul>
                    <p>These habits help players handle the increasingly complex note patterns.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods Worth Exploring</h2>
                <div class="static-content">
                    <p>Several other mods also feature darker themes or creative rhythm encounters.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Suicide Mouse -->
                        <a href="/fnf-vs-suicide-mouse-remastered/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(131, 149, 167, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-suicide-mouse-remastered.webp" alt="Suicide Mouse" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Suicide Mouse Remastered</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Enter a black-and-white world of surreal and eerie cartoon rhythms.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #8395a7; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Herobrine -->
                        <a href="/fnf-herobrine/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 213, 115, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-herobrine.webp" alt="Herobrine" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Herobrine</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Introduces a mysterious opponent inspired by Minecraft legend stories.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ed573; width: 18px;"></i>
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
console.log('Successfully updated The Blueballs Incident with Premium Visual Style');
