import { useEffect, useRef, useState } from 'react';
import { Bold, Italic, Underline, Highlighter } from 'lucide-react';

const RichTextEditor = ({ content, onChange }) => {
    const editorRef = useRef(null);
    const [showColorPicker, setShowColorPicker] = useState(false);

    // Highlight color options
    const highlightColors = [
        { name: 'Yellow', value: '#fef08a', textColor: '#854d0e' },
        { name: 'Green', value: '#bbf7d0', textColor: '#14532d' },
        { name: 'Blue', value: '#bfdbfe', textColor: '#1e3a8a' },
        { name: 'Pink', value: '#fbcfe8', textColor: '#831843' },
        { name: 'Orange', value: '#fed7aa', textColor: '#7c2d12' },
        { name: 'Purple', value: '#e9d5ff', textColor: '#581c87' },
        { name: 'Red', value: '#fecaca', textColor: '#7f1d1d' },
        { name: 'None', value: 'transparent', textColor: 'inherit' },
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

    const applyHighlight = (bgColor, textColor) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        if (!selectedText) return;

        // Create span with highlight
        const span = document.createElement('span');
        span.style.backgroundColor = bgColor;
        span.style.color = textColor;
        span.style.padding = '0.25rem 0.75rem';
        span.style.borderRadius = '0.5rem';
        span.style.fontWeight = '600';
        span.textContent = selectedText;

        // Replace selection with highlighted span
        range.deleteContents();
        range.insertNode(span);

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

        // If the selection is inside a span, remove the span
        let span = container.nodeType === 3 ? container.parentElement : container;

        if (span.tagName === 'SPAN' && span.style.backgroundColor) {
            const text = document.createTextNode(span.textContent);
            span.parentNode.replaceChild(text, span);
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
                            <div className="mt-3 pt-3 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={removeHighlight}
                                    className="w-full text-xs text-red-600 hover:bg-red-50 py-2 rounded transition-colors"
                                >
                                    Remove Highlight
                                </button>
                            </div>
                        </div>
                    )}
                </div>

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
