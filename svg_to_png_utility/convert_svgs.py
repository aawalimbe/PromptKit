#!/usr/bin/env python3
"""
PromptKit SVG to PNG Converter
Simple utility to convert SVG files to PNG in each directory

Usage:
    python convert_svgs.py
    python convert_svgs.py --force
    python convert_svgs.py --dpi 300
"""

import os
import sys
import subprocess
import tempfile
import webbrowser
from pathlib import Path
import argparse

def find_svg_files(root_dir):
    """Find all SVG files in directories 01-09."""
    svg_files = []
    
    # Look for directories 01 through 09
    for i in range(1, 10):
        dir_name = f"{i:02d}-*"  # 01-*, 02-*, etc.
        matching_dirs = list(Path(root_dir).glob(dir_name))
        
        for dir_path in matching_dirs:
            if dir_path.is_dir():
                # Look for SVG files in this directory and subdirectories
                for svg_file in dir_path.rglob("*.svg"):
                    svg_files.append(svg_file)
    
    return sorted(svg_files)

def modify_svg_for_white_background(svg_path):
    """Modify SVG content to have white background."""
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace light backgrounds with white
    content = content.replace('fill="#f8f9fa"', 'fill="white"')
    content = content.replace('fill="#ffffff"', 'fill="white"')
    
    # Add white background if none exists
    if '<rect' not in content[:500]:
        svg_start = content.find('<svg')
        if svg_start != -1:
            svg_tag_end = content.find('>', svg_start) + 1
            svg_tag = content[svg_start:svg_tag_end]
            
            # Extract dimensions
            import re
            width_match = re.search(r'width="([^"]+)"', svg_tag)
            height_match = re.search(r'height="([^"]+)"', svg_tag)
            
            width = width_match.group(1) if width_match else "800"
            height = height_match.group(1) if height_match else "600"
            
            # Add white background
            white_bg = f'<rect width="{width}" height="{height}" fill="white"/>'
            content = content[:svg_tag_end] + '\n  ' + white_bg + content[svg_tag_end:]
    
    return content

def convert_with_imagemagick(svg_content, png_path, dpi=300):
    """Convert SVG to PNG using ImageMagick."""
    try:
        # Create temporary SVG file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.svg', delete=False, encoding='utf-8') as temp_svg:
            temp_svg.write(svg_content)
            temp_svg_path = temp_svg.name
        
        # Convert using ImageMagick
        cmd = ['magick', temp_svg_path, '-density', str(dpi), '-background', 'white', '-flatten', str(png_path)]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        
        # Clean up
        os.unlink(temp_svg_path)
        
        return result.returncode == 0
    except Exception:
        return False

def convert_with_browser_method(svg_path, png_path):
    """Create HTML file for browser-based conversion."""
    svg_content = modify_svg_for_white_background(svg_path)
    
    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <title>SVG to PNG Conversion</title>
    <style>
        body {{ margin: 20px; font-family: Arial, sans-serif; background: white; }}
        .instructions {{ 
            background: #f0f8ff; 
            padding: 15px; 
            border: 1px solid #ccc; 
            margin-bottom: 20px; 
            border-radius: 5px; 
        }}
        svg {{ 
            max-width: 100%; 
            height: auto; 
            border: 1px solid #ddd; 
            background: white; 
        }}
    </style>
</head>
<body>
    <div class="instructions">
        <h3>📋 PNG Conversion Instructions</h3>
        <p><strong>File:</strong> {svg_path.name}</p>
        <p><strong>Target PNG:</strong> {png_path.name}</p>
        <ol>
            <li>Right-click on the SVG image below</li>
            <li>Select "Save image as..." or "Copy image"</li>
            <li>Choose PNG format</li>
            <li>Save as: <code>{png_path.name}</code></li>
            <li>Place in directory: <code>{svg_path.parent}</code></li>
        </ol>
        <p><strong>Or use online converter:</strong> <a href="https://convertio.co/svg-png/" target="_blank">convertio.co/svg-png</a></p>
    </div>
    {svg_content}
</body>
</html>"""
    
    # Save HTML file
    html_path = svg_path.with_suffix('.conversion.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    return html_path

def check_imagemagick():
    """Check if ImageMagick is available."""
    try:
        result = subprocess.run(['magick', '-version'], capture_output=True, text=True, timeout=5)
        return result.returncode == 0
    except (subprocess.TimeoutExpired, FileNotFoundError):
        return False

def main():
    parser = argparse.ArgumentParser(description="Convert SVG files to PNG in PromptKit directories")
    parser.add_argument("--force", "-f", action="store_true", help="Force regeneration of existing PNG files")
    parser.add_argument("--dpi", "-d", type=int, default=300, help="DPI for PNG output (default: 300)")
    parser.add_argument("--root", "-r", type=str, default="..", help="Root directory of PromptKit (default: ..)")
    
    args = parser.parse_args()
    
    root_dir = Path(args.root)
    
    print("PromptKit SVG to PNG Converter")
    print("=" * 40)
    print(f"Root directory: {root_dir.absolute()}")
    print(f"DPI: {args.dpi}")
    print(f"Force regeneration: {args.force}")
    print()
    
    # Find SVG files
    svg_files = find_svg_files(root_dir)
    
    if not svg_files:
        print("❌ No SVG files found in directories 01-09")
        return
    
    print(f"📁 Found {len(svg_files)} SVG files:")
    for svg_file in svg_files:
        print(f"   {svg_file.relative_to(root_dir)}")
    print()
    
    # Check ImageMagick availability
    imagemagick_available = check_imagemagick()
    print(f"🔧 ImageMagick available: {imagemagick_available}")
    print()
    
    # Convert files
    converted = 0
    skipped = 0
    failed = 0
    html_files = []
    
    for svg_file in svg_files:
        png_path = svg_file.with_suffix('.png')
        
        # Check if PNG already exists
        if png_path.exists() and not args.force:
            print(f"⏭️  Skipping {svg_file.name} (PNG already exists)")
            skipped += 1
            continue
        
        print(f"🔄 Converting: {svg_file.name}")
        
        # Modify SVG for white background
        svg_content = modify_svg_for_white_background(svg_file)
        
        # Try ImageMagick first
        if imagemagick_available:
            if convert_with_imagemagick(svg_content, png_path, args.dpi):
                print(f"✅ Converted: {svg_file.name} → {png_path.name} (ImageMagick)")
                converted += 1
                continue
        
        # Fallback to browser method
        html_path = convert_with_browser_method(svg_file, png_path)
        html_files.append(html_path)
        print(f"📄 Created conversion HTML: {html_path.name}")
        failed += 1
    
    # Print summary
    print("\n" + "=" * 50)
    print("CONVERSION SUMMARY")
    print("=" * 50)
    print(f"📊 Total files: {len(svg_files)}")
    print(f"✅ Converted: {converted}")
    print(f"⏭️  Skipped: {skipped}")
    print(f"📄 HTML files created: {failed}")
    
    if converted > 0:
        print(f"\n🎉 Successfully converted {converted} files to PNG!")
    
    if html_files:
        print(f"\n📋 Manual conversion needed for {len(html_files)} files:")
        for html_file in html_files:
            print(f"   {html_file.name}")
        
        print(f"\n💡 Next steps:")
        print("   1. Open the HTML files in your browser")
        print("   2. Right-click on the SVG and 'Save image as...' PNG format")
        print("   3. Or use online converter: https://convertio.co/svg-png/")
        print("   4. Place PNG files in their respective directories")
        
        # Open first HTML file as example
        if html_files:
            try:
                webbrowser.open(f"file://{html_files[0].absolute()}")
                print(f"\n🌐 Opened example file in browser: {html_files[0].name}")
            except Exception:
                print(f"\n📂 Open this file in browser: {html_files[0].absolute()}")

if __name__ == "__main__":
    main()
