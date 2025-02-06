import { Link } from "react-router-dom"
import { FaLinkedinIn, FaYoutube, FaTelegram, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import logo from "../assets/cognifyz-1.png"

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Internship", path: "/internship" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const socialLinks = [
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cognifyz-techonologies/posts/?feedView=all" },
    { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCw3AbKUno4NQMWcPGFGOEZA" },
    { Icon: FaTelegram, href: "https://t.me/cognifyz_technologies" },
    { Icon: FaInstagram, href: "https://www.instagram.com/cognifyz_tech/" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Company Info Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6 rounded-full transform hover:scale-105 transition-transform duration-300">
              <img 
                src={logo || "/placeholder.svg"} 
                alt="Cognifyz Logo" 
                className="w-48 h-auto mx-auto rounded-lg bg-white lg:mx-0" 
              />
            </div>
            <p className="text-sm leading-relaxed text-center lg:text-left max-w-xs">
              Face challenges as opportunities, much like Cognifyz Technologies navigates innovation. 
              With determination and belief in your potential, every hurdle becomes a stepping stone to success.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-2xl font-semibold text-white mb-6">Quick Links</h4>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map(({ name, path }) => (
                  <li key={name}>
                    <Link 
                      to={path} 
                      className="hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all">↳</span>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-2xl font-semibold text-white mb-6">Contact Us</h4>
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="mr-3 text-emerald-400 flex-shrink-0" size={20} />
              <p className="text-sm hover:text-emerald-400 transition-colors">
                Nagpur, Maharashtra
              </p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="mr-3 text-emerald-400 flex-shrink-0" size={20} />
              <a 
                href="mailto:cognifyztechnologies@gmail.com" 
                className="text-sm hover:text-emerald-400 transition-colors break-all"
              >
                cognifyztechnologies@gmail.com
              </a>
            </div>
            <div className="flex space-x-5">
              {socialLinks.map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={26} className="hover:fill-current" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cognifyz Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer