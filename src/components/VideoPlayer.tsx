import { useState, useRef, useEffect } from "react";

export const VideoPlayer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState("00:00");
  const videoRef = useRef<HTMLVideoElement>(null);

  const desktopSrc = "https://res.cloudinary.com/dvixq2oge/video/upload/v1774233001/samples/elephants.mp4";
  const mobileSrc = "https://res.cloudinary.com/dvixq2oge/video/upload/v1774233295/WhatsApp_Video_2026-02-08_at_14.08.20_jsdv4g.mp4";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration && !isNaN(duration)) {
        setProgress((current / duration) * 100);
        // Format MM:SS remaining
        const remaining = Math.max(0, duration - current);
        const mins = Math.floor(remaining / 60);
        const secs = Math.floor(remaining % 60);
        setTimeLeft(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
      }
    }
  };

  const handleUnmuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0; // Restart
      videoRef.current.play();
      setIsMuted(false);
      setHasInteracted(true);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 group">
      <video
        ref={videoRef}
        src={isMobile ? mobileSrc : desktopSrc}
        className={`w-full h-full object-cover ${isMobile ? 'aspect-[9/16]' : 'aspect-video'}`}
        autoPlay
        playsInline
        muted={isMuted} // Muted for autoplay
        loop
        onTimeUpdate={handleTimeUpdate}
        onContextMenu={handleContextMenu}
        controls={false}
      />

      {/* OVERLAY - Pulse para activar sonido */}
      {!hasInteracted && (
        <div 
          onClick={handleUnmuteClick}
          className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer z-10 transition-colors hover:bg-black/10"
        >
          <div className="bg-[#0b008d] border border-white rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center w-[280px] sm:w-[320px] shadow-[0_0_30px_rgba(0,0,255,0.4)] animate-[pulse_2s_ease-in-out_infinite] hover:scale-105 transition-transform">
            <p className="text-white font-semibold text-lg sm:text-xl mb-4">Pulse aquí</p>
            
            {/* Custom un-mute icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white mb-4" viewBox="0 0 24 24" fill="currentColor">
               {/* Speaker body */}
               <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
               {/* Cross lines */}
               <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
               <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
            </svg>
            
            <p className="text-white font-semibold text-lg sm:text-xl">para activar el sonido</p>
          </div>
        </div>
      )}

      {/* TIME LEFT (Top Right like in img1) */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-white font-mono font-bold text-xl z-0">
        {timeLeft}
      </div>

      {/* CUSTOM PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-white/20 z-0">
        <div 
          className="h-full bg-[#4f46e5] transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(79,70,229,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* INVISIBLE CLICK CATCHER TO PAUSE/PLAY (optional) */}
      {hasInteracted && (
        <div 
          className="absolute inset-0 z-0 cursor-pointer" 
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) videoRef.current.play();
              else videoRef.current.pause();
            }
          }}
        />
      )}
    </div>
  );
};
