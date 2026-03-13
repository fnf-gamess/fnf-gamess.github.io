const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../friday-night-funkin-neo/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>Friday Night Funkin\' Neo – Neon Style Rhythm Remix</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Experience Friday Night Funkin\' Neo with glowing visuals and remixed tracks. Follow the beat and challenge vibrant neon-style opponents.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="Friday Night Funkin\' Neo – Neon Style Rhythm Remix">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Experience Friday Night Funkin\' Neo with glowing visuals and remixed tracks. Follow the beat and challenge vibrant neon-style opponents.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Experience Friday Night Funkin\' Neo with glowing visuals and remixed tracks. Follow the beat and challenge vibrant neon-style opponents."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>Friday Night Funkin' Neo</strong> is a visually enhanced mod that reimagines the classic rhythm battles of Friday Night Funkin’ with a futuristic neon aesthetic. Instead of the familiar street-style environments, this version introduces glowing colors, redesigned characters, and remixed music tracks that give the game a completely new atmosphere.</p>
                    <p>In Friday Night Funkin' Neo, every stage feels brighter and more energetic thanks to its vibrant neon-inspired art style. Characters appear with bold color palettes and updated animations that make the musical performances feel fresh and modern. The rhythm gameplay remains familiar, but the visual presentation transforms the experience into something more dynamic.</p>
                    <p>Fans often enjoy Friday Night Funkin' Neo because it preserves the original rhythm mechanics while offering a unique artistic direction. The combination of remixed songs and glowing visuals gives players a fresh perspective on the classic FNF formula.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="palette"></i> Neon Visual Style and Music Remix</h2>
                <div class="static-content">
                    <p>One of the most recognizable aspects of Friday Night Funkin' Neo is its distinctive visual identity. Every character and stage has been redesigned with bright neon tones that stand out during gameplay.</p>
                    <p>Key elements that define the mod include:</p>
                    <ul>
                        <li>Neon-themed character designs with glowing color accents</li>
                        <li>Remixed versions of classic Friday Night Funkin’ songs</li>
                        <li>Updated stage visuals that enhance the musical performance</li>
                    </ul>
                    <p>These elements help create a rhythm experience that feels modern while still keeping the spirit of the original game.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay Overview</h2>
                <div class="static-content">
                    <p>The gameplay of Friday Night Funkin' Neo follows the same rhythm-based structure as the base game. Players must match directional arrows with the correct keys as they reach the target markers on the screen.</p>
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
                                    <td>Press the correct arrow keys in sync with the music</td>
                                </tr>
                                <tr>
                                    <td><strong>Performance Meter</strong></td>
                                    <td>Tracks rhythm accuracy during the battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Song Progression</strong></td>
                                    <td>Music sections gradually increase in difficulty</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The challenge grows as the tempo increases, requiring players to maintain steady timing and quick reactions.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="keyboard"></i> Controls and Game Inputs</h2>
                <div class="static-content">
                    <p>Although the visuals are redesigned, the control scheme remains simple and familiar.</p>
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
                                    <td><strong>Neon Arrows</strong></td>
                                    <td>Strike the glowing notes in sync with the beat</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter Key</strong></td>
                                    <td>Initiate the remixed performance or pause</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Navigate back to the neon-themed main menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>These straightforward controls allow players to focus entirely on the rhythm.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Mastering the Rhythm</h3>
                <div class="static-content">
                    <p>Success in Friday Night Funkin' Neo depends on maintaining consistent rhythm accuracy. Because the songs are remixed, some note patterns may feel slightly different compared to the original game.</p>
                    <p>Optimize your performance with these neon rhythm strategies:</p>
                    <ul>
                        <li>Match your key presses with the high-energy digital beats of the remixes</li>
                        <li>Hover your fingers over the direction arrows to stay ready for fast patterns</li>
                        <li>Keep a steady pace as the neon-infused difficulty ramps up</li>
                    </ul>
                    <p>Practicing these techniques helps players adapt to the remixed songs more easily.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> Other FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Several other mods also introduce creative visual themes and musical challenges.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: StarCatcher -->
                        <a href="/fnf-starcatcher/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-starcatcher.webp" alt="StarCatcher" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF StarCatcher</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features sparkling cosmic visuals and upbeat musical tracks.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #9b59b6; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Lit Up (Darnell Mix) -->
                        <a href="/fnf-darnell-s-mixtape/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-darnell-s-mixtape.webp" alt="Darnell Mixtape" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Lit Up (Darnell Mix)</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Follow the flow of urban beats in this stylish musical performance.</span>
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
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                </div>
            </div>
        </div>`;

// Replace existing static-card section
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated Friday Night Funkin\' Neo with Premium Visual Style');
