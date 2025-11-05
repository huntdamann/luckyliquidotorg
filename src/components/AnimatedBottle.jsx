"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBottle() {
  const totalFrames = 120;
  const fps = 30;
  const cacheLimit = 15;
  const images = useRef(new Map());
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);

  const BASE_URL = "https://nrcmjxothukotcvjmndi.supabase.co/storage/v1/object/public/frames/";


  const getFrameSrc = (index) =>
    `${BASE_URL}${index.toString().padStart(4, "0")}.png`;

  const loadFrame = (index) =>
    new Promise((resolve) => {
      if (images.current.has(index)) {
        resolve(images.current.get(index));
        return;
      }
      const img = new Image();
      img.crossOrigin = "anonymous"; // important for Supabase public files

      img.src = getFrameSrc(index);
      img.onload = () => {
        if (images.current.size >= cacheLimit) {
          const oldestKey = images.current.keys().next().value;
          images.current.delete(oldestKey);
        }
        images.current.set(index, img);
        resolve(img);
      };
    });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to resize canvas dynamically
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1; // make sharp on retina screens
      const width = Math.min(window.innerWidth * 0.9, 600); // scale with screen
      const height = width; // keep square aspect ratio

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frame = 0;
    let lastTime = 0;
    const frameDuration = 1000 / fps;
    let animationId;

    const render = async (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (delta > frameDuration) {
        frame = (frame + 1) % totalFrames;
        currentFrameRef.current = frame;

        const img = await loadFrame(frame + 1);
        if (img && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
        }

        const preloadAhead = 3;
        for (let i = 1; i <= preloadAhead; i++) {
          const nextFrame = ((frame + i) % totalFrames) + 1;
          loadFrame(nextFrame);
        }

        lastTime = time;
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-8">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
