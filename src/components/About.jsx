import aboutImage from "../assets/rocket-2.png";

const About = () => {
  return (
    <div className="min-h-screen ">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent py-10" style={{ textShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
  About Cognifyz Technologies
</h1>


      {/* Main Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 lg:p-16">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <img 
            src={aboutImage} 
            alt="Cognifyz Technologies" 
            className="w-full max-w-md rounded-xl shadow-2xl transform transition duration-500 hover:scale-[1.02] hover:shadow-3xl border-4 border-white/20"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-gray-800 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Innovate or Stagnate, <br className="hidden md:block" /> 
            <span className="whitespace-nowrap">Technology Waits</span> for No One
          </h2>
          
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-gray-700 relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-blue-500">
              Cognifyz Technologies delivers cutting-edge AI and ML solutions that transform businesses through intelligent automation and predictive analytics.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500">
              Our chatbot platform revolutionizes customer engagement across multiple channels, reducing response times by 70% while boosting satisfaction rates.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-purple-500">
              With real-time data processing capabilities, we empower enterprises to make confident, data-driven decisions at scale.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto mt-12 md:mt-16 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 lg:p-16 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-10 md:mb-12">
          Our Journey of Digital Transformation
        </h2>
        
        <div className="relative space-y-10 before:absolute before:left-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 before:rounded-lg">
          {[
            { 
              year: "2020", 
              title: "Launching New Horizons", 
              content: "Established with vision to redefine technology solutions through AI-driven innovation",
              color: "bg-blue-500"
            },
            { 
              year: "2021", 
              title: "Corporate Milestone", 
              content: "Officially incorporated as Cognifyz Technologies with expanded service offerings",
              color: "bg-indigo-500"
            },
            { 
              year: "2022", 
              title: "Strategic Expansion", 
              content: "Opened international offices and formed key industry partnerships",
              color: "bg-purple-500"
            },
            { 
              year: "2023", 
              title: "Accolades & Recognition", 
              content: "Recipient of 'Best AI Solution Provider' at Global Tech Awards",
              color: "bg-pink-500"
            }
          ].map((item, index) => (
            <div key={index} className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
              <div className={`absolute top-4 -ml-4 md:mx-0 h-8 w-8 rounded-full shadow-lg ${item.color} ${index % 2 === 0 ? 'md:right-0 md:left-auto md:-mr-9' : 'md:-ml-9'}`}></div>
              <div className={`p-6 rounded-xl bg-gradient-to-br from-white via-blue-50 to-white shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.year} — {item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;