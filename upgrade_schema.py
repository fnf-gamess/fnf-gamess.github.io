import os
import json
import re

root_dir = r"d:\game clone\fnf\fnf__antigravitygoc"

known_non_game_folders = ['', 'fnf-mods', 'search', 'hot-games', 'new-games', 'favorite-games', 
                            'about-us', 'contact-us', 'dmca', 'privacy-policy', 'terms-of-service',
                            'fnf-games.games', 'music.games', 'arcade.games', 'horror.games', 'rhythm.games']

html_files = []
for root, dirs, files in os.walk(root_dir):
    if 'node_modules' in root or '.git' in root or '.system_generated' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

def get_folder_name(filepath):
    rel = os.path.relpath(filepath, root_dir)
    dirname = os.path.dirname(rel)
    return dirname.replace('\\', '/')

for filepath in html_files:
    folder = get_folder_name(filepath)
    is_game = False
    if folder and '/' not in folder and folder not in known_non_game_folders:
        is_game = True

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find existing schema
    schema_pattern = r'<script\s+type=["\']application/ld\+json["\']>([\s\S]*?)</script>'
    match = re.search(schema_pattern, content)

    if match:
        try:
            schema_data = json.loads(match.group(1).strip())
            
            # Upgrade game pages
            if is_game and schema_data.get('@type') == 'WebSite':
                schema_data['@type'] = 'VideoGame'
                schema_data['applicationCategory'] = 'Game'
                schema_data['operatingSystem'] = 'WebBrowser'
                schema_data['genre'] = 'Rhythm Game'
                
                new_schema_str = json.dumps(schema_data, separators=(',', ':'))
                new_script = f'<script type="application/ld+json">{new_schema_str}</script>'
                content = content[:match.start()] + new_script + content[match.end():]
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Upgraded game schema in {folder}")

        except Exception as e:
            print(f"Error parsing json in {folder}: {e}")
    else:
        # Inject basic schema if missing
        title_match = re.search(r'<title.*?>(.*?)</title>', content, re.IGNORECASE)
        desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
        
        title = title_match.group(1) if title_match else 'FNF Games'
        desc = desc_match.group(1) if desc_match else ''
        
        # Determine specific type for categories/search
        schema_type = 'CollectionPage' if ('.games' in folder or folder in ['new-games', 'hot-games', 'favorite-games', 'fnf-mods']) else 'WebSite'
        if folder == 'search':
            schema_type = 'SearchResultsPage'
        
        # Build URL
        url_path = f"/{folder}/" if folder else "/"
        if folder == '': url_path = '/'
        if folder == '404': url_path = '/404'
            
        new_schema = {
            "@context": "https://schema.org",
            "@type": schema_type,
            "url": f"https://fnf-games.online{url_path}",
            "name": title,
            "description": desc
        }
        
        new_schema_str = json.dumps(new_schema, separators=(',', ':'))
        new_script = f'\n    <script type="application/ld+json">{new_schema_str}</script>'
        
        # Inject before </head>
        head_end = content.find('</head>')
        if head_end != -1:
            content = content[:head_end] + new_script + '\n' + content[head_end:]
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Injected new {schema_type} schema into {folder or 'root'}")

print("Done upgrading schemas.")
