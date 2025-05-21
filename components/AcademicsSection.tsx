"use client"
import data from '@/app/api/data';
import { Academic, Experience } from '@/types/types';
import { useState } from 'react';

export default function AcademicsSection() {
  const { academics, experience } = data;
  const [activeTab, setActiveTab] = useState('education');
  
  return (
    <section id="academics" className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
        Education & Experience
        <span className="absolute bottom-0 left-0 w-full h-1  rounded-full"></span>
      </h2>
      
      {/* Tab navigation */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('education')}
          className={`py-2 px-4 font-medium transition-all duration-300 relative ${
            activeTab === 'education' 
              ? 'text-blue-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Education
          {activeTab === 'education' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300"></span>
          )}
        </button>
        <button 
          onClick={() => setActiveTab('experience')}
          className={`py-2 px-4 font-medium transition-all duration-300 relative ${
            activeTab === 'experience' 
              ? 'text-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Experience
          {activeTab === 'experience' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform transition-transform duration-300"></span>
          )}
        </button>
      </div>
      
      {/* Education section with timeline effect */}
      <div className={`transition-all duration-500 ${activeTab === 'education' ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
          
          <div className="space-y-8 pl-8">
            {academics.map((item: Academic, index: number) => (
              <div 
                key={index} 
                className="relative group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-4 border-blue-500 -ml-11 group-hover:scale-125 group-hover:bg-blue-100 transition-all duration-300"></div>
                
                {/* Content card */}
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                  <h4 className="text-lg font-medium text-gray-800 flex items-center">
                    <span className="text-blue-600 mr-2">🎓</span>
                    {item.college}
                  </h4>
                  <p className="text-gray-600 ml-6">{item.university}</p>
                  <p className="text-blue-600 font-medium ml-6">{item.degree}</p>
                  <div className="flex justify-between items-center mt-2 text-gray-500 text-sm ml-6">
                    <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full">{item.year}</span>
                    <span className="font-medium">GPA: {item.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Experience section with timeline effect */}
      <div className={`transition-all duration-500 ${activeTab === 'experience' ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
          
          <div className="space-y-8 pl-8">
            {experience.map((item: Experience, index: number) => (
              <div 
                key={index} 
                className="relative group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-4 border-green-500 -ml-11 group-hover:scale-125 group-hover:bg-green-100 transition-all duration-300"></div>
                
                {/* Content card */}
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                  <h4 className="text-lg font-medium text-gray-800 flex items-center">
                    <span className="text-green-600 mr-2">💼</span>
                    {item.company}
                  </h4>
                  <p className="text-green-600 font-medium ml-6">{item.position}</p>
                  <p className="bg-green-100 text-green-800 py-1 px-3 rounded-full inline-block text-sm ml-6 mt-1">{item.year}</p>
                  <p className="text-gray-600 mt-2 ml-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}