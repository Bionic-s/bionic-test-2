import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Sparkles, Rocket } from 'lucide-react';

export const AnimationShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: 'Framer Motion',
      description: 'Declarative animations with spring physics',
      color: '#00b4d8',
      examples: ['Spring animations', 'Staggered reveals', 'Gesture interactions']
    },
    {
      title: 'React CountUp',
      description: 'Beautiful animated number counters',
      color: '#ff6b6b',
      examples: ['Statistics animation', 'Progress indicators', 'KPI counters']
    },
    {
      title: 'Intersection Observer',
      description: 'Scroll-triggered animations',
      color: '#4ecdc4',
      examples: ['Lazy loading', 'Viewport detection', 'Progressive reveals']
    },
    {
      title: 'Lottie Animations',
      description: 'Complex vector animations',
      color: '#45b7d1',
      examples: ['Loading states', 'Micro-interactions', 'Brand animations']
    },
    {
      title: 'Particle Effects',
      description: 'Interactive background effects',
      color: '#96ceb4',
      examples: ['Neural networks', 'Data flows', 'AI visualizations']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};


  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl top-1/4 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl bottom-1/4 right-1/4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-4 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
          >
            Animation Powerhouse
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-4xl mx-auto"
          >
            Five industry-leading libraries working together to create experiences that feel alive, responsive, and uniquely Bionic.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Animated Statistics */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-h3 font-bold text-accent-primary mb-8 flex items-center space-x-2">
              <Zap className="w-6 h-6" />
              <span>Live Animation Demo</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  value: 87, 
                  suffix: '%', 
                  label: 'User Engagement',
                  description: 'Increase with animations'
                },
                { 
                  value: 340, 
                  suffix: 'ms', 
                  label: 'Animation Speed',
                  description: 'Optimal for performance'
                },
                { 
                  value: 12, 
                  suffix: 'fps', 
                  label: 'Smooth Rendering',
                  description: '60fps animations'
                },
                { 
                  value: 98, 
                  suffix: '%', 
                  label: 'Success Rate',
                  description: 'Flawless execution'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-bg-secondary rounded-xlarge border border-white/5 hover:border-accent-primary/50 transition-colors duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent-primary mb-2 group-hover:text-accent-secondary transition-colors duration-300"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: 'spring' }}
                  >
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={1 + index * 0.2}
                        suffix={stat.suffix}
                        useEasing={true}
                      />
                    )}
                  </motion.div>
                  <div className="text-sm font-medium text-text-primary mb-1">{stat.label}</div>
                  <div className="text-xs text-text-muted group-hover:text-accent-primary transition-colors duration-300">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Showcase */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <h3 className="text-h3 font-bold text-accent-primary mb-8 flex items-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <span>Motion Technologies</span>
            </h3>
            
            <div className="relative h-80 bg-bg-secondary rounded-xlarge border border-white/5 overflow-hidden">
              {/* Feature indicators */}
              <div className="absolute top-6 left-6 right-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg mb-3 transition-all duration-500 cursor-pointer ${
                      currentFeature === index 
                        ? 'bg-white/10 border border-white/20' 
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-text-primary">{feature.title}</h4>
                        <p className="text-sm text-text-muted">{feature.description}</p>
                      </div>
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: feature.color }}
                        animate={currentFeature === index ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated examples */}
              <motion.div
                key={currentFeature}
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-4 bg-black/20 rounded-lg">
                  <div className="text-xs text-text-muted mb-2">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {features[currentFeature].examples.map((example, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: `${features[currentFeature].color}20`,
                          color: features[currentFeature].color
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {example}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-4 p-8 bg-gradient-to-r from-bg-secondary to-bg-primary rounded-xlarge border border-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-left">
              <h4 className="text-h4 font-bold text-accent-primary mb-2">
                Ready to animate your enterprise?
              </h4>
              <p className="text-body text-text-muted mb-4">
                Transform your digital presence with cutting-edge motion design that captivates and converts.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Animation Journey</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-accent-primary/20"
            >
              <Rocket className="w-32 h-32" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};