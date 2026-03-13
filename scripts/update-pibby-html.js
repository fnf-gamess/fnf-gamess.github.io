const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-darkness-takeover-vs-pibby-family-guy/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF: Darkness Takeover vs Pibby Family Guy – Glitchy Rhythm Battle</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Face the glitch corruption in FNF: Darkness Takeover vs Pibby Family Guy. Survival depends on your rhythm skills in this dark and intense musical showdown.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF: Darkness Takeover vs Pibby Family Guy – Glitchy Rhythm Battle">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Face the glitch corruption in FNF: Darkness Takeover vs Pibby Family Guy. Survival depends on your rhythm skills in this dark and intense musical showdown.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Face the glitch corruption in FNF: Darkness Takeover vs Pibby Family Guy. Survival depends on your rhythm skills in this dark and intense musical showdown."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF: Darkness Takeover vs Pibby Family Guy</strong> is a high-intensity rhythm mod that explores the haunting "Pibby" corruption theme. In this crossover, the world of Family Guy is overtaken by a dark, glitchy force, forcing characters like Stewie and Brian into a desperate musical duel for survival. The atmosphere is strikingly different from the lighthearted nature of the original show, leaning heavily into a tense and chaotic horror aesthetic.</p>
                    <p>The mod is widely known for its complex storytelling and high-quality artistic direction. The stages are filled with visual glitches and atmospheric effects that make the performance feel unpredictable. Every song in the soundtrack reflects this tension, pairing fast-paced rhythms with eerie melodies that keep players on edge.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="skull"></i> A Glitchy Descent into Chaos</h2>
                <div class="static-content">
                    <p>The primary appeal of FNF: Darkness Takeover vs Pibby Family Guy is its creative reimagining of familiar characters. By introducing the glitch corruption concept, the mod creates a visually stunning and unsettling contrast that makes every performance feel dramatic and high-stakes.</p>
                    <p>Features that define this corrupted crossover:</p>
                    <ul>
                        <li>Redesigned "corrupted" versions of Stewie and Brian Griffen</li>
                        <li>Intense and atmospheric stage designs filled with glitches</li>
                        <li>Custom music tracks specifically composed for a dark, frantic tone</li>
                    </ul>
                    <p>This artistic direction ensures that every note feels like a step deeper into the darkness taking over the world.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="activity"></i> Gameplay and Intensity</h2>
                <div class="static-content">
                    <p>Mechanically, the mod follows the classic FNF system but significantly ramps up the difficulty. Players must handle rapidly moving notes while dealing with visual distractions caused by the glitch effects.</p>
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
                                    <td><strong>Corrupted Graphics</strong></td>
                                    <td>Glitches and distortions that challenge your visual focus.</td>
                                </tr>
                                <tr>
                                    <td><strong>Fast Tempo</strong></td>
                                    <td>High-speed rhythm patterns requiring quick reactions.</td>
                                </tr>
                                <tr>
                                    <td><strong>Complex Patterns</strong></td>
                                    <td>Advanced note sequences that test timing and consistency.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Performance Controls</h3>
                <div class="static-content">
                    <p>The control scheme remains simple, allowing you to focus on the frantic rhythm patterns and character animations.</p>
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
                                    <td><strong>Corrupted Keys</strong></td>
                                    <td>Match the glitched notes exactly on time</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin the corrupted musical duel</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to exit the glitchy selection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Dark FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique dark or horror-themed twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Suicide Mouse -->
                        <a href="/fnf-vs-suicide-mouse-remastered/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-suicide-mouse-remastered.webp" alt="Suicide Mouse" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Suicide Mouse</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Delivers a black-and-white world of surreal and eerie cartoon rhythms.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Jason -->
                        <a href="/fnf-vs-jason-voorhees-13th-friday-night-funk/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-jason-voorhees-13th-friday-night-funk.webp" alt="Jason" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Jason Voorhees</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Enter a dark and suspenseful rhythm encounter inspired by horror films.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
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

// Replace existing content wrapper or body content
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF: Darkness Takeover vs Pibby Family Guy with Premium Visual Style');
