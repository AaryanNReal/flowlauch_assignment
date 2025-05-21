'use client'
import data from '@/app/api/data';
import { Profile } from '@/types/types';
import { useState, useEffect } from 'react';

export default function ProfileSection() {
  const { profile }: { profile: Profile } = data;
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add fade-in effect when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div 
      id="profile" 
      className={`bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg p-6 sticky top-8 border border-blue-100 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Profile image with pulse effect and hover zoom */}
        <div className="relative mb-4 group">
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          <img
            src={profile.image}
            alt="Profile"
            className="relative w-32 h-32 rounded-full object-cover border-4 border-blue-100 transition-transform duration-300 group-hover:scale-105 z-10"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-black relative">
          {profile.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </h2>
        
        <p className="text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300">{profile.title}</p>
        
        <p className="text-gray-600 text-center mb-4">{profile.bio}</p>
      </div>
      
      <div className="mt-6 text-black">
        <h3 className="text-lg font-semibold text-black mb-2 border-b border-blue-100 pb-2">Contact Information</h3>
        
        <ul className="space-y-3">
          <li className="group flex items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
            <span className="flex items-center justify-center bg-blue-100 text-blue-600 h-8 w-8 rounded-full mr-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">📧</span>
            <a 
              href={`mailto:${profile.email}`} 
              className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
            >
              {profile.email}
            </a>
          </li>
          
          <li className="group flex items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
            <span className="flex items-center justify-center bg-blue-100 text-blue-600 h-8 w-8 rounded-full mr-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">📱</span>
            <a 
              href={`tel:${profile.phone}`} 
              className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
            >
              {profile.phone}
            </a>
          </li>
          
          <li className="group flex items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
            <span className="flex items-center justify-center bg-blue-100 text-blue-600 h-8 w-8 rounded-full mr-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">📍</span>
            <span className="text-gray-700">{profile.location}</span>
          </li>
        </ul>
      </div>
      
      {/* Social links (optional) */}
     
    </div>
  );
}