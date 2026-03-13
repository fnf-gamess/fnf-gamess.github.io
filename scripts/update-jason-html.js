const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-vs-jason-voorhees-13th-friday-night-funk/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Vs. Jason Voorhees: 13th Friday Night Funk</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Enter a horror rhythm battle in FNF Vs. Jason Voorhees: 13th Friday Night Funk, where the legendary slasher becomes your opponent in intense musical showdowns.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Vs. Jason Voorhees: 13th Friday Night Funk">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Enter a horror rhythm battle in FNF Vs. Jason Voorhees: 13th Friday Night Funk, where the legendary slasher becomes your opponent in intense musical showdowns.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Enter a horror rhythm battle in FNF Vs. Jason Voorhees: 13th Friday Night Funk, where the legendary slasher becomes your opponent in intense musical showdowns."');

// 2. Replace the entire static card content
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="skull"></i> Game Overview</h2>
                <div class="static-content">
                    <p>FNF Vs. Jason Voorhees: 13th Friday Night Funk keeps the core rhythm mechanics of Friday Night Funkin’ while introducing a more suspenseful presentation. The eerie environment and haunting soundtrack make every battle feel intense from the first note to the last.</p>
                    <div class="table-container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="themed-table">
                            <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Main Opponent</strong></td>
                                    <td>Jason Voorhees</td>
                                </tr>
                                <tr>
                                    <td><strong>Theme</strong></td>
                                    <td>Horror Rhythm Battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Gameplay Style</strong></td>
                                    <td>Classic Friday Night Funkin mechanics</td>
                                </tr>
                                <tr>
                                    <td><strong>Difficulty</strong></td>
                                    <td>Moderate to Challenging</td>
                                </tr>
                                <tr>
                                    <td><strong>Visual Style</strong></td>
                                    <td>Dark atmosphere with horror-inspired stages</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title" style="font-size: 1.25rem;"><i data-lucide="layers"></i> What Makes This Mod Different</h3>
                <div class="static-content">
                    <p>This mod stands out because it merges rhythm gameplay with horror storytelling. Instead of comedic rivals, players confront a silent but intimidating opponent whose presence adds tension to every musical duel.</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Horror-inspired stage design and darker visuals</li>
                        <li style="margin-bottom:8px;">A crossover featuring the legendary slasher Jason Voorhees</li>
                        <li style="margin-bottom:8px;">Intense rhythm battles with dramatic music tracks</li>
                        <li style="margin-bottom:8px;">Atmosphere that blends suspense with musical gameplay</li>
                    </ul>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title" style="font-size: 1.25rem;"><i data-lucide="gamepad-2"></i> Controls</h3>
                <div class="static-content">
                    <p>Mastering the controls is essential if you want to defeat Jason in FNF Vs. Jason Voorhees: 13th Friday Night Funk. Timing and focus are the most important skills during the rhythm battles.</p>
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
                                    <td><strong>Slasher Keys</strong></td>
                                    <td>Match the direction of the notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Select menu options or pause</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Press Esc to exit the woods</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style="margin-top: 15px;">Keeping your timing accurate will help you maintain the health bar advantage during intense parts of the song.</p>
                </div>
            </section>
                    <p style="margin-top: 15px;">Keeping your timing accurate will help you maintain the health bar advantage during intense parts of the song.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title" style="font-size: 1.25rem;"><i data-lucide="lightbulb"></i> Gameplay Tips</h3>
                <div class="static-content">
                    <p>Focus on rhythm accuracy rather than just speed when facing Jason. The musical patterns may quicken as the battle progresses, but maintaining steady timing is more important than rapid key presses.</p>
                    <p>Watch the arrow patterns ahead of time to stay prepared. Anticipating the next sequence allows you to react smoothly instead of rushing your inputs. With enough practice, you can keep your combo alive even during the most challenging sections of the song.</p>
                </div>
            </section>
            
            <section class="static-section">
                <h3 class="static-section-title" style="font-size: 1.25rem;"><i data-lucide="help-circle"></i> FAQ</h3>
                <div class="static-content">
                    <div class="faq-item" style="margin-bottom: 15px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="font-size: 1.1rem; color: #fff; font-weight: bold; margin-bottom: 8px;">Is FNF Vs. Jason Voorhees: 13th Friday Night Funk difficult?</div>
                        <p style="margin: 0;">The mod can be challenging for beginners because some songs feature fast note patterns. However, players who are familiar with FNF gameplay will quickly adapt to the rhythm mechanics.</p>
                    </div>
                    <div class="faq-item" style="margin-bottom: 15px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="font-size: 1.1rem; color: #fff; font-weight: bold; margin-bottom: 8px;">Is the mod focused on horror elements?</div>
                        <p style="margin: 0;">Yes. The visuals and atmosphere are inspired by classic horror themes, giving the rhythm battles a darker tone compared to many other mods.</p>
                    </div>
                    <div class="faq-item" style="margin-bottom: 15px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="font-size: 1.1rem; color: #fff; font-weight: bold; margin-bottom: 8px;">Do I need to know the Friday the 13th movies to enjoy it?</div>
                        <p style="margin: 0;">Not at all. Even if you are not familiar with the movies, the mod is still enjoyable thanks to its engaging music and challenging gameplay.</p>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Suicide Mouse -->
                        <a href="/fnf-vs-suicide-mouse-remastered/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-suicide-mouse-remastered.webp" alt="Suicide Mouse" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Vs. Suicide Mouse</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Enter a black-and-white world of surreal and eerie cartoon rhythms.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Afton -->
                        <a href="/fnf-funkin-at-freddys-vs-afton/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(231, 76, 60, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-funkin-at-freddys-vs-afton.webp" alt="Afton" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF: Vs Afton</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Face off against the mechanical terror in this intense musical showdown.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #e74c3c; width: 18px;"></i>
                        </a>
                    </div>
                </div>
            </section>

            <div class="category-tags-section">
                <div class="category-pills">
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                    <a href="/horror.games/" class="category-pill">Horror</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for FNF Vs Jason Voorhees');
