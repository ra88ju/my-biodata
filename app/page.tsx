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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">

      {/* =============================== */}
      {/*         HEADER SECTION          */}
      {/* =============================== */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MD.SHAJIBUL ISLAM
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
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects
                </a>
                
            
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </nav>

          

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Home</a>
              <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMobileMenu}>Skills</a>
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
        <section id="home" className="relative container mx-auto px-4 py-20">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
            // Replace with your animated background video URL
            src="/shajib.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Professional Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
              Full Stack Developer | UI/UX Designer | Sales Executive
            </p>
          </div>
        </section>

        {/* =============================== */}
        {/*         SKILLS SECTION          */}
        {/* =============================== */}
        <section id="skills" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NestJS Developer Card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-xl font-bold mb-3">NestJS Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert in building scalable backend applications using NestJS framework.
                Specialized in RESTful APIs, microservices architecture, and database optimization.
              </p>
            </motion.div>

            {/* Figma Designer Card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-pulse">🎨</div>
              <h3 className="text-xl font-bold mb-3">Figma Designer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating beautiful and intuitive user interfaces using Figma.
                Experienced in wireframing, prototyping, and design systems.
              </p>
            </motion.div>

            {/* Sales Executive Card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 animate-spin-slow">💼</div>
              <h3 className="text-xl font-bold mb-3">Academy Pro Sales Executive</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leading sales initiatives and driving business growth.
                Expert in client relationship management and strategic planning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =============================== */}
        {/*        CONTACT SECTION          */}
        {/* =============================== */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          </div>
          <div className="max-w-md mx-auto">
            {/* Contact Form */}
            <form className="bg-gray-900 rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Send Message
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
