import React from 'react'
import { Clock, Star, Palette, Brush, Lightbulb, Monitor, Laptop } from 'lucide-react'

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

interface TutorialDisplayProps {
  image: string | null
  tutorial: Tutorial | null
  isAnalyzing: boolean
}

const TutorialDisplay: React.FC<TutorialDisplayProps> = ({ image, tutorial, isAnalyzing }) => {
  if (isAnalyzing) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 animate-pulse">
          <Palette className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Artwork</h2>
        <p className="text-gray-600 mb-8">Our AI is studying the composition, colors, and techniques...</p>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!tutorial || !image) return null

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Uploaded artwork"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                {tutorial.difficulty}
              </span>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{tutorial.estimatedTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{tutorial.title}</h1>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Monitor className="w-4 h-4 mr-2" />
                  Recommended Software
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tutorial.software.map((software, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {software}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Brush className="w-4 h-4 mr-2" />
                  Essential Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tutorial.tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Palette className="w-6 h-6 mr-3" />
          Color Palette
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {tutorial.colors.map((color, index) => (
            <div key={index} className="text-center">
              <div
                className="w-full h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm font-mono text-gray-600">{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tutorial Steps */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Step-by-Step Tutorial</h2>
        
        <div className="space-y-8">
          {tutorial.steps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < tutorial.steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
              )}
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Brush className="w-4 h-4 mr-2" />
                        Tools for this step
                      </h4>
                      <ul className="space-y-1">
                        {step.tools.map((tool, toolIndex) => (
                          <li key={toolIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Laptop className="w-4 h-4 mr-2" />
                        Software Instructions
                      </h4>
                      <ul className="space-y-1">
                        {step.software.map((instruction, softwareIndex) => (
                          <li key={softwareIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Pro Tips
                      </h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
        <p className="text-purple-100 mb-6">
          Follow this tutorial step-by-step and create your own masterpiece!
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Download Tutorial PDF
        </button>
      </div>
    </div>
  )
}

export default TutorialDisplay
