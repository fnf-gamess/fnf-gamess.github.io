$files = Get-ChildItem -Path "d:\game clone\fnf\fnf__antigravity_gốc" -Filter "*.html" -Recurse

# 1. Replace og-image.jpg with fnf.png
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    if ($content -match "og-image\.jpg") {
        $content = $content -replace "og-image\.jpg", "fnf.png"
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($f.FullName, $content, $utf8NoBom)
        Write-Host "Updated og:image in $($f.FullName)"
    }
}

# 2. Update schema in index.html
$indexPath = "d:\game clone\fnf\fnf__antigravity_gốc\index.html"
$content = [System.IO.File]::ReadAllText($indexPath)
if ($content -notmatch '"image": "https://fnf-games.online/assets/images/fnf.png"') {
    $content = $content -replace '"name": "FNF",', '"name": "FNF",
      "image": "https://fnf-games.online/assets/images/fnf.png",'
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($indexPath, $content, $utf8NoBom)
    Write-Host "Updated schema in index.html"
}
