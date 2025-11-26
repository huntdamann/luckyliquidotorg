"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function AnimatedBottle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect when the container (not the video) is in view
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px -100px 0px" });

  const [hasPlayed, setHasPlayed] = useState(false);

  const VIDEO_URL =
    "https://nrcmjxothukotcvjmndi.supabase.co/storage/v1/object/public/videos/test_0000001-0120.webm";
  const FIRST_FRAME_URL =
    "https://nrcmjxothukotcvjmndi.supabase.co/storage/v1/object/public/frames/0001.png";

  // Play video once when container is in view
  useEffect(() => {
    if (isInView && videoRef.current && !hasPlayed) {
      videoRef.current.play().catch(() => {});
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center w-full py-8"
      style={{ minHeight: "400px", maxWidth: "1800px" }} // optional spacing for visibility
    >
      {/* First frame overlay */}
      <AnimatePresence>
        {!hasPlayed && (
          <motion.img
            src={FIRST_FRAME_URL}
            alt="Starting frame"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ width: "100%", height: "auto", zIndex: 1 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          />
        )}
      </AnimatePresence>

      {/* Video */}
      <motion.video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        loop={false}
        className="relative"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "1000px", // optional max width
          zIndex: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hasPlayed ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
