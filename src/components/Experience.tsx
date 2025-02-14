"use client";

import { useState } from "react";
import Image from "next/image";

type SectionType = "construction" | "iot" | "robotics";

interface SectionContent {
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

interface EntrepreneurshipPoint {
  id: string;
  x: number;
  y: number;
  companyName: string;
  year: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const sectionContents: Record<SectionType, SectionContent> = {
  construction: {
    description:
      "Building single and multifamily homes across New York City. From concrete foundations, decks, \
                  wood and metal framings, all the way to windows, sheetrock, plywood, doors, and finishing.",
    images: [
      {
        src: "/images/NYC_downtown_manhattan.jpg",
        alt: "New York City downtown Manhattan skyline",
      },
    ],
  },
  iot: {
    description:
      "Research and Development in Wireless Sensor Networks, Cyber-Physical Systems and Internet of Things. \
                  Focusing on applications in Smart Home and Smart City. Shipped products with Phillips, Nest, Essential, and Tesla.",
    images: [
      { src: "/images/Philips_logo.png", alt: "Philips company logo" },
      { src: "/images/Nest_logo.png", alt: "Nest company logo" },
      { src: "/images/Essential_logo.png", alt: "Essential company logo" },
      { src: "/images/Tesla_logo.png", alt: "Tesla company logo" },
    ],
  },
  robotics: {
    description:
      "Research and Development focusing on applying AI and robotics into Manufacturing and Industry 4.0.\
      Training arm robots with Reinforcement Learning algorithms. Building humanoid software stack. \
      Google X (now Intrinsic), Google Brain Robotics and Figure AI.",
    images: [
      { src: "/images/X_logo.png", alt: "Google X (Intrinsic) logo" },
      { src: "/images/Google_logo.png", alt: "Google logo" },
      { src: "/images/Figure_ai_logo.png", alt: "Figure AI logo" },
    ],
  },
};

const entrepreneurshipPoints: EntrepreneurshipPoint[] = [
  {
    id: "point1",
    x: 300,
    y: 185,
    companyName: "Paxe.net",
    year: "2007",
    description: "Founded home office networking startup in NYC.",
    image: {
      src: "/images/home_office.png",
      alt: "Paxe.net",
    },
  },
  {
    id: "point2",
    x: 450,
    y: 160,
    companyName: "Nest",
    year: "2015",
    description:
      "Joined Nest Labs when it was acquired by Google (~ employee #350)",
    image: {
      src: "/images/Nest_logo.png",
      alt: "Nest logo",
    },
  },
  {
    id: "point3",
    x: 550,
    y: 140,
    companyName: "Essential",
    year: "2017",
    description:
      "Joined Essential to build the new home operating system AmbientOS. Working out of Playground Global. (~ employee #25)",
    image: {
      src: "/images/Essential_logo.png",
      alt: "Essential logo",
    },
  },
  {
    id: "point4",
    x: 500,
    y: 150,
    companyName: "Google X",
    year: "2018",
    description:
      "Worked at the Google Moonshot Factory. Joined small industrial robotics project, \
                which graduated to become an Alphabet company known as Intrinsic (~ employee #18)",
    image: {
      src: "/images/X_logo.png",
      alt: "Google X logo",
    },
  },
  {
    id: "point5",
    x: 700,
    y: 110,
    companyName: "Figure AI",
    year: "2022",
    description:
      "Joined as the first software engineer to start a new humanoid company. \
                Working out of co-working Spaces before we got the first big building (~ employee #9)",
    image: {
      src: "/images/Figure_ai_logo.png",
      alt: "Figure AI logo",
    },
  },
  {
    id: "point6",
    x: 750,
    y: 100,
    companyName: "Hamster Works",
    year: "2023",
    description:
      "Founded R&D startup dedicated to creating innovative tools and processes for building, \
              maintaining, and fixing embedded software running on microcontrollers. Shipped Firmware Studio.",
    image: {
      src: "/images/hamster_works_logo.png",
      alt: "Hamster Works logo",
    },
  },
];

const Experience = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="bg-zinc-900 text-text p-4 sm:p-8 md:p-20 relative"
    >
      <h2 className="text-2xl sm:text-3xl font-orbitron mb-2 text-white">
        Experience
      </h2>

      {/* R&D Experience Section */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative mb-8 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-orbitron text-white mb-4">
          Past Research & Development Experience
        </h3>

        <div className="w-full aspect-[2/1] relative">
          <svg
            className="w-full h-full"
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

            <text
              x="150"
              y="80"
              fill="#FFB6C1"
              className="font-orbitron text-lg"
            >
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
            <text
              x="490"
              y="80"
              fill="#98FB98"
              className="font-orbitron text-lg"
            >
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
            <text
              x="750"
              y="80"
              fill="#87CEEB"
              className="font-orbitron text-lg"
            >
              Robotics
            </text>
          </svg>

          <div
            className="absolute inset-0"
            style={{ pointerEvents: "none", zIndex: 50 }}
          >
            {(["construction", "iot", "robotics"] as const).map((section) => (
              <div
                key={section}
                className="absolute group"
                style={{
                  top: 0,
                  left:
                    section === "construction"
                      ? "10%"
                      : section === "iot"
                        ? "40%"
                        : "70%",
                  width: "min(300px, 80vw)",
                  height: "300px",
                  pointerEvents: "auto",
                }}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div
                  className={`absolute p-2 sm:p-4 rounded-lg bg-zinc-700/90 border
                    ${
                      section === "construction"
                        ? "border-pink-400"
                        : section === "iot"
                          ? "border-green-400"
                          : "border-blue-400"
                    } 
                    shadow-lg transition-all duration-200 text-white
                    ${hoveredSection === section ? "opacity-100" : "opacity-0"}
                    w-[calc(100vw-2rem)] sm:w-auto max-w-[300px]
                    transform origin-top
                    ${hoveredSection === section ? "translate-y-0" : "-translate-y-2"}`}
                  style={{ top: "120px" }}
                >
                  <h3 className="text-base sm:text-lg font-orbitron mb-2 capitalize">
                    {section}
                  </h3>
                  <p className="text-xs sm:text-sm mb-4">
                    {sectionContents[section].description}
                  </p>

                  <div
                    className={`grid gap-2 ${
                      section === "construction"
                        ? "grid-cols-1"
                        : section === "iot"
                          ? "grid-cols-2"
                          : "grid-cols-3"
                    }`}
                  >
                    {sectionContents[section].images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden bg-zinc-600"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative mb-8 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-orbitron text-white mb-4">
          Past Entrepreneurship Experience
        </h3>

        <div className="w-full aspect-[2/1] relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 900 420"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="entrepreneurshipGradient"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g>
              {/* Entrepreneurship path with fill */}
              <path
                className="entrepreneurship-path-fill"
                d="M 200,200 C 433,200 666,100 900,100 L 900,200 L 200,200 Z"
                fill="url(#entrepreneurshipGradient)"
                stroke="none"
              />
              <path
                className="entrepreneurship-path-stroke"
                d="M 200,200 C 433,200 666,100 900,100"
                fill="none"
                stroke="#FF00FF"
                strokeWidth="2"
              />

              {entrepreneurshipPoints.map((point) => (
                <g key={point.id}>
                  {/* Hover area (invisible circle larger than the visible point) */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="20"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredSection(point.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  />

                  {/* Visible point */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="#FF00FF"
                    className="pointer-events-none transition-all duration-200"
                  />

                  {/* Card with transition */}
                  <foreignObject
                    x={point.x - 150}
                    y={point.y + 20}
                    width="300"
                    height="180"
                    className="overflow-visible pointer-events-none"
                  >
                    <div
                      className={`p-4 rounded-lg bg-zinc-700/90 border border-pink-400 shadow-lg
                              transition-all duration-300 transform origin-top  // Added origin-top
                            ${hoveredSection === point.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                    >
                      <h4 className="text-lg font-orbitron text-white mb-1">
                        {point.companyName}
                      </h4>
                      <p className="text-sm text-pink-400 mb-2">{point.year}</p>
                      <p className="text-xs text-white mb-3">
                        {point.description}
                      </p>
                      <div className="relative h-20 w-full rounded-md overflow-hidden bg-zinc-700">
                        <Image
                          src={point.image.src}
                          alt={point.image.alt}
                          fill
                          className="object-contain p-2"
                          sizes="300px"
                        />
                      </div>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </g>
            <text
              x="750"
              y="80"
              fill="#FF00FF"
              className="font-orbitron text-lg"
            >
              Entrepreneurship
            </text>
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <h3 className="text-xl font-orbitron text-white">Next</h3>
        <svg
          className="timeline-svg"
          viewBox="0 0 900 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="nextGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g>
            {/* Construction Circle */}
            <circle
              cx="300"
              cy="200"
              r="150"
              fill="url(#constructionGradient)"
              stroke="#FFB6C1"
              strokeWidth="2"
            />
            <text
              x="180"
              y="150"
              fill="#FFB6C1"
              className="font-orbitron text-lg"
            >
              Construction
            </text>

            {/* IoT Circle */}
            <circle
              cx="450"
              cy="200"
              r="150"
              fill="url(#iotGradient)"
              stroke="#98FB98"
              strokeWidth="2"
            />
            <text
              x="500"
              y="150"
              fill="#98FB98"
              className="font-orbitron text-lg"
            >
              IoT
            </text>

            {/* Robotics Circle */}
            <circle
              cx="375"
              cy="300"
              r="150"
              fill="url(#roboticsGradient)"
              stroke="#87CEEB"
              strokeWidth="2"
            />
            <text
              x="340"
              y="410"
              fill="#87CEEB"
              className="font-orbitron text-lg"
            >
              Robotics
            </text>

            {/* Intersection Area */}
            <path
              d="M 300,200 A 150,150 0 0,1 450,200 A 150,150 0 0,1 375,300 A 150,150 0 0,1 300,200 Z"
              fill="url(#nextGradient)"
              stroke="none"
            />
            <text
              x="350"
              y="250"
              fill="#FF00FF"
              className="font-orbitron text-2xl font-bold"
            >
              NEXT
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Experience;
