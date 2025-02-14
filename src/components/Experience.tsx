"use client";

import { useState } from "react";

const Experience = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const descriptions = {
    construction: "Concrete & Metal Structures Carpenter",
    iot: "Smart Home & Smart City: Phillips, Nest, Essential, Tesla",
    robotics:
      "Industry 4.0, Research, Humanoids: Intrinsic, Google Brain, Figure",
  };

  return (
    <section id="experience" className="bg-zinc-900 text-text p-20 relative">
      <h2 className="text-3xl font-orbitron mb-4 text-white">Experience</h2>
      <div className="max-w-5xl mx-auto px-8 relative">
        <svg
          className="timeline-svg"
          viewBox="0 0 900 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="constructionGradient"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="iotGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#98FB98" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#98FB98" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="roboticsGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g
            onMouseEnter={() => setHoveredSection("construction")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Construction path with fill */}
            <path
              className="construction-path-fill"
              d="M 100,100 C 200,100 300,200 400,200 L 400,200 L 100,200 Z"
              fill="url(#constructionGradient)"
              stroke="none"
            />
            <path
              className="construction-path-stroke"
              d="M 100,100 C 200,100 300,200 400,200"
              fill="none"
              stroke="#FFB6C1"
              strokeWidth="2"
            />
          </g>

          <text x="150" y="80" fill="#FFB6C1" className="font-orbitron text-lg">
            Construction
          </text>

          <g
            onMouseEnter={() => setHoveredSection("iot")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* IoT path with fill */}
            <path
              className="iot-path-fill"
              d="M 200,200 C 350,200 400,100 500,100 S 650,200 800,200 L 800,200 L 200,200 Z"
              fill="url(#iotGradient)"
              stroke="none"
            />
            <path
              className="iot-path-stroke"
              d="M 200,200 C 350,200 400,100 500,100 S 650,200 800,200"
              fill="none"
              stroke="#98FB98"
              strokeWidth="2"
            />
          </g>
          <text x="490" y="80" fill="#98FB98" className="font-orbitron text-lg">
            IoT
          </text>

          <g
            onMouseEnter={() => setHoveredSection("robotics")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Robotics path with fill */}
            <path
              className="robotics-path-fill"
              d="M 600,200 C 700,200 800,100 900,100 L 900,200 L 600,200 Z"
              fill="url(#roboticsGradient)"
              stroke="none"
            />
            <path
              className="robotics-path-stroke"
              d="M 600,200 C 700,200 800,100 900,100"
              fill="none"
              stroke="#87CEEB"
              strokeWidth="2"
            />
          </g>
          <text x="750" y="80" fill="#87CEEB" className="font-orbitron text-lg">
            Robotics
          </text>
        </svg>

        {/* Hover areas with description boxes */}
        <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
          {(["construction", "iot", "robotics"] as const).map((section) => (
            <div
              key={section}
              className="absolute group"
              style={{
                top: 0,
                left:
                  section === "construction"
                    ? "100px"
                    : section === "iot"
                      ? "400px"
                      : "700px",
                width: "250px",
                height: "300px",
                pointerEvents: "auto",
              }}
              onMouseEnter={() => setHoveredSection(section)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div
                className={`absolute p-4 rounded-lg bg-zinc-800 border 
                  ${
                    section === "construction"
                      ? "border-pink-400"
                      : section === "iot"
                        ? "border-green-400"
                        : "border-blue-400"
                  } 
                  shadow-lg transition-opacity duration-200 text-white
                  ${hoveredSection === section ? "opacity-100" : "opacity-0"}`}
                style={{ top: "120px" }}
              >
                <h3 className="text-lg font-orbitron mb-2 capitalize">
                  {section}
                </h3>
                <p className="text-sm">{descriptions[section]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
