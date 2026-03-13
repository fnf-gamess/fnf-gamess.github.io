const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-elements-of-insanity-vs-my-little-pony/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Elements Of Insanity vs My Little Pony – Rhythm Battle Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Step into a colorful rhythm battle in FNF Elements Of Insanity vs My Little Pony. Match the beat, face unique characters, and enjoy creative music tracks.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Elements Of Insanity vs My Little Pony – Rhythm Battle Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Step into a colorful rhythm battle in FNF Elements Of Insanity vs My Little Pony. Match the beat, face unique characters, and enjoy creative music tracks.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Step into a colorful rhythm battle in FNF Elements Of Insanity vs My Little Pony. Match the beat, face unique characters, and enjoy creative music tracks."');

// 2. Replace the entire static card content
const newStaticCard = `<div class="static-card" style="margin-top: 40px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p>FNF Elements Of Insanity vs My Little Pony is a creative rhythm mod that blends the musical gameplay of Friday Night Funkin’ with characters inspired by the My Little Pony universe. The mod places players in a colorful and slightly chaotic musical showdown where every note must be hit in time with the beat. With vibrant visuals and energetic tracks, the game offers a rhythm experience that feels both playful and challenging.</p>
                    <p>The theme of the mod draws inspiration from the fan project “Elements of Insanity,” which reimagines familiar characters with exaggerated personalities and unpredictable energy. This concept fits surprisingly well with the fast-paced rhythm mechanics of Friday Night Funkin’, creating a musical battle that feels lively and unique.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="sparkles"></i> A Colorful and Unpredictable Rhythm Battle</h3>
                <div class="static-content">
                    <p>One of the main attractions of FNF Elements Of Insanity vs My Little Pony is its vibrant presentation. The characters bring expressive animations to the stage, and their movements often match the tempo of the music. As the battle progresses, the rhythm patterns gradually become more complex, requiring sharper timing and better focus.</p>
                    <p>Several elements make the gameplay particularly enjoyable:</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Bright character designs inspired by the My Little Pony style</li>
                        <li style="margin-bottom:8px;">Energetic rhythm tracks that keep the gameplay engaging</li>
                        <li style="margin-bottom:8px;">Dynamic note patterns that test reaction speed and timing</li>
                    </ul>
                    <p style="margin-top: 15px;">Because the music drives the entire experience, every successful streak of notes feels rewarding. The stronger your rhythm accuracy, the smoother the musical duel becomes.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="music"></i> Understanding the Gameplay Flow</h3>
                <div class="static-content">
                    <p>Like most Friday Night Funkin’ mods, the goal is to match incoming arrows with the correct keys. Notes appear on the screen in sync with the music, and players must press the matching direction as they reach the target markers. Missing too many notes can cause the performance meter to drop, which may result in losing the round.</p>
                    <p>Players who want to improve their performance should focus on the rhythm of the music rather than reacting only to visual cues. Listening to the beat makes it easier to anticipate upcoming note patterns and maintain accuracy during faster sections.</p>
                    <p>Keep the colorful performance going with these pro strategies:</p>
                    <ul style="color:var(--text-muted); padding-left:22px; margin-top:14px; margin-bottom:14px;">
                        <li style="margin-bottom:8px;">Sync with the vibrant pulse of the magical music tracks</li>
                        <li style="margin-bottom:8px;">Keep your reactions ready for sudden rhythm shifts</li>
                        <li style="margin-bottom:8px;">Ensure the momentum stays steady through the fastest segments</li>
                    </ul>
                    
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
                                    <td><strong>Sparkle Keys</strong></td>
                                    <td>Hit the matching notes</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Start or pause the battle</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Return to the main menu</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic or musical twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Gumballs -->
                        <a href="/fnf-gumballs/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-gumballs.webp" alt="Gumballs" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Gumballs</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Enjoy a playful rhythm experience with vibrant cartoon-inspired visuals.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: StarCatcher -->
                        <a href="/fnf-starcatcher/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-starcatcher.webp" alt="StarCatcher" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF StarCatcher</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Chase the rhythm among the stars in this magical musical adventure.</span>
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

// Replace existing static card
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>\s*<\/main>/, newStaticCard + '\n    </main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated HTML for FNF Elements Of Insanity vs My Little Pony');
