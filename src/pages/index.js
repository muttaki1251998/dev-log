// pages/index.js
import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Developer Blog</h1>
            <p className="text-gray-600 mb-8">
              A space where I share my thoughts, ideas, and experiences about software development. From coding tips and tricks to deep dives into the latest technologies, you'll find it all here.
            </p>
            <a
              href="/blog"
              className="inline-block bg-gray-800 text-white text-sm font-semibold rounded-lg px-6 py-3 uppercase tracking-wider"
            >
              Read the blog
            </a>
          </div>
        </div>
  );
}

export default HomePage;
