
import { Calendar, MapPin, Building, CheckCircle, Star } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Desktop Support Engineer L1 & L2",
      company: "ITCONS-E Solutions Pvt LTD, Wipro (Adani Group Project)",
      location: "Gandhinagar, Ahmedabad",
      period: "December 2023 - March 2025",
      current: true,
      responsibilities: [
        "Address user tickets regarding hardware, software and networking issues",
        "Walk customers through installing applications and computer peripherals",
        "Ask targeted questions to diagnose problems and guide users with step-by-step instructions",
        "Conduct remote troubleshooting and test alternative pathways until issue resolution",
        "Customize desktop applications to meet user needs and record technical solutions",
        "Direct unresolved issues to next level support personnel and follow up with clients",
        "Help create technical documentation, manuals and train new employees",
        "Install and maintain equipment, software and perform system upgrades"
      ]
    },
    {
      title: "Desktop Support Engineer L1",
      company: "HKRP INNOVATIONS LLP",
      location: "Ahmedabad, Gujarat",
      period: "May 2023 - November 2023",
      current: false,
      responsibilities: [
        "Maintained and administered computer networks and related computing environments",
        "Performed disaster recovery operations and data backups when required",
        "Protected data, software and hardware by coordinating and implementing network security measures",
        "Troubleshot, diagnosed and resolved hardware, software and network system problems",
        "Replaced faulty network hardware components and maintained virus protection software",
        "Monitored network performance and coordinated computer network access for users"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-slate-50/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A proven track record of delivering exceptional IT support and driving technological improvements
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-600 hidden lg:block rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12"
              >
                {/* Enhanced Timeline dot */}
                <div className="hidden lg:flex absolute left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-xl z-10">
                  <Star className="w-4 h-4 text-white m-auto" />
                </div>

                {/* Enhanced Content */}
                <div className="flex-1 lg:ml-16">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-102">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-8">
                      <div className="mb-4 xl:mb-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 flex items-center flex-wrap gap-3">
                          {exp.title}
                          {/* {exp.current && (
                            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">
                              Current Position
                            </span>
                          )} */}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold text-lg mb-2">
                          <Building className="h-5 w-5 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col xl:items-end space-y-3">
                        <div className="flex items-center text-slate-600 bg-white px-4 py-2 rounded-full shadow-md">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-slate-600 bg-white px-4 py-2 rounded-full shadow-md">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 leading-relaxed font-medium">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
