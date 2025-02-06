import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {FaTools } from 'react-icons/fa';
const categories = [
  'Development', 'Data', 'Business',
  'Programming', 'Internet Of Things', 'Miscellaneous'
];

const internshipData = {
  Development: [
    { title: 'Software Development', category: 'Development', image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Web Development', category: 'Development', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Full Stack Development', category: 'Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Mobile App Development', category: 'Development', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Frontend Development', category: 'Development', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Backend Development', category: 'Development', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'DevOps Engineering', category: 'Development', image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Cloud Computing', category: 'Development', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ],
  Data: [
    { title: 'Data Science', category: 'Data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Machine Learning', category: 'Data', image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Data Engineering', category: 'Data', image: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Big Data Analytics', category: 'Data', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Data Visualization', category: 'Data', image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ],
  Business: [
    { title: 'Digital Marketing', category: 'Business', image: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Business Strategy', category: 'Business', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Financial Analysis', category: 'Business', image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Product Management', category: 'Business', image: 'https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Entrepreneurship', category: 'Business', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ],
  Programming: [
    { title: 'Java Development', category: 'Programming', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Python Development', category: 'Programming', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'JavaScript Development', category: 'Programming', image: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'C++ Programming', category: 'Programming', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Ruby on Rails', category: 'Programming', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Swift Development', category: 'Programming', image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Kotlin Development', category: 'Programming', image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ],
  'Internet Of Things': [
    { title: 'IoT Development', category: 'Internet Of Things', image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Embedded Systems', category: 'Internet Of Things', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Smart Home Devices', category: 'Internet Of Things', image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'IoT Security', category: 'Internet Of Things', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ],
  Miscellaneous: [
    { title: 'Technical Writing', category: 'Miscellaneous', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'UI/UX Design', category: 'Miscellaneous', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Cybersecurity', category: 'Miscellaneous', image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' },
    { title: 'Game Development', category: 'Miscellaneous', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300' }
  ]
};

const Internship = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Development');
  
  const redirectToGoogleForm = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScd5TRLHUVC8kle_6k4JceWTcfknRoNsuRB6Q4ymhGrAIsnSA/viewform',
      '_blank'
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Headline with Gradient and Shadow */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent 
          drop-shadow-2xl">
          Internship Opportunities
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all 
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid with Bottom-up Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipData[activeCategory]?.map((card, index) => (
            <div
              key={index}
              onClick={redirectToGoogleForm}
              className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient from bottom-middle to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <span className="inline-block px-4 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
                  {card.category}
                </span>
              </div>
            </div>
          ))}
          
        </div>

        {/* Qualifications Section */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg mt-16 mx-4 border-l-8 border-purple-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaTools className="text-purple-600 mr-3 text-4xl" />
            Qualifications: Desired Skills & Technologies
          </h2>
          <ul className="text-lg text-gray-700 space-y-3">
            <li>Basic understanding of programming (JavaScript, Python, Java).</li>
            <li>Familiarity with web development (HTML, CSS, React, Node.js).</li>
            <li>Knowledge of databases (MongoDB, MySQL, Firebase).</li>
            <li>Experience with UI/UX principles and design tools.</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Passion for learning and adaptability to new technologies.</li>
          </ul>
        </div>

        
        <div className="mt-15 bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={() => navigate('/checkintern')}
          className="px-8 py-3 rounded-full font-semibold text-lg
            bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
            text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Check My Internship
        </button>

        
      </div>
      </div>
     </div>
    </div>
  );
};

export default Internship;