const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-900 text-text p-8">
      <h2 className="text-3xl font-orbitron mb-4 text-white">Experience</h2>
      <div className="max-w-5xl mx-auto px-8">
        <svg className="timeline-svg" viewBox="0 0 900 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="constructionGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="iotGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#98FB98" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#98FB98" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="roboticsGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="0"/>
            </linearGradient>
          </defs>

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
          <text 
            x="150" 
            y="80" 
            fill="#FFB6C1" 
            className="font-orbitron text-lg"
          >
            Construction
          </text>
          
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
          <text 
            x="490" 
            y="80" 
            fill="#98FB98" 
            className="font-orbitron text-lg"
          >
            IoT
          </text>

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
          <text 
            x="750" 
            y="80" 
            fill="#87CEEB" 
            className="font-orbitron text-lg"
          >
            Robotics
          </text>
        </svg>
        
        <div className="annotation construction-label">
          Construction
          <div className="description">Concrete & Metal Structures Carpenter</div>
        </div>
        
        <div className="annotation iot-label">
          IoT
          <div className="description">Smart Home & Smart City: Phillips, Nest, Essential, Tesla</div>
        </div>
        
        <div className="annotation robotics-label">
          Robotics
          <div className="description">Industry 4.0, Research, Humanoids: Intrinsic, Google Brain, Figure</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;