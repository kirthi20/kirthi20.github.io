"use client";

import Toggle from "./Toggle";

export default function ToggleContainer() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Toggle title="Experience">
        <div className="space-y-3 text-gray-200">
          <div>
            <h3 className="text-sm font-semibold mb-1">Senior Developer - Company Name</h3>
            <p className="text-xs text-gray-300 mb-1">2020 - Present</p>
            <ul className="list-disc list-inside text-xs space-y-0.5">
              <li>Led development of multiple high-impact projects</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented new technologies and best practices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Software Engineer - Previous Company</h3>
            <p className="text-xs text-gray-300 mb-1">2018 - 2020</p>
            <ul className="list-disc list-inside text-xs space-y-0.5">
              <li>Developed and maintained critical business applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Improved application performance by 40%</li>
            </ul>
          </div>
        </div>
      </Toggle>

      <Toggle title="Projects">
        <div className="space-y-3 text-gray-200">
          <div>
            <h3 className="text-sm font-semibold mb-1">Project One</h3>
            <p className="text-xs mb-1">A brief description of your first project and its impact.</p>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">React</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">TypeScript</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Node.js</span>
            </div>
            <a href="#" className="text-teal-300 hover:text-teal-400 text-xs">View Project →</a>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Project Two</h3>
            <p className="text-xs mb-1">A brief description of your second project and its impact.</p>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Next.js</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Tailwind</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">MongoDB</span>
            </div>
            <a href="#" className="text-teal-300 hover:text-teal-400 text-xs">View Project →</a>
          </div>
        </div>
      </Toggle>

      <Toggle title="Skills">
        <div className="space-y-2 text-gray-200">
          <div>
            <h3 className="text-sm font-semibold mb-1">Programming Languages</h3>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">JavaScript</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">TypeScript</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Python</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Java</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Technologies</h3>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">React</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Next.js</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Node.js</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Docker</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">AWS</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">Tools & Practices</h3>
            <div className="flex flex-wrap gap-1">
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Git</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">CI/CD</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">Agile</span>
              <span className="px-1.5 py-0.5 bg-white/10 rounded-sm text-xs">TDD</span>
            </div>
          </div>
        </div>
      </Toggle>
    </div>
  );
} 