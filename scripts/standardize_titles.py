import os
import re

def standardize_titles():
    # Root directory is one level up from the scripts directory
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    # Files/Dirs to skip
    skip_dirs = {'.git', 'assets', 'scripts'}
    skip_files = {
        '404.html', 
        'privacy-policy/index.html', 
        'terms-of-service/index.html', 
        'dmca/index.html', 
        'about-us/index.html', 
        'contact-us/index.html'
    }
    
    updated_count = 0
    skipped_count = 0
    
    for root, dirs, files in os.walk(root_dir):
        # Skip specified directories
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if not file.endswith('.html'):
                continue
                
            file_path = os.path.join(root, file)
            # Use forward slashes for cross-platform matching
            rel_path = os.path.relpath(file_path, root_dir).replace('\\', '/')
            
            if rel_path in skip_files:
                print(f"Skipping system/legal page: {rel_path}")
                skipped_count += 1
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                print(f"Error reading {rel_path}: {e}")
                continue
                
            # 1. Try to find <h1 class="game-title"> (most specific)
            game_name = None
            match = re.search(r'<h1[^>]*class=["\']game-title["\'][^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
            if match:
                game_name = match.group(1)
            else:
                # 2. Try to find <h1> (for category/index pages)
                match = re.search(r'<h1>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
                if match:
                    game_name = match.group(1)
            
            if game_name:
                # Strip HTML tags from game_name (e.g., <i>, <span>, etc.)
                game_name = re.sub(r'<[^>]*>', '', game_name).strip()
                # Replace multiple whitespace/newlines with a single space
                game_name = re.sub(r'\s+', ' ', game_name)
                
                # Escape double quotes for meta tag content
                meta_game_name = game_name.replace('"', '&quot;')
                
                new_content = content
                
                # Update <title>
                new_content = re.sub(r'<title>.*?</title>', f'<title>{game_name}</title>', new_content, flags=re.DOTALL | re.IGNORECASE)
                
                # Update og:title
                new_content = re.sub(r'<meta property=["\']og:title["\'] content=["\'].*?["\']>', f'<meta property="og:title" content="{meta_game_name}">', new_content, flags=re.IGNORECASE)
                
                # Update twitter:title
                new_content = re.sub(r'<meta name=["\']twitter:title["\'] content=["\'].*?["\']>', f'<meta name="twitter:title" content="{meta_game_name}">', new_content, flags=re.IGNORECASE)

                if new_content != content:
                    try:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {rel_path} -> Title: '{game_name}'")
                        updated_count += 1
                    except Exception as e:
                        print(f"Error writing {rel_path}: {e}")
                else:
                    # print(f"No changes needed: {rel_path}")
                    pass
            else:
                print(f"Warning: No <h1> or game-title found in {rel_path}")

    print(f"\nStandardization complete.")
    print(f"Updated: {updated_count} files")
    print(f"Skipped: {skipped_count} files")

if __name__ == "__main__":
    standardize_titles()
