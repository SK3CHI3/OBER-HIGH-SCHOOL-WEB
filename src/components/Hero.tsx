import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const heroImages = [
    "/images/hero/best group photo students.jpg", // Best group photo of students
    "/images/hero/grupp photo ober.jpg", // Group photo of Ober students
    "/images/about/ober boys main gate.jpg", // School main gate
    "/images/gallery/students image gruop photo.webp", // Additional group photo
  ];

  // Auto-rotate images with random timing (6-10 seconds)
  useEffect(() => {
    const getRandomInterval = () => Math.random() * 4000 + 6000; // 6-10 seconds
    
    const scheduleNext = () => {
      const timeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        scheduleNext(); // Schedule the next rotation
      }, getRandomInterval());
      
      return timeout;
    };
    
    const timeout = scheduleNext();
    return () => clearTimeout(timeout);
  }, [heroImages.length]);

  // Preload images and log for debugging
  useEffect(() => {
    let loadedCount = 0;
    heroImages.forEach((imageUrl, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Hero image ${index + 1} loaded successfully:`, imageUrl);
        loadedCount++;
        if (loadedCount === heroImages.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load hero image ${index + 1}:`, imageUrl);
        loadedCount++;
        if (loadedCount === heroImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = imageUrl;
    });
  }, [heroImages]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/60"></div>
        
        {heroImages.map((image, index) => {
          // Random movement patterns for each image
          const movementPatterns = [
            // Pattern 1: Gentle zoom with slight pan
            {
              scale: [1, 1.08, 1.05, 1],
              x: [0, -15, 10, 0],
              y: [0, -8, 5, 0]
            },
            // Pattern 2: Horizontal pan with zoom
            {
              scale: [1, 1.06, 1.02, 1],
              x: [0, 20, -10, 0],
              y: [0, 3, -2, 0]
            },
            // Pattern 3: Vertical movement with subtle zoom
            {
              scale: [1, 1.04, 1.07, 1],
              x: [0, 5, -8, 0],
              y: [0, -12, 8, 0]
            },
            // Pattern 4: Diagonal movement
            {
              scale: [1, 1.05, 1.03, 1],
              x: [0, -12, 15, 0],
              y: [0, 6, -10, 0]
            }
          ];
          
          const pattern = movementPatterns[index % movementPatterns.length];
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0
              }}
              transition={{ 
                duration: 4.0, 
                ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smoothness
              }}
            >
              <motion.img
                src={image}
                alt={`Ober Boys High School ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                animate={currentImageIndex === index ? pattern : {}}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                onLoad={() => console.log(`Hero image ${index + 1} loaded:`, image)}
                onError={() => console.error(`Hero image ${index + 1} failed to load:`, image)}
              />
            </motion.div>
          );
        })}
        {/* Reduced green shade with bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
      </div>
      
      {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to <br className="sm:hidden" />
                <motion.span 
                  className="text-accent block sm:inline"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Ober Boys High School
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-95 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A Public Secondary School Committed to Academic Excellence, Character Development, and National Development
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 group">
                    <Link to="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
            </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-2 border-white/80 text-white bg-transparent hover:bg-white/10 hover:border-white group backdrop-blur-sm"
                  >
                    <Link to="/gallery">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                      Virtual Tour
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
          
          {/* Animated Stats */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex justify-center mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-8 w-8 text-accent" />
              </motion.div>
              <div className="text-3xl font-bold mb-2">
                <CountUp end={30} duration={2} suffix="+" />
              </div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex justify-center mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8 text-accent" />
              </motion.div>
              <div className="text-3xl font-bold mb-2">
                <CountUp end={1200} duration={2} suffix="+" />
              </div>
              <div className="text-lg opacity-90">Students</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex justify-center mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="h-8 w-8 text-accent" />
              </motion.div>
              <div className="text-3xl font-bold mb-2">
                <CountUp end={98} duration={2} suffix="%" />
              </div>
              <div className="text-lg opacity-90">KCSE Success Rate</div>
            </motion.div>
          </motion.div>
        </motion.div>
            </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
          </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;