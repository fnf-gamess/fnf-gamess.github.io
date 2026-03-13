const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-gumballs/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Gumballs – Play the Cartoon Rhythm Battle Online</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Dive into FNF Gumballs, a fun Friday Night Funkin’ mod inspired by cartoon chaos. Follow the beat, hit the notes, and win the rhythm battle.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Gumballs – Play the Cartoon Rhythm Battle Online">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Dive into FNF Gumballs, a fun Friday Night Funkin’ mod inspired by cartoon chaos. Follow the beat, hit the notes, and win the rhythm battle.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Dive into FNF Gumballs, a fun Friday Night Funkin’ mod inspired by cartoon chaos. Follow the beat, hit the notes, and win the rhythm battle."');

// 2. Replace the entire static card content with a new layout pattern
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <!-- Hero Introduction Block -->
            <section class="static-section" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 30px;">
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <h2 style="font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 10px; background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb); -webkit-background-clip: text; color: transparent;">FNF Gumballs</h2>
                    <p style="font-size: 1.05rem; line-height: 1.7;"><strong>FNF Gumballs</strong> is a lively rhythm mod that blends the musical gameplay of Friday Night Funkin’ with the colorful energy of cartoon-style characters. The mod places players in a playful rap battle where timing, rhythm, and quick reactions determine the winner. Bright visuals and expressive animations help create a fun atmosphere that feels different from many darker or more intense FNF mods.</p>
                    <p style="font-size: 1.05rem; line-height: 1.7;">The charm of FNF Gumballs comes from its humorous style and energetic soundtrack. Each musical segment flows with a lively tempo, encouraging players to stay focused on the rhythm while keeping up with the incoming note patterns. As the song progresses, the challenge becomes more dynamic, requiring faster reactions and stronger timing accuracy.</p>
                    <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted);">Players who enjoy lighthearted FNF experiences often appreciate how FNF Gumballs turns a rhythm battle into something playful and entertaining while still maintaining the familiar gameplay mechanics of the original game.</p>
                </div>
            </section>

            <!-- Feature Split Section -->
            <section class="static-section" style="padding-top: 30px; border-bottom: none;">
                <div style="display: flex; flex-wrap: wrap; gap: 40px;">
                    
                    <!-- Left Column: Atmosphere & Mechanics -->
                    <div style="flex: 1; min-width: 300px;">
                        
                        <div style="margin-bottom: 40px;">
                            <h3 style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                                <span style="background: rgba(255, 107, 107, 0.2); padding: 8px; border-radius: 8px; display: inline-flex;"><i data-lucide="palette" style="color: #ff6b6b;"></i></span>
                                Cartoon Energy Meets Rhythm
                            </h3>
                            <p style="color: var(--text-muted); margin-bottom: 15px;">The visual style of FNF Gumballs stands out because of its cartoon-inspired design and expressive character animations. The stage feels bright and energetic, creating the impression that the entire rhythm battle is part of a chaotic animated performance.</p>
                            <div style="background: rgba(0,0,0,0.2); border-radius: 8px; padding: 15px;">
                                <p style="margin-bottom: 10px; font-weight: 600;">Features that make the mod enjoyable:</p>
                                <ul style="color: var(--text-muted); padding-left: 20px; margin: 0;">
                                    <li style="margin-bottom: 5px;">Colorful cartoon-inspired character designs</li>
                                    <li style="margin-bottom: 5px;">Energetic rhythm tracks that maintain a lively pace</li>
                                    <li style="margin-bottom: 5px;">Smooth animations that react to the beat</li>
                                </ul>
                            </div>
                            <p style="color: var(--text-muted); margin-top: 15px; font-size: 0.95rem;">This combination of music and visuals helps create an engaging rhythm experience. Each successful note streak keeps the musical flow strong, while missed notes can quickly disrupt the performance.</p>
                        </div>

                        <div>
                            <h3 style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                                <span style="background: rgba(72, 219, 251, 0.2); padding: 8px; border-radius: 8px; display: inline-flex;"><i data-lucide="activity" style="color: #48dbfb;"></i></span>
                                Core Rhythm Mechanics
                            </h3>
                            <p style="color: var(--text-muted); margin-bottom: 15px;">The gameplay in FNF Gumballs follows the traditional Friday Night Funkin’ formula. Notes move toward the target markers at the top of the screen, and players must press the correct directional keys at the right moment.</p>
                            <ul style="color: var(--text-muted); padding-left: 20px; list-style-type: square; margin-bottom: 15px;">
                                <li style="margin-bottom: 8px;">Matching arrows with the correct keyboard input</li>
                                <li style="margin-bottom: 8px;">Maintaining consistent rhythm accuracy</li>
                                <li style="margin-bottom: 8px;">Reacting quickly during faster musical sections</li>
                            </ul>
                            <p style="color: var(--text-muted); font-size: 0.95rem;">Learning the rhythm of the song often helps players anticipate incoming notes and maintain better timing throughout the battle.</p>
                        </div>

                    </div>

                    <!-- Right Column: Controls, Tips & Related -->
                    <div style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 30px;">
                        
                        <!-- Controls Table Widget -->
                        <div class="table-container">
                            <table class="themed-table">
                                <thead>
                                    <tr>
                                        <th>Control Key</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Chaos Keys</strong></td>
                                        <td>Direct the notes in this vibrant cartoon world</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Enter</strong></td>
                                        <td>Launch the musical chaos or pause the show</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Escape</strong></td>
                                        <td>Press Esc to exit the performance and return to menu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Tips Callout -->
                        <div style="background: linear-gradient(135deg, rgba(254, 202, 87, 0.1), transparent); border-left: 4px solid #feca57; padding: 20px; border-radius: 0 12px 12px 0;">
                            <h3 style="font-size: 1.2rem; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><i data-lucide="award" style="width: 18px; height: 18px;"></i> Tips for Better Performance</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 10px;">Mastering the cartoon-inspired beats requires a playful but focused approach to the musical flow.</p>
                            <ul style="color: var(--text-muted); padding-left: 20px; font-size: 0.9rem; margin: 0;">
                                <li style="margin-bottom: 6px;">Absorb the energy of the cartoon-inspired soundtrack</li>
                                <li style="margin-bottom: 6px;">Remain calm through the chaotic rhythm transitions</li>
                                <li style="margin-bottom: 6px;">Keep your performance steady as the tempo increases</li>
                            </ul>
                        </div>

                        <!-- Related Mods -->
                        <div>
                            <h3 style="font-size: 1.3rem; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;"><i data-lucide="layout-grid" style="color: var(--accent-blue);"></i> More FNF Mods</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px;">Other mods also offer creative rhythm battles with unique characters and music.</p>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <a href="/fnf-starcatcher/" style="display: block; padding: 12px 15px; background: rgba(0,0,0,0.2); border-radius: 8px; text-decoration: none; transition: background 0.2s;">
                                    <strong style="color: var(--accent-pink); display: block; margin-bottom: 4px;">FNF StarCatcher</strong>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Introduces magical visuals and energetic rhythm tracks.</span>
                                </a>
                                <a href="/fnf-vs-garcello/" style="display: block; padding: 12px 15px; background: rgba(0,0,0,0.2); border-radius: 8px; text-decoration: none; transition: background 0.2s;">
                                    <strong style="color: var(--accent-blue); display: block; margin-bottom: 4px;">FNF Vs. Garcello</strong>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Features memorable songs and emotional musical duels.</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div class="category-tags-section" style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                <div class="category-pills">
                    <a href="/music.games/" class="category-pill">Music</a>
                    <a href="/rhythm.games/" class="category-pill">Rhythm</a>
                    <a href="/arcade.games/" class="category-pill">Arcade</a>
                    <a href="/fnf-games.games/" class="category-pill">FNF Games</a>
                </div>
            </div>
        </div>`;

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for FNF Gumballs with a creative split layout');
