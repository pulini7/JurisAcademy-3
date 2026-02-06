import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) return;

      const scroll = totalScroll / windowHeight;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-slate-900/0 pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-100 ease-out relative"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        {/* Glowing tip of the progress bar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent to-white blur-[2px] opacity-70"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;