const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../fnf-minus/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Title & Meta Tags
html = html.replace(/<title>.*?<\/title>/, '<title>FNF Minus – Iconic Visual Overhaul Rhythm Mod</title>');
html = html.replace(/<meta name="description"[\s\S]*?>/, '<meta name="description"\n        content="Experience the bold FNF Minus visual overhaul. Every character reimagined based on health bar icons in this stylish and popular Friday Night Funkin’ mod.">');

html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="FNF Minus – Iconic Visual Overhaul Rhythm Mod">');
html = html.replace(/<meta property="og:description"[\s\S]*?>/, '<meta property="og:description"\n        content="Experience the bold FNF Minus visual overhaul. Every character reimagined based on health bar icons in this stylish and popular Friday Night Funkin’ mod.">');

// Update schema description
html = html.replace(/"description":"[^"]+"/, '"description":"Experience the bold FNF Minus visual overhaul. Every character reimagined based on health bar icons in this stylish and popular Friday Night Funkin’ mod."');

// 2. Build the Content Layout
const newContent = `<div class="static-card" style="margin-top: 60px; margin-bottom: 60px;">
            <section class="static-section">
                <div class="static-content">
                    <p><strong>FNF Minus</strong> is one of the most beloved visual overhaul mods for Friday Night Funkin’. Created by LagoAnims, this mod reimagines the entire cast of characters, giving them a bold, stylized appearance inspired by their distinct in-game health bar icons. Instead of the traditional designs, you’ll face off against characters with vibrant, icon-inspired forms that stay true to their symbolic roots while offering a completely fresh aesthetic experience.</p>
                    <p>While the visual changes are extensive, the core rhythm-based gameplay that fans love remains untouched. The mod provides a unique artistic perspective on the FNF universe, making it a must-play for fans who appreciate creative character redesigns and a unified visual style that breathes new life into the classic weeks.</p>
                </div>
            </section>

            <section class="static-section">
                <h2 class="static-section-title"><i data-lucide="palette"></i> A Stylized Vision of the FNF Cast</h2>
                <div class="static-content">
                    <p>Each design in FNF Minus is directly influenced by the small character icons seen on the health bar. These redesigns aren't just simple color swaps; they are creative interpretations that use sharp lines and bold Colors to create a cohesive alternate universe. Whether it's the sleek blue Boyfriend or the pink-themed Girlfriend, every frame of the performance feels updated and modern.</p>
                    <ul>
                        <li>Redesigned characters based on iconic health bar symbols</li>
                        <li>Multiple playable versions of Boyfriend (Beta, Blue, and Mean)</li>
                        <li>Classic songs and weeks presented with a unified "Minus" aesthetic</li>
                    </ul>
                </div>
            </section>

            <section class="static-section">
                <h3 class="static-section-title"><i data-lucide="gamepad-2"></i> Mastering the Stylized Rhythm</h3>
                <div class="static-content">
                    <p>The control scheme remains faithful to the original, allowing you to focus on the energetic character animations and bold visual patterns that define the Minus world.</p>
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
                                    <td><strong>Icon Keys</strong></td>
                                    <td>Match the icon-inspired notes exactly on time</td>
                                </tr>
                                <tr>
                                    <td><strong>Enter</strong></td>
                                    <td>Begin your journey through the reimagined weeks</td>
                                </tr>
                                <tr>
                                    <td><strong>Escape</strong></td>
                                    <td>Return to the main menu and choose a new battle</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section class="static-section" style="border-bottom: none; padding-bottom: 0;">
                <h2 class="static-section-title"><i data-lucide="layout-grid"></i> More Stylized FNF Mods</h2>
                <div class="static-content">
                    <p>Expand your library with these other popular FNF mods, each offering a unique artistic overhaul or melodic twist.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
                        <!-- Card 1: Sarvente -->
                        <a href="/fnf-vs-minus-sarvente-mid-fight-masses-minus/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(52, 152, 219, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/fnf-vs-minus-sarvente-mid-fight-masses-minus.webp" alt="Sarvente" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">FNF vs Minus Sarvente</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Features a stylized icon-inspired remix of the Mid-Fight Masses mod.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #3498db; width: 18px;"></i>
                        </a>

                        <!-- Card 2: Neo -->
                        <a href="/friday-night-funkin-neo/" style="display: flex; align-items: center; gap: 15px; text-decoration: none; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 12px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='translateX(5px)'; this.style.background='rgba(0, 242, 254, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.background='rgba(255,255,255,0.03)'">
                            <img src="/assets/images/friday-night-funkin-neo.webp" alt="Neo" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover;">
                            <div style="flex: 1;">
                                <strong style="color: #fff; font-size: 1rem; display: block; margin-bottom: 2px;">Friday Night Funkin' Neo</strong>
                                <span style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.3; display: block;">Offers a complete visual and musical overhaul with vibrant neon styles.</span>
                            </div>
                            <i data-lucide="chevron-right" style="color: #00f2fe; width: 18px;"></i>
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

// Replace existing content wrapper or body content
html = html.replace(/<div class="static-card"[\s\S]*?<\/div>(\s*)<\/main>/, newContent + '$1</main>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated FNF Minus with Premium Visual Style');
