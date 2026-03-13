const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-starcatcher/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF StarCatcher – A Magical Rhythm Adventure</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Chase the rhythm among the stars in FNF StarCatcher. Bright visuals, catchy beats, and fast note patterns turn every song into a cosmic performance.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF StarCatcher – A Magical Rhythm Adventure">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Chase the rhythm among the stars in FNF StarCatcher. Bright visuals, catchy beats, and fast note patterns turn every song into a cosmic performance.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Chase the rhythm among the stars in FNF StarCatcher. Bright visuals, catchy beats, and fast note patterns turn every song into a cosmic performance."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF StarCatcher</strong> is a visually charming rhythm mod that introduces a magical, star-filled atmosphere to the world of Friday Night Funkin’. Instead of the usual street-style rap battles, the musical performance unfolds in a vibrant environment filled with glowing colors and playful cosmic themes.</p>
                    <p>The stage presentation in FNF StarCatcher immediately catches attention. Sparkling backgrounds, animated visual effects, and expressive character movements create the feeling that the entire rhythm battle is happening under a sky full of stars. As the music plays, the environment feels alive, moving in sync with the beat of the soundtrack.</p>
                    <p>Players who enjoy colorful and creative FNF mods often find FNF StarCatcher particularly appealing. The combination of energetic music and whimsical visual design creates a rhythm experience that feels both relaxing and exciting at the same time.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="sparkles"></i> A Cosmic Twist on Rhythm Battles</h3>
                <div class="static-content">
                    <p>The concept behind FNF StarCatcher focuses on transforming a simple musical duel into something more imaginative. Instead of dark or intense environments, the stage embraces bright tones and magical visuals.</p>
                    <p>What makes the mod stand out:</p>
                    <ul>
                        <li>A star-themed stage filled with glowing visual effects</li>
                        <li>Catchy rhythm tracks that match the cosmic atmosphere</li>
                        <li>Character animations that move smoothly with the beat</li>
                    </ul>
                    <p>These elements help create a musical performance that feels lively and visually engaging.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="activity"></i> Gameplay Structure</h3>
                <div class="static-content">
                    <p>Despite its magical theme, the gameplay of FNF StarCatcher remains grounded in the classic Friday Night Funkin’ rhythm system. Players must match incoming arrows with the correct keyboard inputs while keeping up with the tempo of the music.</p>
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
                                    <td><strong>Rhythm Matching</strong></td>
                                    <td>Press arrow keys when notes reach the markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Indicates how well the player keeps the beat</td>
                                </tr>
                                <tr>
                                    <td><strong>Difficulty Growth</strong></td>
                                    <td>Note patterns become faster as the song continues</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Maintaining rhythm accuracy is essential for completing the musical duel successfully.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Layout</h3>
                <div class="static-content">
                    <p>The control system remains simple so players can focus entirely on the rhythm challenge.</p>
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
                                    <td><strong>Direction Arrows</strong></td>
                                    <td>Precision inputs to match the cosmic notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter Key</strong></td>
                                    <td>Begin your journey or pause the celestial performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Depart from the star-filled stage and return to the lobby</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Because the inputs are straightforward, players can quickly adapt to the gameplay.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Mastering the Rhythm</h3>
                <div class="static-content">
                    <p>Understanding the musical tempo is often more helpful than reacting only to the visual arrows. Players who follow the beat closely usually maintain better timing during complex sections.</p>
                    <p>Helpful strategies include:</p>
                    <ul>
                        <li>Sync your movements with the celestial rhythm of the soundtrack</li>
                        <li>Ensure your fingers are hovering over the arrow controls at all times</li>
                        <li>Maintain your focus on timing as the cosmic tempo increases</li>
                    </ul>
                    <p>Practicing these habits can help improve performance in longer rhythm battles.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p>Several other mods also feature creative themes and energetic music.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Sprunki -->
                        <a href="/friday-night-sprunki/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(46, 204, 113, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/friday-night-sprunki.webp" alt="Sprunki" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">Friday Night Sprunki</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Brings a quirky character duel with energetic cartoon style.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #2ecc71; width: 18px;"></i>
                        </a>

                        <!-- Card 2: B-Sides -->
                        <a href="/fnf-b-sides/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-b-sides.webp" alt="B-Sides" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF B-Sides</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Remixes original tracks with vibrant colors and faster rhythms.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #9b59b6; width: 18px;"></i>
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

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF StarCatcher with Premium Visual Style');
