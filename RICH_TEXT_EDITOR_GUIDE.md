# 📝 Rich Text Editor Guide

## Overview

Rich Text Editor component untuk membuat dan mengedit pengumuman dengan formatting yang lengkap.

## Features

### ✨ Text Formatting
- **Bold** - Tebalkan teks
- **Italic** - Miringkan teks  
- **Underline** - Garis bawah teks

### 🎨 Highlight Colors
- **Yellow** - Kuning (default)
- **Green** - Hijau
- **Blue** - Biru
- **Pink** - Pink
- **Orange** - Orange
- **Purple** - Ungu
- **Red** - Merah
- **None** - Hapus highlight

## Cara Menggunakan

### 1. Format Teks

1. **Select/Blok** teks yang ingin diformat
2. **Click** tombol di toolbar:
   - **B** untuk Bold
   - **I** untuk Italic
   - **U** untuk Underline

**Keyboard Shortcuts:**
- `Ctrl+B` - Bold
- `Ctrl+I` - Italic
- `Ctrl+U` - Underline

### 2. Highlight Teks

1. **Select/Blok** teks yang ingin di-highlight
2. **Click** tombol "Highlight" di toolbar
3. **Pilih warna** dari color picker
4. Teks akan otomatis ter-highlight dengan warna yang dipilih

**Remove Highlight:**
1. Select teks yang sudah di-highlight
2. Click "Highlight" button
3. Click "Remove Highlight"

## Component Usage

```jsx
import RichTextEditor from '../components/RichTextEditor';

function MyComponent() {
  const [content, setContent] = useState('');

  return (
    <RichTextEditor
      content={content}
      onChange={(html) => setContent(html)}
    />
  );
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | HTML content to display |
| `onChange` | function | Yes | Callback when content changes |

## Toolbar Buttons

### Bold (B)
- Makes selected text **bold**
- Shortcut: `Ctrl+B`
- HTML: `<b>text</b>` or `<strong>text</strong>`

### Italic (I)
- Makes selected text *italic*
- Shortcut: `Ctrl+I`
- HTML: `<i>text</i>` or `<em>text</em>`

### Underline (U)
- Adds underline to selected text
- Shortcut: `Ctrl+U`
- HTML: `<u>text</u>`

### Highlight
- Opens color picker
- Applies background color to selected text
- Creates: `<span style="background-color: #color; color: #textColor; ...">text</span>`

## Color Options

### Yellow (Default)
```css
background: #fef08a
color: #854d0e
```
Perfect untuk: Important announcements, highlights

### Green
```css
background: #bbf7d0
color: #14532d
```
Perfect untuk: Success messages, positive info

### Blue
```css
background: #bfdbfe
color: #1e3a8a
```
Perfect untuk: Information, tips

### Pink
```css
background: #fbcfe8
color: #831843
```
Perfect untuk: Special offers, featured content

### Orange
```css
background: #fed7aa
color: #7c2d12
```
Perfect untuk: Warnings, important dates

### Purple
```css
background: #e9d5ff
color: #581c87
```
Perfect untuk: Premium content, VIP info

### Red
```css
background: #fecaca
color: #7f1d1d
```
Perfect untuk: Urgent, critical information

## Examples

### Basic Text Formatting

**Input:**
```
This is normal text.
This is bold text.
This is italic text.
This is underlined text.
```

**Actions:**
1. Select "bold" → Click B button
2. Select "italic" → Click I button
3. Select "underlined" → Click U button

**Output HTML:**
```html
This is normal text.
This is <b>bold</b> text.
This is <i>italic</i> text.
This is <u>underlined</u> text.
```

### Highlight Text

**Input:**
```
Promo spesial! Diskon 50% untuk semua produk!
```

**Actions:**
1. Select "Diskon 50%" 
2. Click "Highlight" button
3. Choose "Yellow" color

**Output HTML:**
```html
Promo spesial! <span style="background-color: #fef08a; color: #854d0e; padding: 0.125rem 0.5rem; border-radius: 0.375rem; font-weight: 600;">Diskon 50%</span> untuk semua produk!
```

**Visual Result:**
```
Promo spesial! [Diskon 50%] untuk semua produk!
                 ↑ yellow highlight
```

### Combined Formatting

**Input:**
```
PENTING: Maintenance server tanggal 15 Februari
```

**Actions:**
1. Select "PENTING" → Bold → Highlight Red
2. Select "15 Februari" → Underline → Highlight Yellow

**Output:**
```html
<span style="background-color: #fecaca; color: #7f1d1d; ..."><b>PENTING</b></span>: Maintenance server tanggal <span style="background-color: #fef08a; color: #854d0e; ..."><u>15 Februari</u></span>
```

## Technical Details

### Content Editable
Editor menggunakan `contentEditable` div untuk editing.

### Document.execCommand
Formatting menggunakan native browser API:
- `document.execCommand('bold')`
- `document.execCommand('italic')`
- `document.execCommand('underline')`

### Custom Highlight
Highlight menggunakan custom implementation:
1. Get selection range
2. Create `<span>` with inline styles
3. Replace selection with span
4. Trigger onChange callback

### HTML Output
Editor menghasilkan clean HTML yang bisa disimpan ke database dan ditampilkan dengan `dangerouslySetInnerHTML`.

## Styling

### CSS Classes
```css
/* Highlight spans */
span[style*="background-color"] {
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Bold text */
.prose strong, .prose b {
  font-weight: 700;
}

/* Italic text */
.prose em, .prose i {
  font-style: italic;
}

/* Underline text */
.prose u {
  text-decoration: underline;
}
```

## Best Practices

### 1. Keep It Simple
- Jangan over-format
- Gunakan highlight hanya untuk info penting
- Maksimal 2-3 warna per announcement

### 2. Color Consistency
- Yellow: General highlights
- Red: Urgent/Critical
- Green: Success/Positive
- Blue: Information

### 3. Accessibility
- Pastikan contrast ratio cukup
- Jangan hanya mengandalkan warna
- Gunakan bold untuk emphasis tambahan

### 4. Mobile Friendly
- Test di mobile device
- Pastikan highlight tidak terlalu panjang
- Line breaks yang baik

## Troubleshooting

### Formatting Tidak Apply

**Problem:** Click bold/italic tapi tidak berubah

**Solution:**
1. Pastikan teks ter-select
2. Focus di editor
3. Try keyboard shortcut

### Highlight Tidak Muncul

**Problem:** Click color tapi tidak ter-highlight

**Solution:**
1. Pastikan ada teks yang ter-select
2. Check console untuk errors
3. Refresh page

### HTML Tidak Tersimpan

**Problem:** Format hilang setelah save

**Solution:**
1. Check onChange callback
2. Verify database menyimpan HTML
3. Check sanitization di backend

## Browser Support

✅ Chrome/Edge (Chromium)
✅ Firefox
✅ Safari
⚠️ IE11 (limited support)

## Security

### XSS Prevention
- Backend harus sanitize HTML
- Whitelist allowed tags: `<b>`, `<i>`, `<u>`, `<span>`
- Whitelist allowed styles: `background-color`, `color`, `padding`, etc.

### Recommended Sanitization
```javascript
// Backend (Node.js with sanitize-html)
const sanitizeHtml = require('sanitize-html');

const clean = sanitizeHtml(html, {
  allowedTags: ['b', 'i', 'u', 'strong', 'em', 'span'],
  allowedAttributes: {
    'span': ['style']
  },
  allowedStyles: {
    '*': {
      'background-color': [/^#[0-9a-fA-F]{6}$/],
      'color': [/^#[0-9a-fA-F]{6}$/],
      'padding': [/^[\d.]+(rem|px)$/],
      'border-radius': [/^[\d.]+(rem|px)$/],
      'font-weight': [/^\d+$/]
    }
  }
});
```

## Future Enhancements

Possible improvements:
- [ ] Font size control
- [ ] Text alignment
- [ ] Lists (bullet/numbered)
- [ ] Links
- [ ] Undo/Redo
- [ ] Markdown support
- [ ] Preview mode

---

**Version**: 1.0.0
**Component**: RichTextEditor.jsx
**Status**: ✅ Production Ready
