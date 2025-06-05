
import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// import profile1 from '../../public/profile-1.jpg'
// import profile2 from '../../public/profile-2.jpg'
import profile3 from '../../public/profile-3.jpg'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden pt-5">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Enhanced Profile Photo */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-600 p-1.5 animate-scale-in shadow-2xl">
                <img
                  src={profile3}
                  alt="Jay Prajapati"
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-400 rounded-full border-4 border-white animate-pulse shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 leading-tight">
            JAY PRAJAPATI
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600">
              Desktop Support Engineer
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            Experienced Desktop Support Engineer specializing in technical assistance, 
            troubleshooting, and enterprise-wide software & hardware management
          </p>

          <div className="text-lg text-slate-500 mb-10 space-y-2">
            <p>📍 Ahmedabad, Gujarat</p>
            <p>📧 prajapatijay2111@gmail.com</p>
            <p>📱 +91 9313961645</p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 hover:from-blue-700 hover:via-indigo-700 hover:to-slate-700 text-white px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl text-lg font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-3 h-6 w-6" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100 px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg font-semibold"
              onClick={() => window.open('tel:+919313961645', '_blank')}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="mx-auto h-8 w-8 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
