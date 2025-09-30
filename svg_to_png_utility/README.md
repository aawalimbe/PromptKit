# PromptKit SVG to PNG Converter

Simple utility to convert SVG files to PNG files in each PromptKit directory.

## 🚀 Quick Start

### Windows (Double-click)
```
convert.bat
```

### Command Line
```bash
# Convert all SVG files
python convert_svgs.py

# Force regeneration of existing PNG files
python convert_svgs.py --force

# Set custom DPI
python convert_svgs.py --dpi 300
```

## 📁 What It Does

1. **Finds all SVG files** in directories 01-09
2. **Adds white backgrounds** for print optimization
3. **Converts to PNG** using ImageMagick (if available)
4. **Creates HTML files** for manual conversion (fallback)
5. **Saves PNG files** in the same directory as SVG files

## 🖨️ Output

PNG files are created alongside SVG files in each directory:
```
01-General/
├── general.svg
└── general.png  ← Generated

09-Content Writers/
├── content_writers.svg
└── content_writers.png  ← Generated
```

## 🔧 Methods

### Automatic (ImageMagick)
- Requires ImageMagick installation
- Fully automated conversion
- High quality output (300 DPI)

### Manual (Browser)
- No dependencies required
- Creates HTML files with instructions
- Uses browser save-as or online converters

## 📋 Requirements

- Python 3.6+
- ImageMagick (optional, for automatic conversion)

## 🎯 Features

- **White backgrounds** - Optimized for laser printers
- **300 DPI quality** - Professional print resolution
- **Batch processing** - Convert all files at once
- **Smart skipping** - Avoids regenerating existing files
- **Fallback method** - Works even without ImageMagick
- **Simple interface** - Single file solution

---

**Total Directories:** 9 (01-09)  
**Output:** PNG files with white backgrounds  
**Quality:** 300 DPI for professional printing
