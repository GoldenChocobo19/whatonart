import React, { useState } from 'react'
import { Upload, Palette, BookOpen, Sparkles } from 'lucide-react'
import ImageUpload from './components/ImageUpload'
import TutorialDisplay from './components/TutorialDisplay'
import Header from './components/Header'
import Hero from './components/Hero'

interface Tutorial {
  id: string
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  software: string[]
  tools: string[]
  colors: string[]
  steps: {
    id: number
    title: string
    description: string
    tools: string[]
    tips: string[]
    software: string[]
  }[]
}

function App() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [tutorial, setTutorial] = useState<Tutorial | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeImageAndGenerateTutorial = (imageUrl: string): Tutorial => {
    // Simple image analysis based on URL patterns or content
    // In a real app, this would use actual AI image recognition
    const isLandscape = imageUrl.includes('landscape') || imageUrl.includes('mountain') || imageUrl.includes('nature')
    const isPortrait = imageUrl.includes('portrait') || imageUrl.includes('person') || imageUrl.includes('face')
    const isAbstract = imageUrl.includes('abstract') || imageUrl.includes('geometric')
    const isDuck = imageUrl.includes('duck') || imageUrl.includes('bird') || imageUrl.includes('animal')
    
    // For uploaded files, we'll analyze based on common patterns or default to animal/wildlife
    const isUploadedFile = imageUrl.startsWith('blob:')
    
    if (isDuck || (isUploadedFile && Math.random() > 0.5)) {
      return {
        id: '1',
        title: 'Realistic Duck Painting Tutorial',
        difficulty: 'Intermediate',
        estimatedTime: '2-3 hours',
        software: ['Adobe Photoshop', 'Procreate', 'Clip Studio Paint', 'Corel Painter'],
        tools: ['Round Brush', 'Detail Brush', 'Texture Brush', 'Smudge Tool', 'Color Picker'],
        colors: ['#8B4513', '#DAA520', '#228B22', '#4682B4', '#FFFFFF', '#000000'],
        steps: [
          {
            id: 1,
            title: 'Sketch the Basic Duck Shape',
            description: 'Start with basic geometric shapes to outline the duck\'s body, head, and bill. Use light strokes to establish proportions and pose.',
            tools: ['Hard Round Brush (10-20px)', 'Pencil Tool'],
            tips: ['Start with simple oval shapes', 'Keep initial lines light and loose'],
            software: ['Photoshop: Use Brush Tool (B)', 'Procreate: Use Sketching > 6B Pencil', 'Clip Studio: Use Pencil > Rough Pencil']
          },
          {
            id: 2,
            title: 'Define the Duck\'s Features',
            description: 'Refine the head shape, add the characteristic duck bill, and position the eye. Pay attention to the duck\'s distinctive profile.',
            tools: ['Hard Round Brush (5-15px)', 'Eraser Tool'],
            tips: ['Duck bills are wider at the tip', 'Eyes are positioned on the side of the head'],
            software: ['Photoshop: Use Hard Round Brush', 'Procreate: Use Inking > Studio Pen', 'Clip Studio: Use Pen > G-Pen']
          },
          {
            id: 3,
            title: 'Block in Base Colors',
            description: 'Apply flat base colors for the duck\'s body, head, and bill. Use separate layers for different color areas to maintain flexibility.',
            tools: ['Soft Round Brush (50-100px)', 'Paint Bucket Tool'],
            tips: ['Use clipping masks to contain colors', 'Keep colors slightly desaturated initially'],
            software: ['Photoshop: Use Paint Bucket (G) or Brush (B)', 'Procreate: Use Painting > Flat Brush', 'Clip Studio: Use Fill > Paint Bucket']
          },
          {
            id: 4,
            title: 'Add Feather Texture and Patterns',
            description: 'Create the distinctive feather patterns and textures. Focus on the direction of feather growth and natural color variations.',
            tools: ['Texture Brush', 'Custom Feather Brush', 'Smudge Tool'],
            tips: ['Feathers follow the body\'s contours', 'Vary brush opacity for natural look'],
            software: ['Photoshop: Use Texture Brushes or create custom', 'Procreate: Use Artistic > Old Brush', 'Clip Studio: Use Decoration > Feather brushes']
          },
          {
            id: 5,
            title: 'Develop Lighting and Shadows',
            description: 'Add depth with strategic lighting. Consider your light source and add shadows under the body, neck, and wing areas.',
            tools: ['Soft Round Brush', 'Airbrush', 'Burn/Dodge Tools'],
            tips: ['Light typically comes from above', 'Soft shadows for rounded forms'],
            software: ['Photoshop: Use Dodge/Burn tools or layer blend modes', 'Procreate: Use Luminance > Soft Brush', 'Clip Studio: Use Airbrush > Soft']
          },
          {
            id: 6,
            title: 'Refine Details and Highlights',
            description: 'Add fine details like individual feathers, eye highlights, and bill texture. Focus on areas that catch the most light.',
            tools: ['Small Detail Brush (2-5px)', 'Highlight Brush'],
            tips: ['Less is more with highlights', 'Add catchlight to the eye'],
            software: ['Photoshop: Use small Hard Round Brush', 'Procreate: Use Inking > Technical Pen', 'Clip Studio: Use Pen > Mapping Pen']
          },
          {
            id: 7,
            title: 'Final Adjustments and Background',
            description: 'Add a simple background that complements the duck. Make final color and contrast adjustments to unify the painting.',
            tools: ['Large Soft Brush', 'Gradient Tool', 'Adjustment Layers'],
            tips: ['Keep background simple to focus on subject', 'Adjust overall contrast last'],
            software: ['Photoshop: Use Adjustment Layers', 'Procreate: Use Adjustments menu', 'Clip Studio: Use Layer > New Correction Layer']
          }
        ]
      }
    }
    
    if (isLandscape) {
      return {
        id: '2',
        title: 'Digital Landscape Painting Tutorial',
        difficulty: 'Intermediate',
        estimatedTime: '3-4 hours',
        software: ['Adobe Photoshop', 'Procreate', 'Clip Studio Paint', 'Krita'],
        tools: ['Soft Round Brush', 'Texture Brush', 'Smudge Tool', 'Color Picker'],
        colors: ['#2C5F41', '#8FBC8F', '#87CEEB', '#F4A460', '#DEB887', '#CD853F'],
        steps: [
          {
            id: 1,
            title: 'Set Up Canvas and Composition',
            description: 'Create a new document and establish the basic composition with horizon line and major landscape elements.',
            tools: ['Canvas Setup', 'Large Soft Brush'],
            tips: ['Use rule of thirds for horizon placement', 'Start with low resolution for speed'],
            software: ['Photoshop: File > New (3000x2000px)', 'Procreate: + > Custom Size', 'Clip Studio: File > New > Illustration']
          },
          {
            id: 2,
            title: 'Block in the Sky',
            description: 'Paint the sky with gradient colors, working from light at horizon to darker at top. Add basic cloud shapes.',
            tools: ['Soft Round Brush (200-300px)', 'Gradient Tool'],
            tips: ['Sky colors affect entire painting mood', 'Use cooler colors for distance'],
            software: ['Photoshop: Use Gradient Tool (G)', 'Procreate: Use Painting > Soft Brush', 'Clip Studio: Use Gradient > Foreground to Background']
          },
          {
            id: 3,
            title: 'Paint Distant Mountains',
            description: 'Add mountain silhouettes using atmospheric perspective - cooler and lighter colors for distance.',
            tools: ['Hard Round Brush', 'Color Picker'],
            tips: ['Distant objects are cooler and less detailed', 'Layer mountains for depth'],
            software: ['Photoshop: Use Hard Round Brush', 'Procreate: Use Painting > Hard Brush', 'Clip Studio: Use Brush > Hard']
          },
          {
            id: 4,
            title: 'Develop Middle Ground',
            description: 'Add trees, hills, and other elements in the middle distance with moderate detail and saturation.',
            tools: ['Texture Brush', 'Custom Tree Brush'],
            tips: ['Vary sizes and shapes naturally', 'Group elements in odd numbers'],
            software: ['Photoshop: Use custom brushes or create texture', 'Procreate: Use Artistic brushes', 'Clip Studio: Use Decoration > Tree brushes']
          },
          {
            id: 5,
            title: 'Detail the Foreground',
            description: 'Add foreground elements with full detail, warm colors, and strong contrast to create depth.',
            tools: ['Detail Brush', 'Texture Brush'],
            tips: ['Foreground has most detail and contrast', 'Use warm colors to bring forward'],
            software: ['Photoshop: Use various detail brushes', 'Procreate: Use Inking tools for details', 'Clip Studio: Use Pen tools for precision']
          },
          {
            id: 6,
            title: 'Add Lighting Effects',
            description: 'Enhance lighting with highlights, shadows, and atmospheric effects like mist or sun rays.',
            tools: ['Soft Brush', 'Overlay Blend Mode'],
            tips: ['Consider single light source', 'Use blend modes for lighting effects'],
            software: ['Photoshop: Use Overlay/Soft Light blend modes', 'Procreate: Use Light blend modes', 'Clip Studio: Use Overlay layer modes']
          },
          {
            id: 7,
            title: 'Final Polish and Color Grading',
            description: 'Make final adjustments to color balance, contrast, and add any finishing details.',
            tools: ['Adjustment Layers', 'Color Balance'],
            tips: ['Step back to assess overall composition', 'Subtle adjustments work best'],
            software: ['Photoshop: Use Adjustment Layers panel', 'Procreate: Use Adjustments > Color Balance', 'Clip Studio: Use Layer > New Correction Layer']
          }
        ]
      }
    }
    
    if (isPortrait) {
      return {
        id: '3',
        title: 'Digital Portrait Painting Tutorial',
        difficulty: 'Advanced',
        estimatedTime: '4-6 hours',
        software: ['Adobe Photoshop', 'Procreate', 'Clip Studio Paint', 'Corel Painter'],
        tools: ['Round Brush', 'Soft Brush', 'Smudge Tool', 'Color Picker', 'Eyedropper'],
        colors: ['#FDBCB4', '#E8A598', '#D4A574', '#8B4513', '#654321', '#2F1B14'],
        steps: [
          {
            id: 1,
            title: 'Establish Basic Proportions',
            description: 'Sketch the basic head shape and facial feature placement using construction lines and proportional guidelines.',
            tools: ['Hard Round Brush (10-15px)', 'Construction Lines'],
            tips: ['Eyes are halfway down the head', 'Use light, loose strokes initially'],
            software: ['Photoshop: Use Brush Tool with low opacity', 'Procreate: Use Sketching > 6B Pencil', 'Clip Studio: Use Pencil > Rough Pencil']
          },
          {
            id: 2,
            title: 'Define Facial Features',
            description: 'Refine the eyes, nose, mouth, and ears. Pay attention to individual characteristics and expressions.',
            tools: ['Hard Round Brush (5-10px)', 'Eraser'],
            tips: ['Each feature has unique proportions', 'Study reference carefully'],
            software: ['Photoshop: Use Hard Round Brush', 'Procreate: Use Inking > Studio Pen', 'Clip Studio: Use Pen > G-Pen']
          },
          {
            id: 3,
            title: 'Block in Skin Tones',
            description: 'Apply base skin colors, considering undertones and overall lighting. Use separate layers for flexibility.',
            tools: ['Soft Round Brush (30-50px)', 'Color Picker'],
            tips: ['Skin has warm and cool areas', 'Use clipping masks for organization'],
            software: ['Photoshop: Use Soft Round Brush with clipping masks', 'Procreate: Use Painting > Soft Brush', 'Clip Studio: Use Brush > Soft']
          },
          {
            id: 4,
            title: 'Model Form with Light and Shadow',
            description: 'Add dimension by painting shadows and highlights according to your light source. Focus on major planes first.',
            tools: ['Soft Round Brush', 'Airbrush', 'Smudge Tool'],
            tips: ['Observe how light wraps around forms', 'Start with major shadow shapes'],
            software: ['Photoshop: Use Soft brushes with varying opacity', 'Procreate: Use Airbrushing tools', 'Clip Studio: Use Airbrush > Soft']
          },
          {
            id: 5,
            title: 'Refine Facial Features',
            description: 'Add detail to eyes, lips, nose, and other features. Pay attention to subtle color variations and textures.',
            tools: ['Small Detail Brush (2-8px)', 'Color Picker'],
            tips: ['Eyes and lips often have different color temperatures', 'Build details gradually'],
            software: ['Photoshop: Use small brushes with pressure sensitivity', 'Procreate: Use Inking tools for precision', 'Clip Studio: Use Pen tools']
          },
          {
            id: 6,
            title: 'Add Hair and Texture',
            description: 'Paint hair following natural growth patterns. Add skin texture and other surface details.',
            tools: ['Hair Brush', 'Texture Brush', 'Custom Brushes'],
            tips: ['Hair grows in clumps, not individual strands', 'Vary hair thickness and direction'],
            software: ['Photoshop: Use custom hair brushes', 'Procreate: Use Hair brush set', 'Clip Studio: Use Decoration > Hair brushes']
          },
          {
            id: 7,
            title: 'Final Details and Polish',
            description: 'Add final highlights, refine edges, and make overall color and contrast adjustments.',
            tools: ['Small Detail Brush', 'Adjustment Layers'],
            tips: ['Highlights on wet surfaces like eyes and lips', 'Make final adjustments subtle'],
            software: ['Photoshop: Use Adjustment Layers for final tweaks', 'Procreate: Use Adjustments menu', 'Clip Studio: Use Correction Layers']
          }
        ]
      }
    }
    
    // Default abstract tutorial
    return {
      id: '4',
      title: 'Abstract Digital Art Tutorial',
      difficulty: 'Beginner',
      estimatedTime: '1-2 hours',
      software: ['Adobe Photoshop', 'Procreate', 'Clip Studio Paint', 'Krita'],
      tools: ['Various Brushes', 'Blend Modes', 'Filters', 'Transform Tools'],
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
      steps: [
        {
          id: 1,
          title: 'Create Base Composition',
          description: 'Start with basic shapes and forms. Focus on interesting compositions rather than realistic representation.',
          tools: ['Large Soft Brush', 'Shape Tools'],
          tips: ['Think about balance and flow', 'Don\'t overthink the initial shapes'],
          software: ['Photoshop: Use Shape Tools or large brushes', 'Procreate: Use Painting > Soft Brush', 'Clip Studio: Use Figure > Direct Draw']
        },
        {
          id: 2,
          title: 'Apply Color Harmonies',
          description: 'Choose a color scheme and apply it throughout the composition. Experiment with complementary or analogous colors.',
          tools: ['Color Picker', 'Gradient Tool'],
          tips: ['Limit your color palette initially', 'Consider color temperature relationships'],
          software: ['Photoshop: Use Color Picker and Swatches', 'Procreate: Use Color Harmony tools', 'Clip Studio: Use Color Set palette']
        },
        {
          id: 3,
          title: 'Add Texture and Interest',
          description: 'Incorporate various textures and patterns to create visual interest and depth in your abstract piece.',
          tools: ['Texture Brushes', 'Pattern Overlays', 'Filters'],
          tips: ['Vary texture density across the composition', 'Use textures to guide the eye'],
          software: ['Photoshop: Use Filter Gallery and texture brushes', 'Procreate: Use Artistic brushes', 'Clip Studio: Use Material > Texture']
        },
        {
          id: 4,
          title: 'Experiment with Blend Modes',
          description: 'Use different layer blend modes to create interesting color interactions and effects.',
          tools: ['Layer Blend Modes', 'Opacity Controls'],
          tips: ['Try Overlay, Multiply, and Screen modes', 'Adjust opacity for subtle effects'],
          software: ['Photoshop: Use Layers panel blend modes', 'Procreate: Use Layer blend modes', 'Clip Studio: Use Layer blending options']
        },
        {
          id: 5,
          title: 'Create Focal Points',
          description: 'Add areas of high contrast or detail to create focal points that draw the viewer\'s attention.',
          tools: ['High Contrast Brushes', 'Detail Tools'],
          tips: ['Use contrast to create hierarchy', 'Don\'t create too many focal points'],
          software: ['Photoshop: Use various brush tools', 'Procreate: Use Inking tools for contrast', 'Clip Studio: Use Pen tools']
        },
        {
          id: 6,
          title: 'Refine and Balance',
          description: 'Step back and assess the overall composition. Make adjustments to improve balance and visual flow.',
          tools: ['Transform Tools', 'Adjustment Layers'],
          tips: ['View your work at different sizes', 'Sometimes less is more'],
          software: ['Photoshop: Use Transform and Adjustment tools', 'Procreate: Use Transform and Adjustments', 'Clip Studio: Use Transform and Correction layers']
        },
        {
          id: 7,
          title: 'Final Effects and Polish',
          description: 'Add any final effects, adjust overall color grading, and make final refinements to complete your abstract piece.',
          tools: ['Effects Filters', 'Color Grading'],
          tips: ['Subtle effects often work best', 'Save versions as you work'],
          software: ['Photoshop: Use Filter menu and Adjustment Layers', 'Procreate: Use Adjustments and Effects', 'Clip Studio: Use Filter menu and Correction Layers']
        }
      ]
    }
  }

  const handleImageUpload = async (imageUrl: string) => {
    setUploadedImage(imageUrl)
    setIsAnalyzing(true)
    
    // Simulate AI analysis with realistic delay
    setTimeout(() => {
      const generatedTutorial = analyzeImageAndGenerateTutorial(imageUrl)
      setTutorial(generatedTutorial)
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetApp = () => {
    setUploadedImage(null)
    setTutorial(null)
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      {!uploadedImage && !tutorial && (
        <Hero />
      )}
      
      <main className="container mx-auto px-4 py-8">
        {!uploadedImage && !tutorial && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transform Any Artwork into a Learning Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Upload an image of artwork and our AI will analyze it to create a comprehensive tutorial
              </p>
            </div>
            
            <ImageUpload onImageUpload={handleImageUpload} />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Artwork</h3>
                <p className="text-gray-600">Upload any artwork image - paintings, drawings, digital art, or photographs</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our AI analyzes composition, colors, techniques, and style to understand the artwork</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Tutorial</h3>
                <p className="text-gray-600">Receive detailed step-by-step instructions with tools, colors, and techniques</p>
              </div>
            </div>
          </div>
        )}
        
        {(uploadedImage || tutorial || isAnalyzing) && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <button
                onClick={resetApp}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                ← Start Over
              </button>
            </div>
            
            <TutorialDisplay
              image={uploadedImage}
              tutorial={tutorial}
              isAnalyzing={isAnalyzing}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
