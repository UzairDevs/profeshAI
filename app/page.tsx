"use client"
import { ArrowRight, FileText, Sparkles, Layout, Users, Star } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Create stunning resumes with AI
          </h1>
          <p className="text-xl text-gray-600 mt-6">
            Build professional resumes in minutes. Our AI helps you craft the perfect resume content tailored to your career goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl">
              <div className="w-full max-w-md">
                <div className="h-12 bg-gray-100 rounded-t-lg flex items-center px-4 space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-6 border-2 border-t-0 border-gray-100 rounded-b-lg">
                  <div className="flex justify-between">
                    <div className="w-1/3 pr-4">
                      <div className="h-6 w-24 bg-indigo-100 rounded-md mb-4"></div>
                      <div className="h-24 w-24 bg-indigo-100 rounded-md mb-4"></div>
                      <div className="h-4 w-full bg-gray-100 rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-gray-100 rounded-md"></div>
                    </div>
                    <div className="w-2/3">
                      <div className="h-8 w-full bg-gray-100 rounded-md mb-4"></div>
                      <div className="h-4 w-full bg-gray-100 rounded-md mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded-md mb-6"></div>
                      <div className="h-6 w-1/2 bg-gray-100 rounded-md mb-4"></div>
                      <div className="h-4 w-full bg-gray-100 rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-gray-100 rounded-md mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 mt-4">Everything you need to create the perfect resume</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl bg-indigo-50 shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Content</h3>
              <p className="text-gray-600">Our AI generates professional resume content tailored to your experience and industry.</p>
            </div>
            <div className="p-6 rounded-xl bg-indigo-50 shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
              <p className="text-gray-600">Choose from dozens of professionally designed templates to make your resume stand out.</p>
            </div>
            <div className="p-6 rounded-xl bg-indigo-50 shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 ">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ATS-Optimized</h3>
              <p className="text-gray-600">Ensure your resume passes applicant tracking systems with our optimized formatting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="text-xl text-gray-600 mt-4">Join thousands of satisfied job seekers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">"I landed three interviews within a week of using my new resume. The AI suggestions were spot-on for my industry!"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="font-semibold text-indigo-700">JD</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Jane Doe</h4>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">"As a recent graduate, I had no idea how to showcase my limited experience. ResumeAI helped me create a professional resume that got noticed."</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="font-semibold text-indigo-700">MS</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Michael Smith</h4>
                  <p className="text-gray-500 text-sm">Marketing Associate</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">"The chat interface made it so easy to describe my experience, and the AI turned my responses into perfectly written bullet points."</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="font-semibold text-indigo-700">AL</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Amanda Lee</h4>
                  <p className="text-gray-500 text-sm">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start building your professional resume today</h2>
          <p className="text-indigo-100 text-xl mb-8">Join thousands of job seekers who have accelerated their careers with ResumeAI</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full md:w-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition shadow-md">
              Get Started Free
            </button>
          </div>
          <p className="text-indigo-200 mt-4 text-sm">No credit card required. Free plan available.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">ResumeAI</span>
              </div>
              <p className="text-gray-400">Building better careers through intelligent resume creation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 ResumeAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}