import React, { useCallback, useState, useRef } from 'react'
import { Upload, Image as ImageIcon, X } from 'lucide-react'

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }, [])

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      onImageUpload(url)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleAreaClick = () => {
    fileInputRef.current?.click()
  }

  const clearImage = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  if (previewUrl) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <img
            src={previewUrl}
            alt="Uploaded artwork"
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Artwork Uploaded Successfully!</h3>
            <p className="text-gray-600">Our AI is analyzing your artwork to create a personalized tutorial...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      
      <div
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 cursor-pointer ${
          dragActive
            ? 'border-purple-500 bg-purple-50'
            : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleAreaClick}
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Upload className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Upload Your Artwork
            </h3>
            <p className="text-gray-600 mb-4">
              Drag and drop an image here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports JPG, PNG, GIF up to 10MB
            </p>
          </div>
          
          <button 
            onClick={handleButtonClick}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Choose File
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-4">Or try with a sample image:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=150&h=100&fit=crop',
              label: 'Landscape'
            },
            {
              url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=100&fit=crop',
              label: 'Portrait'
            },
            {
              url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=150&h=100&fit=crop',
              label: 'Abstract'
            }
          ].map((sample, index) => (
            <button
              key={index}
              onClick={() => onImageUpload(sample.url)}
              className="group relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-purple-400 transition-colors"
            >
              <img
                src={sample.url}
                alt={sample.label}
                className="w-24 h-16 object-cover group-hover:scale-110 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1">
                <span className="text-white text-xs font-medium">{sample.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
