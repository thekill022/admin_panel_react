import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import api from '../utils/api';
import toast from 'react-hot-toast';

const ImageUpload = ({
    onUploadComplete,
    multiple = false,
    maxFiles = 10,
    existingImages = [],
    onRemoveExisting
}) => {
    const [uploading, setUploading] = useState(false);
    const [previews, setPreviews] = useState(existingImages);
    const fileInputRef = useRef(null);

    const handleFileSelect = async (e) => {
        const files = Array.from(e.target.files);

        if (!files.length) return;

        if (multiple && files.length > maxFiles) {
            toast.error(`Maximum ${maxFiles} files allowed`);
            return;
        }

        setUploading(true);

        try {
            const formData = new FormData();

            if (multiple) {
                files.forEach(file => {
                    formData.append('images', file);
                });
            } else {
                formData.append('image', files[0]);
            }

            const endpoint = multiple ? '/upload/multiple' : '/upload/single';
            const response = await api.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const uploadedUrls = multiple ? response.data.urls : [response.data.url];

            setPreviews(prev => [...prev, ...uploadedUrls]);

            if (onUploadComplete) {
                onUploadComplete(uploadedUrls);
            }

            toast.success('Image(s) uploaded successfully');
        } catch (error) {
            console.error('Upload error:', error);
            toast.error(error.response?.data?.error || 'Failed to upload image(s)');
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleRemove = async (url, index) => {
        try {
            // If it's an existing image, call the onRemoveExisting callback
            if (existingImages.includes(url) && onRemoveExisting) {
                await onRemoveExisting(url);
            }

            // Remove from previews
            setPreviews(prev => prev.filter((_, i) => i !== index));

            // Optionally delete from MinIO
            // await api.delete('/upload', { data: { url } });

            toast.success('Image removed');
        } catch (error) {
            console.error('Remove error:', error);
            toast.error('Failed to remove image');
        }
    };

    return (
        <div className="space-y-4">
            {/* Upload Button */}
            <div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple={multiple}
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={uploading}
                />

                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
                >
                    <Upload size={20} />
                    {uploading ? 'Uploading...' : multiple ? 'Upload Images' : 'Upload Image'}
                </button>

                {multiple && (
                    <p className="text-sm text-gray-500 mt-2">
                        Maximum {maxFiles} images. Click to select multiple files.
                    </p>
                )}
            </div>

            {/* Image Previews */}
            {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {previews.map((url, index) => (
                        <div key={index} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                <img
                                    src={url}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            {/* Remove Button */}
                            <button
                                type="button"
                                onClick={() => handleRemove(url, index)}
                                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                title="Remove image"
                            >
                                <X size={16} />
                            </button>

                            {/* Image Number */}
                            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black bg-opacity-60 text-white text-xs rounded">
                                #{index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {previews.length === 0 && (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <ImageIcon className="mx-auto text-gray-400 mb-2" size={48} />
                    <p className="text-gray-500">No images uploaded yet</p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
