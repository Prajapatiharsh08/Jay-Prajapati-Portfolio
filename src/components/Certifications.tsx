
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA A+",
      issuer: "CompTIA",
      date: "2023",
      status: "Current",
      description: "Comprehensive IT foundational skills certification covering hardware, software, networking, and security.",
      color: "from-blue-500 to-blue-600",
      logo: "🏆"
    },
    {
      name: "Microsoft 365 Certified: Modern Desktop Administrator Associate",
      issuer: "Microsoft",
      date: "2023",
      status: "Current",
      description: "Expertise in deploying, configuring, and maintaining Windows 10/11 and Microsoft 365 services.",
      color: "from-emerald-500 to-emerald-600",
      logo: "📋"
    },
    {
      name: "ITIL Foundation",
      issuer: "Axelos",
      date: "2022",
      status: "Current",
      description: "IT service management best practices and frameworks for delivering quality IT services.",
      color: "from-purple-500 to-purple-600",
      logo: "⚙️"
    },
    {
      name: "CCNA (In Progress)",
      issuer: "Cisco",
      date: "Expected 2024",
      status: "In Progress",
      description: "Comprehensive networking fundamentals including routing, switching, and network security.",
      color: "from-orange-500 to-orange-600",
      logo: "🌐"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Committed to continuous learning and professional development in IT
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {cert.logo}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        cert.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                {cert.name}
              </h3>
              
              <div className="flex items-center space-x-4 mb-4 text-slate-600">
                <span className="font-semibold text-blue-600">{cert.issuer}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {cert.description}
              </p>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Training Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-slate-600">Online Courses Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-slate-600">Training Hours This Year</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-slate-600">Active Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
