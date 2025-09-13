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
              <motion.nav 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden md:flex items-center space-x-8"
              >
                {[
                  { href: "#home", label: "Home" },
                  { href: "#skills", label: "Skills" },
                  { href: "#education", label: "Education" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="relative text-gray-300 hover:text-white transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </motion.nav>

              {/* Mobile Menu Button */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors border border-gray-700/30"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl border-t border-gray-800/30 rounded-b-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#skills", label: "Skills" },
                { href: "#education", label: "Education" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.a 
                  key={item.href}
                  href={item.href} 
                  className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500 pl-1"
                  onClick={toggleMobileMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">

        {/* =============================== */}
        {/*          HERO SECTION           */}
        {/* =============================== */}
        <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
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

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              
              {/* Main Content */}
              <div className="text-center lg:text-left flex-1 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Greeting */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium"
                  >
                    Hello, I'm
                  </motion.p>

                  {/* Main Heading */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                  >
                    <span className="block text-white">MD.SHAJIB ISLAM</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                      Full Stack Developer
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  >
                    I create exceptional digital experiences through innovative development and thoughtful design.
                    <br className="hidden sm:block" />
                    <span className="text-white font-semibold">React • Node.js • UI/UX Design</span>
                  </motion.p>

                  {/* Call-to-Action Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
                  >
                    <motion.a 
                      href="#projects" 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        VIEW MY WORK
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                    
                    <motion.a 
                      href="#contact" 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        GET IN TOUCH
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </span>
                    </motion.a>
                  </motion.div>

                  {/* Scroll Indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex flex-col items-center text-gray-400"
                    >
                      <span className="text-sm mb-2">Scroll Down</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Profile Picture Section (Hidden on mobile, visible on larger screens) */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center"
              >
                <div className="relative">
                  {/* Profile Picture Placeholder */}
                  <div className="relative w-80 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm">Your Photo Here</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/*         SKILLS SECTION          */}
        {/* =============================== */}
        <section id="skills" className="pt-10 pb-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Skills
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Expertise in modern technologies and professional competencies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Development Skills */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-blue-600/10 rounded-xl">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-blue-500 font-semibold">Development</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Full Stack Development</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Frontend (React/Next.js)</span>
                      <span className="text-blue-500">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Backend (Node.js/NestJS)</span>
                      <span className="text-blue-500">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Database Management</span>
                      <span className="text-blue-500">80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Design Skills */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-purple-600/10 rounded-xl">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-purple-500 font-semibold">Design</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Figma</span>
                      <span className="text-purple-500">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">User Interface Design</span>
                      <span className="text-purple-500">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Prototyping</span>
                      <span className="text-purple-500">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Professional Skills */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-green-600/10 rounded-xl">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-green-500 font-semibold">Professional</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Business Skills</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Sales Strategy</span>
                      <span className="text-green-500">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Client Relations</span>
                      <span className="text-green-500">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Team Leadership</span>
                      <span className="text-green-500">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technologies Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Technologies I Work With</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'React', icon: '⚛️', color: 'text-blue-500' },
                  { name: 'Next.js', icon: '▲', color: 'text-white' },
                  { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
                  { name: 'NestJS', icon: '🔺', color: 'text-red-500' },
                  { name: 'TypeScript', icon: '📘', color: 'text-blue-400' },
                  { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
                  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-300' },
                  { name: 'Redis', icon: '🔴', color: 'text-red-500' },
                  { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
                  { name: 'AWS', icon: '☁️', color: 'text-yellow-500' },
                  { name: 'Git', icon: '📦', color: 'text-orange-500' },
                  { name: 'Figma', icon: '🎨', color: 'text-purple-500' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =============================== */}
        {/*        EDUCATION SECTION        */}
        {/* =============================== */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Qualifications
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                My academic journey and professional certifications that have shaped my expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* University Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Bachelor of Science</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Computer Science & Engineering</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">2019 - 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">University of Your Institution</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Major in Software Engineering</li>
                  <li>• CGPA: 3.8/4.0</li>
                  <li>• Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                </ul>
              </motion.div>

              {/* Professional Certification */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Professional Certifications</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Industry Recognition</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Full Stack Development</h4>
                    <p className="text-gray-600 dark:text-gray-400">Meta • 2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">UI/UX Design Professional</h4>
                    <p className="text-gray-600 dark:text-gray-400">Google • 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">AWS Cloud Practitioner</h4>
                    <p className="text-gray-600 dark:text-gray-400">Amazon Web Services • 2022</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/*        PROJECTS SECTION         */}
        {/* =============================== */}
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Showcasing my best work in development and design
              </p>
            </motion.div>

            <div className="flex justify-center">
              {/* Academy Pro Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-500 w-full max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                  {/* Academy Pro Logo/Icon */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Academy Pro</h3>
                    <p className="text-purple-300 text-sm">School Management System</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Academy Pro</h3>
                    <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">A comprehensive school management system with student enrollment, attendance tracking, grade management, and parent-teacher communication.</p>
                  </div>
                </div>
                <div className="p-6 pt-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Attendance</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Student</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Finance</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">MongoDB</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">JWT Auth</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Tailwind CSS</span>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">REST API</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="https://www.academypro.live/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 group/link">
                      <span>View Project</span>
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <a href="https://www.academypro.live/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

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
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 shadow-2xl space-y-6 backdrop-blur-xl border border-gray-800/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">Full Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Email Address</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">Phone Number</label>
                    <motion.input 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Subject</label>
                    <motion.select 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-900">Select a subject</option>
                      <option value="project" className="bg-gray-900">Project Inquiry</option>
                      <option value="job" className="bg-gray-900">Job Opportunity</option>
                      <option value="collaboration" className="bg-gray-900">Collaboration</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </motion.select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Message</label>
                    <motion.textarea 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How can I help you?"
                    ></motion.textarea>
                  </div>
                  <div className="text-center">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-16"
            >
              <motion.a
                href="https://github.com/ra88ju"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative font-medium">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="relative font-medium">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/dmshajib.islamraju"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="relative font-medium">Facebook</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/dmshajib.islamraju/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="relative font-medium">Instagram</span>
              </motion.a>
              <motion.a
                href="mailto:shajibislam3003@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="relative font-medium">Email</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
