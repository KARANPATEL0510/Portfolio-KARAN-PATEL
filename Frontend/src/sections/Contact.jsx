import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pkaran0510@gmail.com',
      href: 'mailto:pkaran0510@gmail.com',
      color: 'text-cyber-cyan',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
      color: 'text-cyber-magenta',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/KARANPATEL0510',
      color: 'hover:text-cyber-cyan',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karan-patel-891763381/',
      color: 'hover:text-cyber-purple',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/__karanpatel__5/',
      color: 'hover:text-cyber-magenta',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log('Success:', data);
      
      setFormData({ name: '', email: '', message: '' });
      alert('✓ Message sent successfully! Your data has been saved to MongoDB.');
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error sending message. Make sure the backend server is running on port 4000.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life. I'm always open to new
            opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start justify-center max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            {/* Contact Cards */}
            {contactInfo.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-black bg-opacity-40 p-6 rounded-2xl border border-cyber-cyan border-opacity-40 hover:border-cyber-cyan hover:border-opacity-60 transition-all group hover-trigger"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-black bg-opacity-60 border border-cyan-300 border-opacity-60 group-hover:border-opacity-100 transition-all">
                      <Icon className={`${contact.color} transition-colors`} size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                      <p className="text-white font-semibold">{contact.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}



            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm font-semibold mb-4">Follow:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg bg-black bg-opacity-60 border border-cyber-cyan border-opacity-40 text-white ${social.color} transition-all hover-trigger`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-black bg-opacity-40 p-8 rounded-2xl border border-cyber-cyan border-opacity-40">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-cyber-cyan mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-60 border border-cyber-cyan border-opacity-40 focus:border-cyber-cyan focus:border-opacity-100 text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-opacity-30"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-cyber-cyan mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-60 border border-cyber-cyan border-opacity-40 focus:border-cyber-cyan focus:border-opacity-100 text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-opacity-30"
                    />
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-cyber-cyan mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-black bg-opacity-60 border border-cyber-cyan border-opacity-40 focus:border-cyber-cyan focus:border-opacity-100 text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-opacity-30 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-black font-semibold hover:shadow-lg hover:shadow-cyber-cyan/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover-trigger"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
