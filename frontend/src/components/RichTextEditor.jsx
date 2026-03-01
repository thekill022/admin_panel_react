import { useEffect, useRef, useState } from 'react';
import { Bold, Italic, Underline, Highlighter, Eraser } from 'lucide-react';

const RichTextEditor = ({ content, onChange }) => {
    const editorRef = useRef(null);
    const [showColorPicker, setShowColorPicker] = useState(false);

    // Highlight color options (tanpa 'None' karena ada tombol remove terpisah)
    const highlightColors = [
        { name: 'Yellow', value: '#fef08a', textColor: '#854d0e' },
        { name: 'Green', value: '#bbf7d0', textColor: '#14532d' },
        { name: 'Blue', value: '#bfdbfe', textColor: '#1e3a8a' },
        { name: 'Pink', value: '#fbcfe8', textColor: '#831843' },
        { name: 'Orange', value: '#fed7aa', textColor: '#7c2d12' },
        { name: 'Purple', value: '#e9d5ff', textColor: '#581c87' },
        { name: 'Red', value: '#450303ff', textColor: '#e41010ff' },
    ];

    useEffect(() => {
        if (editorRef.current && content !== editorRef.current.innerHTML) {
            editorRef.current.innerHTML = content || '';
        }
    }, [content]);

    const handleInput = () => {
        if (onChange && editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        handleInput();
    };

    // Helper function untuk mencari parent span dengan background-color
    const findHighlightSpan = (node) => {
        let current = node;
        while (current && current !== editorRef.current) {
            if (current.nodeType === 1 && current.tagName === 'SPAN' && current.style.backgroundColor) {
                return current;
            }
            current = current.parentNode;
        }
        return null;
    };

    // Helper function untuk mencari parent font tag
    const findFontTag = (node) => {
        let current = node;
        while (current && current !== editorRef.current) {
            if (current.nodeType === 1 && current.tagName === 'FONT') {
                return current;
            }
            current = current.parentNode;
        }
        return null;
    };

    const applyHighlight = (bgColor, textColor) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        if (!selectedText) {
            // No text selected, check if cursor is inside a highlighted span
            const container = range.commonAncestorContainer;
            const existingSpan = findHighlightSpan(container);
            const existingFont = findFontTag(container);

            if (existingSpan) {
                // Update existing highlight color
                existingSpan.style.backgroundColor = bgColor;
                if (existingFont) {
                    existingFont.color = textColor;
                }
                setShowColorPicker(false);
                handleInput();
                editorRef.current?.focus();
                return;
            }
            return;
        }

        // Check if selection is inside an existing highlight span
        const container = range.commonAncestorContainer;
        const existingSpan = findHighlightSpan(container);
        const existingFont = findFontTag(container);

        if (existingSpan && existingSpan.textContent === selectedText) {
            // Selection matches the entire highlighted span, just update colors
            existingSpan.style.backgroundColor = bgColor;
            if (existingFont) {
                existingFont.color = textColor;
            } else {
                // Wrap span with font tag for text color
                const font = document.createElement('font');
                font.color = textColor;
                existingSpan.parentNode.insertBefore(font, existingSpan);
                font.appendChild(existingSpan);
            }
            selection.removeAllRanges();
            setShowColorPicker(false);
            handleInput();
            editorRef.current?.focus();
            return;
        }

        // Create new highlight with font wrapper for text color
        const font = document.createElement('font');
        font.color = textColor;

        const span = document.createElement('span');
        span.style.backgroundColor = bgColor;
        span.textContent = selectedText;

        font.appendChild(span);

        // Replace selection with highlighted span
        range.deleteContents();
        range.insertNode(font);

        // Clear selection
        selection.removeAllRanges();

        setShowColorPicker(false);
        handleInput();
        editorRef.current?.focus();
    };

    const removeHighlight = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;

        // Find the highlight span
        const span = findHighlightSpan(container);

        if (span) {
            const text = span.textContent;
            const textNode = document.createTextNode(text);

            // Check if span is wrapped in font tag
            const font = findFontTag(span);
            if (font && font.firstChild === span && font.childNodes.length === 1) {
                // Remove both font and span
                font.parentNode.replaceChild(textNode, font);
            } else {
                // Just remove span
                span.parentNode.replaceChild(textNode, span);
            }

            handleInput();
        }

        setShowColorPicker(false);
        editorRef.current?.focus();
    };

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-300 p-2 flex items-center gap-1 flex-wrap">
                {/* Bold */}
                <button
                    type="button"
                    onClick={() => execCommand('bold')}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Bold (Ctrl+B)"
                >
                    <Bold size={18} />
                </button>

                {/* Italic */}
                <button
                    type="button"
                    onClick={() => execCommand('italic')}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Italic (Ctrl+I)"
                >
                    <Italic size={18} />
                </button>

                {/* Underline */}
                <button
                    type="button"
                    onClick={() => execCommand('underline')}
                    className="p-2 hover:bg-gray-200 rounded transition-colors"
                    title="Underline (Ctrl+U)"
                >
                    <Underline size={18} />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1"></div>

                {/* Highlight Color Picker */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="p-2 hover:bg-gray-200 rounded transition-colors flex items-center gap-1"
                        title="Highlight Color"
                    >
                        <Highlighter size={18} />
                        <span className="text-xs font-medium">Highlight</span>
                    </button>

                    {showColorPicker && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-3 z-10 min-w-[280px]">
                            <p className="text-xs font-medium text-gray-700 mb-2">Select highlight color:</p>
                            <div className="grid grid-cols-4 gap-2">
                                {highlightColors.map((color) => (
                                    <button
                                        key={color.name}
                                        type="button"
                                        onClick={() => applyHighlight(color.value, color.textColor)}
                                        className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 transition-colors"
                                        title={color.name}
                                    >
                                        <div
                                            className="w-8 h-8 rounded border border-gray-300"
                                            style={{ backgroundColor: color.value }}
                                        ></div>
                                        <span className="text-xs text-gray-600">{color.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Remove Highlight Button */}
                <button
                    type="button"
                    onClick={removeHighlight}
                    className="p-2 hover:bg-red-100 rounded transition-colors flex items-center gap-1 text-red-600"
                    title="Remove Highlight"
                >
                    <Eraser size={18} />
                    <span className="text-xs font-medium">Unstabilo</span>
                </button>

                <div className="flex-1"></div>

                {/* Info */}
                <span className="text-xs text-gray-500">
                    Select text to format
                </span>
            </div>

            {/* Editor - Dark Mode */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                className="p-4 min-h-[150px] max-h-[400px] overflow-y-auto focus:outline-none bg-gray-800 text-gray-100"
                style={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word'
                }}
            />

            {/* Click outside to close color picker */}
            {showColorPicker && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setShowColorPicker(false)}
                />
            )}
        </div>
    );
};

export default RichTextEditor;
