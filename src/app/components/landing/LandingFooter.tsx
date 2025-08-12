'use client';

import Link from 'next/link';
import { Brain } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold">TengriLake AI</span>
              <div className="text-sm text-gray-400">Data Engineering Tracker</div>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link href="/login" className="hover:text-blue-400 transition-colors">
              Sign In
            </Link>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              API
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TengriLake AI. All rights reserved. Built for data engineering excellence.</p>
        </div>
      </div>
    </footer>
  );
}