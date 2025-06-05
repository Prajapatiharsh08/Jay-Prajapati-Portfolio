
import { User, Target, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about technology and committed to delivering exceptional IT support solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Background</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    I am a dedicated Desktop Support Engineer with comprehensive experience in technical assistance 
                    and troubleshooting. I specialize in resolving issues related to desktop computers, software applications, 
                    hardware peripherals, and network connectivity, ensuring smooth IT operations across enterprise environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">My Expertise</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    My expertise spans across hardware and software troubleshooting, OS installations, 
                    Active Directory management, and enterprise software solutions. I excel in providing 
                    step-by-step user guidance and implementing efficient technical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-600 p-10 rounded-3xl text-white shadow-2xl">
              <div className="flex items-center space-x-6 mb-8">
                <Coffee className="h-10 w-10" />
                <h3 className="text-3xl font-bold">Professional Highlights</h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-blue-100 text-lg">Current Role</span>
                  <span className="font-bold text-xl">Desktop Support Engineer L1 & L2</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-blue-100 text-lg">Education</span>
                  <span className="font-bold text-xl">M.Sc. Information Technology</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-blue-100 text-lg">Languages</span>
                  <span className="font-bold text-xl">English, Hindi, Gujarati</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-blue-100 text-lg">Specialization</span>
                  <span className="font-bold text-xl">Enterprise IT Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-lg">Location</span>
                  <span className="font-bold text-xl">Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
