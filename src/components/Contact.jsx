import { FaUser, FaEnvelope, FaPhone, FaVenusMars, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6 animate-fade-in-down">
            Contact Us
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Start Your Journey with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cognifyz Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where innovation meets your aspirations. Connect with us to initiate your plans and let's craft the future together!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 transform transition-all hover:shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Submit your details and let's begin shaping your vision into reality
            </h3>
            
            <form className="space-y-6">
              {/* Form Fields */}
              {[
                { icon: <FaUser />, type: "text", placeholder: "Full Name*" },
                { icon: <FaEnvelope />, type: "email", placeholder: "Email*" },
                { icon: <FaPhone />, type: "tel", placeholder: "Contact No.*" },
              ].map((field, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-purple-500 group-hover:text-purple-600 transition-colors">
                    {field.icon}
                  </div>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300"
                    required
                  />
                </div>
              ))}

              {/* Gender Select */}
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-purple-500">
                  <FaVenusMars />
                </div>
                <select
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 appearance-none"
                  required
                >
                  <option value="">Select Gender*</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <textarea
                placeholder="Your Query*"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 resize-none"
                rows="5"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit Now
                <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;