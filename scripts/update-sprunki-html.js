const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../friday-night-sprunki/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>Friday Night Sprunki – Funky Rhythm Battle with Sprunki</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Jump into Friday Night Sprunki and face quirky characters in a lively rhythm showdown packed with catchy beats and colorful style.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="Friday Night Sprunki – Funky Rhythm Battle with Sprunki">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Jump into Friday Night Sprunki and face quirky characters in a lively rhythm showdown packed with catchy beats and colorful style.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Jump into Friday Night Sprunki and face quirky characters in a lively rhythm showdown packed with catchy beats and colorful style."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>Friday Night Sprunki</strong> is a fun and creative rhythm mod that introduces players to a quirky musical encounter inspired by the energetic style of the Sprunki universe. Instead of a typical rap battle with familiar FNF characters, the game presents a fresh opponent and playful stage atmosphere that immediately stands out.</p>
                    <p>In Friday Night Sprunki, the focus is on lively music and expressive animations. The stage design and character reactions give the performance a vibrant tone, making the rhythm duel feel more like a colorful show than a traditional battle. As the music progresses, players must keep up with increasingly fast note patterns while maintaining steady timing.</p>
                    <p>Many players enjoy Friday Night Sprunki because it delivers a lighthearted rhythm experience that feels energetic without becoming overwhelming. The mod emphasizes creativity and musical fun, making it accessible for both new and experienced FNF players.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="music"></i> A Quirky Musical Performance</h3>
                <div class="static-content">
                    <p>The atmosphere of Friday Night Sprunki is playful and energetic. Instead of a dramatic confrontation, the rhythm battle feels like a lively performance between characters who are fully engaged in the music.</p>
                    <p>Some elements that define the style of the mod include:</p>
                    <ul>
                        <li>Bright and expressive character animations</li>
                        <li>Catchy rhythm tracks that maintain a lively tempo</li>
                        <li>A colorful stage design that matches the upbeat theme</li>
                    </ul>
                    <p>These elements combine to create a musical showdown that feels entertaining from the very first beat.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="sparkles"></i> Gameplay Highlights</h3>
                <div class="static-content">
                    <p>While the presentation feels unique, the core gameplay remains familiar for fans of rhythm games. Players must follow the arrows appearing on the screen and press the corresponding keys in time with the music.</p>
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
                                    <td><strong>Note Timing</strong></td>
                                    <td>Press the correct key as arrows reach the target markers</td>
                                </tr>
                                <tr>
                                    <td><strong>Rhythm Accuracy</strong></td>
                                    <td>Maintaining the beat keeps the performance stable</td>
                                </tr>
                                <tr>
                                    <td><strong>Tempo Changes</strong></td>
                                    <td>Later parts of the song introduce faster note patterns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>This structure allows the rhythm challenge to grow gradually as the music builds intensity.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="keyboard"></i> Control Guide</h3>
                <div class="static-content">
                    <p>The control layout stays simple and easy to learn.</p>
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
                                    <td><strong>Funky Arrows</strong></td>
                                    <td>React to the playful notes descending on stage</td>
                                </tr>
                                <tr>
                                    <td><strong>Play/Pause</strong></td>
                                    <td>Use Enter to begin or halt the lively performance</td>
                                </tr>
                                <tr>
                                    <td><strong>Exit</strong></td>
                                    <td>Press Esc to leave the colorful show and return to the lobby</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>The familiar layout ensures you can jump straight into the stylish action without any learning curve.</p>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="zap"></i> Tips for Keeping the Beat</h3>
                <div class="static-content">
                    <p>Rhythm accuracy becomes easier when players pay attention to the musical flow rather than reacting only to visual cues. Listening to the soundtrack carefully can help anticipate upcoming note patterns.</p>
                    <p>Keep the energy high with these pro performance tips:</p>
                    <ul>
                        <li>Feel the vibrant pulse of the Sprunki-themed tracks</li>
                        <li>Ensure your hands are ready for sudden rhythm shifts</li>
                        <li>Maintain steady momentum through the fastest musical segments</li>
                    </ul>
                    <p>With enough practice, recognizing the rhythm patterns becomes much easier.</p>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h3 class="static-section-title"><i data-lucide="layout-grid"></i> More FNF Mods to Discover</h3>
                <div class="static-content">
                    <p>Several other mods also offer creative characters and fun rhythm battles.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Gumballs -->
                        <a href="/fnf-vs-amazing-world-of-gumball/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-amazing-world-of-gumball.webp" alt="Gumballs" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF Gumballs</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">A high-energy rhythm showdown with stylized animated characters.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: StarCatcher -->
                        <a href="/fnf-starcatcher/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(155, 89, 182, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-starcatcher.webp" alt="StarCatcher" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF StarCatcher</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Offers a whimsical rhythm adventure under a star-filled sky.</span>
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
console.log('Successfully updated Friday Night Sprunki with Premium Visual Style');
