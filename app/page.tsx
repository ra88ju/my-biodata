"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* =============================== */}
      {/*         HEADER SECTION          */}
      {/* =============================== */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 mx-4 mt-4 rounded-full shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MD.SHAJIB ISLAM
              </span>
            </div>

            {/* Navigation Menu and Mobile Button */}
            <div className="flex items-center space-x-4 md:space-x-8">
              {/* Desktop Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </a>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Skills
                </a>
                <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Education
                </a>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 rounded-b-3xl shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Home</a>
              <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Skills</a>
              <a href="#education" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Education</a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Projects</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">

        {/* =============================== */}
        {/*          HERO SECTION           */}
        {/* =============================== */}
        <section id="home" className=" items-center justify-center min-h-screen ">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder-hero-background.jpg" // Replace with your background image path
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="filter grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
          </div>

          {/* Content */}
          <div className="relative z-10 mt-10 text-center text-white flex flex-col items-center">
           
            <h1 className="text-5xl md:text-7xl font-bold mb-4">I'm a Developer & Designer</h1>
            <p className="text-xl md:text-2xl mb-8">
              Full Stack Developer | UI/UX Designer | Sales Executive
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex justify-center gap-4">
              <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">MY WORK</a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">HIRE ME</a>
            </div>
            

            {/* Profile Picture Placeholder (Right side) */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-8">
               {/* You can add your Image component here */}
               {/* <Image src="/shajib.jpg" alt="Your Name" width={300} height={400} className="rounded-lg shadow-xl" /> */}
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/*         SKILLS SECTION          */}
        {/* =============================== */}
        <section id="skills" className="container  px-10 py-0 bg-black rounded-x7 dark:bg-black">
          <h2 className="text-3xl font-bold text-center text-white mb-10 ">Professional Skills</h2>
          <div className="grid grid-cols-1 bg-white dark:bg-black md:grid-cols-3 gap-8">
            {/* NestJS Developer Card */}
            <motion.div
              className="bg-white dark:bg-white-800 text-black rounded-xl  p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-xl font-bold mb-3">NestJS Developer</h3>
              <p className="text-gray-600 dark:text-black-300">
                Expert in building scalable backend applications using NestJS framework.
                Specialized in RESTful APIs, microservices architecture, and database optimization.
              </p>
            </motion.div>

            {/* Figma Designer Card */}
            <motion.div
              className="bg-white dark:bg-white-800 text-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-pulse">🎨</div>
              <h3 className="text-xl font-bold mb-3">Figma Designer</h3>
              <p className="text-gray-600 dark:text-black-300">
                Creating beautiful and intuitive user interfaces using Figma.
                Experienced in wireframing, prototyping, and design systems.
              </p>
            </motion.div>

            {/* Sales Executive Card */}
            <motion.div
              className="bg-white dark:bg-white-800 text-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-spin-slow">💼</div>
              <h3 className="text-xl font-bold mb-3">Academy Pro Sales Executive</h3>
              <p className="text-gray-600 dark:text-black-300">
                Leading sales initiatives and driving business growth.
                Expert in client relationship management and strategic planning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =============================== */}
        {/*        EDUCATION SECTION        */}
        {/* =============================== */}
        <section id="education" className="container mx-auto px-4 py-16 bg-black dark:bg-black">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Entry 1 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">BSc in Computer Science and Engineering</h3>
              <p className="text-gray-400 mb-1">Varendra University</p>
              <p className="text-gray-400 text-sm">2023 - Present</p>
            </motion.div>
            {/* Education Entry 2 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">HSC in Science</h3>
              <p className="text-gray-400 mb-1">Natore Govt. College</p>
              <p className="text-gray-400 text-sm">2020 - 2022</p>
            </motion.div>
            {/* Education Entry 3 */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2 text-white">SSC in Science</h3>
              <p className="text-gray-400 mb-1">Natore Govt. High School</p>
              <p className="text-gray-400 text-sm">2018 - 2020</p>
            </motion.div>

            {/* Add more education entries as needed */}
          </div>
        </section>

        {/* =============================== */}
        {/*        PROJECTS SECTION        */}
        {/* =============================== */}
        <section id="projects" className="container mx-auto px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my latest work and innovative solutions that showcase my expertise in full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Academy Pro Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Academy Pro</h3>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Full Stack</span>
                </div>
                <p className="text-gray-400 mb-4">
                  A comprehensive school management system built with Next.js and NestJS, featuring real-time updates, automated attendance, and advanced analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">NestJS</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href="https://www.academypro.live/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* E-Commerce Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Frontend</span>
                </div>
                <p className="text-gray-400 mb-4">
                  A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized shopping experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">React</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Redux</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Stripe</span>
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href="#" 
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-teal-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Personal Portfolio</h3>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Design</span>
                </div>
                <p className="text-gray-400 mb-4">
                  A modern, responsive portfolio website showcasing my work and skills with smooth animations and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Tailwind</span>
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-sm">Framer Motion</span>
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href="#" 
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =============================== */}
        {/*        CONTACT SECTION          */}
        {/* =============================== */}
        <section id="contact" className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
              <p className="text-gray-400 text-lg">Let's discuss how we can work together</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+880 16012-07608</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">shajibislam3003@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Business Hours</p>
                      <p className="text-white font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="bg-gray-900 rounded-xl p-8 shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="https://github.com/ra88ju"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/dmshajib.islamraju"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/dmshajib.islamraju/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="mailto:shajibislam3003@gmail.com"
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
