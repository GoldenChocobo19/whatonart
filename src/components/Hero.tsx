import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Learn to Create
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Any Artwork</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload any artwork and get AI-generated step-by-step tutorials with recommended software, tools, and color palettes to recreate it digitally.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop"
                alt="Digital painting example"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Digital Landscapes</h3>
                <p className="text-sm opacity-90">Learn atmospheric perspective</p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
                alt="Portrait painting example"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Character Art</h3>
                <p className="text-sm opacity-90">Master anatomy and lighting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
