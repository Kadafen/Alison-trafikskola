import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/data/stats';

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  duration: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix, duration }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView || !counterRef.current) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      if (counterRef.current) {
        const currentValue = Math.floor(progress * value);
        counterRef.current.textContent = `${currentValue}${suffix}`;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else if (counterRef.current) {
        counterRef.current.textContent = `${value}${suffix}`;
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, suffix, duration, isInView]);
  
  return (
    <div 
      ref={containerRef}
      className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div 
        ref={counterRef} 
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
      >
        0{suffix}
      </div>
      <div className="text-lg text-slate-600">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Siffror som talar för sig själva
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vi är stolta över våra resultat och det förtroende våra elever har för oss
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <StatItem
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Med över 1250 nöjda elever och en godkännandegrad på 92% på första försöket, 
            kan du lita på att du är i goda händer när du väljer Allis Trafikskola.
          </p>
          <div className="inline-flex justify-center">
            <a 
              href="/contact" 
              className="btn btn-primary text-lg px-8 py-3"
            >
              Bli nästa framgångshistoria
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;