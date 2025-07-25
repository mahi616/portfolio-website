import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8wgppym',    // replace with your EmailJS service ID
      'template_hga5zor',   // replace with your EmailJS template ID
      formRef.current,
      'mMfVVHUxiQUebs5Lf'  // replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Email send error:', err);
      alert('Something went wrong. Please try again.');
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mohitjodhe@gmail.com',
      href: 'mailto:mohitjodhe@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 *******2511',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagpur, Maharashtra',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 transition-colors duration-300 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-lg leading-relaxed mb-8 text-gray-400">
                I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-700 text-gray-300 hover:text-white"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600 text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">
                        {info.title}
                      </p>
                      <p className="font-semibold text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gray-900 shadow-gray-900/50 shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
