import logo from "../assets/c1.png";
import React from 'react'
import About from './About'
import Services from './Services'
import Internship from './Internship'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          {/* AICTE Approval Section */}
          <div className="mb-16 flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <img 
              src={logo} 
              alt="AICTE Approved" 
              className="h-24 w-24 transition-transform duration-300 hover:scale-110 rounded-full shadow-md border border-gray-300 p-2 bg-white"
            />
            <p className="text-lg font-medium text-gray-700 text-center md:text-left max-w-xl">
              <span className="block text-2xl font-bold text-blue-700 mb-2">
                AICTE Approved Program
              </span>
              Recognized by the All India Council for Technical Education
            </p>
          </div>

          {/* Main Content */}
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Web Development
              </span>
              <br /> Internship Program
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Launch your tech career with our AICTE-approved internship program. 
              Gain hands-on experience with modern web development tools while working 
              on real-world projects under expert mentorship.
            </p>

            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://cognifyz.com/internships/#google_vignette"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-4 px-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center group"
              >
                Learn More
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Components */}
      <section id="about" className="py-10 bg-blue-50">
        <About />
      </section>
      
      <section id="services" className="py-10 bg-gray-50">
        <Services />
      </section>

      <section id="internship" className=" bg-gray-50">
        <Internship />
      </section>

      <section id="contact" className="py-10 bg-blue-50">
        <Contact />
      </section>
    </div>
  );
};

export default Home;