"use client";

import { useState } from "react";

interface ToggleProps {
  title: string;
  children: React.ReactNode;
}

export default function Toggle({ title, children }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
      >
        <span className="text-sm font-medium">{title}</span>
        <div 
          className={`w-0 h-0 border-4 border-transparent transition-transform duration-200 ${
            isOpen 
              ? 'border-t-white -translate-y-1' 
              : 'border-l-white translate-x-1'
          }`}
        />
      </button>
      <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
        <div className="p-3 bg-white/5 rounded-b-md mt-0.5">
          {children}
        </div>
      </div>
    </div>
  );
} 