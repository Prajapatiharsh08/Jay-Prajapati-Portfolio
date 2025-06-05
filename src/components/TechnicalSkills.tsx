import { Progress } from '@/components/ui/progress'
import { Monitor, Globe, Settings, Heart, Shield, Database } from 'lucide-react'

export const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Operating Systems & Hardware',
      icon: Monitor,
      color: 'from-blue-600 to-blue-700',
      skills: [
        { name: 'OS Installation & Configuration', level: 95 },
        { name: 'Hardware Troubleshooting', level: 92 },
        { name: 'Hardware Assembling', level: 88 },
        { name: 'System Performance Optimization', level: 85 }
      ]
    },
    {
      title: 'Networking & Infrastructure',
      icon: Globe,
      color: 'from-indigo-600 to-indigo-700',
      skills: [
        { name: 'Network & Server Management', level: 90 },
        { name: 'IP Addressing (Manual & Automatic)', level: 88 },
        { name: 'Network Troubleshooting', level: 85 },
        { name: 'VC (Virtual Control)', level: 80 }
      ]
    },
    {
      title: 'Software & Applications',
      icon: Settings,
      color: 'from-emerald-600 to-emerald-700',
      skills: [
        { name: 'Software Installation & Configuration', level: 95 },
        { name: 'O365 Installation (Outlook, Teams, etc.)', level: 92 },
        { name: 'Active Directory Knowledge', level: 88 },
        { name: 'ServiceNow Ticketing Tool', level: 85 }
      ]
    },
    {
      title: 'Support & Troubleshooting',
      icon: Shield,
      color: 'from-purple-600 to-purple-700',
      skills: [
        { name: 'Issue Resolution & Diagnosis', level: 95 },
        { name: 'Remote Troubleshooting', level: 90 },
        { name: 'Hardware Replacement', level: 88 },
        { name: 'User Training & Support', level: 92 }
      ]
    },
    {
      title: 'Technical Documentation',
      icon: Database,
      color: 'from-slate-600 to-slate-700',
      skills: [
        { name: 'Technical Documentation', level: 85 },
        { name: 'Equipment Installation & Maintenance', level: 90 },
        { name: 'Disaster Recovery Operations', level: 80 },
        { name: 'Data Backup Solutions', level: 82 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      color: 'from-rose-600 to-rose-700',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Customer Service', level: 93 },
        { name: 'Communication Skills', level: 90 },
        { name: 'Team Collaboration', level: 88 }
      ]
    }
  ]

  return (
    <section
      id='skills'
      className='py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
            Technical Skills
          </h2>
          <div className='w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 mx-auto mb-8 rounded-full'></div>
          <p className='text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed'>
            Comprehensive expertise across various technologies and platforms
            with proven track record
          </p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className='bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group'
            >
              <div className='flex items-center space-x-4 mb-8'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <category.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-slate-800 leading-tight'>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-6'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <ul className='list-disc list-inside'>
                        {' '}
                        <li>
                          <span className='text-slate-700 font-semibold text-sm'>
                            {skill.name}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
