import { FaChartLine, FaRobot, FaPlug, FaCode, FaMobileAlt, FaPalette, FaBullhorn, FaComments, FaShoppingCart, FaWordpress, FaCheckCircle, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { 
      title: 'Data & Analytics',
      subtitle: 'Uncover Insights, Drive Decisions.',
      icon: <FaChartLine />,
      color: 'text-blue-600',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      title: 'AI/ML Automation',
      subtitle: 'Transforming Futures through Precision.',
      icon: <FaRobot />,
      color: 'text-purple-600',
      hoverBg: 'hover:bg-purple-50'
    },
    {
      title: 'Internet of Things(IoT)',
      subtitle: 'Connecting Possibilities, Bridging Realities.',
      icon: <FaPlug />,
      color: 'text-green-600',
      hoverBg: 'hover:bg-green-50'
    },
    {
      title: 'Software Development',
      subtitle: 'Innovate Code, Inspire Solutions.',
      icon: <FaCode />,
      color: 'text-red-600',
      hoverBg: 'hover:bg-red-50'
    },
    {
      title: 'App Development',
      subtitle: 'Crafting Apps, Shaping Futures.',
      icon: <FaMobileAlt />,
      color: 'text-yellow-600',
      hoverBg: 'hover:bg-yellow-50'
    },
    {
      title: 'Graphic Designing',
      subtitle: 'Visualize Impact, Design Tomorrow.',
      icon: <FaPalette />,
      color: 'text-pink-600',
      hoverBg: 'hover:bg-pink-50'
    },
    {
      title: 'Digital Marketing',
      subtitle: 'Elevate Reach, Ignite Success.',
      icon: <FaBullhorn />,
      color: 'text-indigo-600',
      hoverBg: 'hover:bg-indigo-50'
    },
    {
      title: 'Consulting Services',
      subtitle: 'Guiding Growth, Powering Strategies.',
      icon: <FaComments />,
      color: 'text-teal-600',
      hoverBg: 'hover:bg-teal-50'
    },
    {
      title: 'E-commerce Solutions',
      subtitle: 'Elevate Commerce, Empower Growth.',
      icon: <FaShoppingCart />,
      color: 'text-orange-600',
      hoverBg: 'hover:bg-orange-50'
    },
    {
      title: 'WordPress Solutions',
      subtitle: 'Empowering Online Presence, WordPress Wonders.',
      icon: <FaWordpress />,
      color: 'text-cyan-600',
      hoverBg: 'hover:bg-cyan-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-black text-center mb-12 uppercase 
              bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent 
              font-sans tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]
              relative px-8 py-4 pb-8">
          SERVICES
        </h1>

        {/* Cognifyz Technologies Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 mx-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6
                          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Cognifyz Technologies offers you?
            </h2>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 
                         transform transition-all duration-300 hover:scale-105">
            <p className="text-xl italic text-gray-600 font-medium">
              "Face challenges as opportunities, much like Cognifyz Technologies navigates innovation. 
              With determination and belief in your potential, every hurdle becomes a stepping stone to success."
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
                        transition-all duration-300 hover:-translate-y-2 transform-gpu
                        ${service.hoverBg} border-b-4 border-transparent hover:border-current`}
            >
              <div className={`text-4xl mb-4 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.subtitle}
              </p>
              <Link 
                to="/internship" 
                className={`flex items-center font-semibold ${service.color} 
                          hover:${service.color}/80 transition-colors duration-300`}
              >
                Explore More
              </Link>
            </div>
          ))}
        </div>

          {/* Highlights Section */}
        <div className="mt-10 bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg shadow-lg  mx-4 border-l-8 border-green-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaCheckCircle className="text-green-600 mr-3 text-4xl" />
            Highlights: Benefits of the Internship
          </h2>
          <ul className="text-lg text-gray-700 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Gain real-world experience in industry-relevant projects.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Hands-on mentorship from experienced professionals.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Work on live projects to enhance practical skills.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Networking opportunities with industry leaders.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Certificate of completion and career opportunities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
