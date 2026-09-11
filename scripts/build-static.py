#!/usr/bin/env python3
"""Stage the existing GitHub Pages site for a private Sites preview."""
from pathlib import Path
import shutil
root=Path(__file__).resolve().parent.parent
out=root/'dist'
if out.exists(): shutil.rmtree(out)
out.mkdir()
for path in root.iterdir():
    if path.is_file() and (path.suffix.lower() in {'.html','.css','.pdf','.docx','.tex'} or path.name in {'.nojekyll','LICENSE'}):
        shutil.copy2(path,out/path.name)
for folder in ['assets','images','posts']:
    shutil.copytree(root/folder,out/folder)
assert (out/'index.html').exists()
print('Static site staged successfully.')
