// import { useState } from "react";
// import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     toast({
//       title: "Message sent successfully!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });

//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "prajapatijay2111@gmail.com",
//       href: "mailto:prajapatijay2111@gmail.com",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 9313961645",
//       href: "tel:+919313961645",
//       color: "from-emerald-500 to-emerald-600"
//     },
//     {
//       icon: Phone,
//       label: "Alternative",
//       value: "+91 8735054801",
//       href: "tel:+918735054801",
//       color: "from-indigo-500 to-indigo-600"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Ahmedabad, Gujarat, India",
//       href: "#",
//       color: "from-purple-500 to-purple-600"
//     }
//   ];

//   return (
//     <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
//             Get In Touch
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 mx-auto mb-8 rounded-full"></div>
//           <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
//             Thank you for visiting my portfolio! I'm always open to discussing new opportunities,
//             technical challenges, and collaborations. Feel free to reach out.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Enhanced Contact Information */}
//           <div className="space-y-10">
//             <div>
//               <h3 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <a
//                     key={index}
//                     href={info.href}
//                     className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//                   >
//                     <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
//                       <info.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{info.label}</div>
//                       <div className="text-slate-800 font-bold text-lg">{info.value}</div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-600 p-10 rounded-3xl text-white shadow-2xl">
//               <div className="flex items-center space-x-4 mb-6">
//                 <User className="h-8 w-8" />
//                 <h4 className="text-2xl font-bold">Ready to Collaborate</h4>
//               </div>
//               <p className="text-blue-100 leading-relaxed mb-8 text-lg">
//                 I'm passionate about solving complex IT challenges and helping organizations
//                 optimize their technology infrastructure. Whether you need ongoing support
//                 or have a specific technical challenge, I'm here to help.
//               </p>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3 text-sm">
//                   <CheckCircle className="h-5 w-5 text-green-400" />
//                   <span>Available for new opportunities</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-sm">
//                   <CheckCircle className="h-5 w-5 text-green-400" />
//                   <span>Remote & on-site support available</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-sm">
//                   <CheckCircle className="h-5 w-5 text-green-400" />
//                   <span>Quick response guaranteed</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Contact Form */}
//           <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
//             <h3 className="text-3xl font-bold text-slate-800 mb-8">Send Me a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
//                     Full Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl p-4 text-lg"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl p-4 text-lg"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
//                   Subject
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl p-4 text-lg"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl p-4 text-lg"
//                   placeholder="Tell me about your project or question..."
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 hover:from-blue-700 hover:via-indigo-700 hover:to-slate-700 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl text-lg font-bold"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
//                     Sending Message...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-6 w-6 mr-3" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useToast } from '../hooks/use-toast'
import { sendContactForm } from '../../backend/services/api'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await sendContactForm(formData)

      if (response.success) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for reaching out. I'll get back to you soon.",
          type: 'success'
        })

        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast({
          title: 'Failed to send message',
          description: response.message,
          type: 'error'
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prajapatijay2111@gmail.com',
      href: 'mailto:prajapatijay2111@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9313961645',
      href: 'tel:+919313961645',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Phone,
      label: 'Alternative',
      value: '+91 8735054801',
      href: 'tel:+918735054801',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section
      id='contact'
      className='py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-6'>
            Get In Touch
          </h2>
          <div className='w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 mx-auto mb-8 rounded-full'></div>
          <p className='text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed'>
            Thank you for visiting my portfolio! I'm always open to discussing
            new opportunities, technical challenges, and collaborations. Feel
            free to reach out.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Enhanced Contact Information */}
          <div className='space-y-10'>
            <div>
              <h3 className='text-3xl font-bold text-slate-800 mb-8'>
                Contact Information
              </h3>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className='flex items-center space-x-6 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group'
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <info.icon className='h-8 w-8 text-white' />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-slate-500 uppercase tracking-wider'>
                        {info.label}
                      </div>
                      <div className='text-slate-800 font-bold text-lg'>
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-600 p-10 rounded-3xl text-white shadow-2xl'>
              <div className='flex items-center space-x-4 mb-6'>
                <User className='h-8 w-8' />
                <h4 className='text-2xl font-bold'>Ready to Collaborate</h4>
              </div>
              <p className='text-blue-100 leading-relaxed mb-8 text-lg'>
                I'm passionate about solving complex IT challenges and helping
                organizations optimize their technology infrastructure. Whether
                you need ongoing support or have a specific technical challenge,
                I'm here to help.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3 text-sm'>
                  <CheckCircle className='h-5 w-5 text-green-400' />
                  <span>Available for new opportunities</span>
                </div>
                <div className='flex items-center space-x-3 text-sm'>
                  <CheckCircle className='h-5 w-5 text-green-400' />
                  <span>Remote & on-site support available</span>
                </div>
                <div className='flex items-center space-x-3 text-sm'>
                  <CheckCircle className='h-5 w-5 text-green-400' />
                  <span>Quick response guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className='bg-white p-10 rounded-3xl shadow-xl border border-slate-100'>
            <h3 className='text-3xl font-bold text-slate-800 mb-8'>
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider'
                  >
                    Full Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    className='border-2 border-slate-200 focus:border-blue-500 placeholder:font-semibold focus:ring-blue-500 rounded-xl p-4 text-lg'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider'
                  >
                    Email Address
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    className='border-2 border-slate-200 focus:border-blue-500 placeholder:font-semibold focus:ring-blue-500 rounded-xl p-4 text-lg'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider'
                >
                  Subject
                </label>
                <Input
                  id='subject'
                  name='subject'
                  type='text'
                  value={formData.subject}
                  onChange={handleInputChange}
                  error={errors.subject}
                  className='border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl p-4 text-lg placeholder:font-semibold placeholder-gray-400'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  rows={6}
                  className='border-2 border-slate-200 focus:border-blue-500 placeholder:font-semibold placeholder:text-[15px] focus:ring-blue-500 rounded-xl p-4 text-lg'
                  placeholder='Tell me about your project or question...'
                />
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 hover:from-blue-700 hover:via-indigo-700 hover:to-slate-700 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl text-lg font-bold'
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3'></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className='h-6 w-6 mr-3' />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className='mt-10 text-center'>
              <p className='text-slate-700 text-md mb-3'>
                I appreciate you getting in touch! I'm here to assist you with
                any questions or support related to
                <span className='font-semibold'>
                  {' '}
                  Desktop Support, IT infrastructure, or technical assistance
                </span>
                .
              </p>
              <p className='text-slate-600 text-md mb-6'>
                Feel free to connect with me on my social media channels below:
              </p>

              <div className='flex justify-center space-x-6 text-2xl'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/jay-prajapati-18458b1b6/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>

                {/* Instagram */}
                <a
                  href='https://www.instagram.com/prajapatisahil2111?igsh=Ym94dXo0ZHR4ZGh2'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110'
                >
                  <i className='fab fa-instagram'></i>
                </a>

                {/* WhatsApp */}
                <a
                  href='https://wa.me/919313961645'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-600 hover:text-green-800 transition-transform transform hover:scale-110'
                >
                  <i className='fab fa-whatsapp'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
