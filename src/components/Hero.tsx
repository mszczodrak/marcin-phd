const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden m-12">
            <div className="absolute inset-0 hero-gradient" />

            <h1 className="text-4xl md:text-6xl font-bold mb-10">
                Creative Developer
            </h1>
            
            <p className="text-lg md:text-xl m-8 self-end">
                Building beautiful, interactive experiences.
            </p>
        </div>
    );
};

export default Hero;