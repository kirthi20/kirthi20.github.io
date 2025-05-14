"use client";

export default function ToggleContainer() {
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
        <div className="w-48 h-48 relative rounded-full overflow-hidden mb-6 bg-white/10">
          {/* Replace with your actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl">
            👤
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-3 text-center">Kirthi Kumar</h1>
        <p className="text-lg text-white/80 text-center max-w-sm mb-6">
            👋 Hi, I’m Kirthi! I'm currently pursuing a one-year Master's in Social Data Science at University of Oxford. I graduated from UC Berkeley studying EECS & Business May 2024.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/kirthi20"
            className="text-white/80 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub | 
          </a>
          <a
            href="https://www.linkedin.com/in/kirthi-kumar/"
            className="text-white/80 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            | LinkedIn
          </a>
        </div>
      </div>
  );
} 