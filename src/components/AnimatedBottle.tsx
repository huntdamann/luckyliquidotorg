"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBottle() {
  const totalFrames = 120;
  const fps = 30;
  const frameDuration = 1000 / fps;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(ImageBitmap | null)[]>([]);
  const BASE_URL =
    "https://nrcmjxothukotcvjmndi.supabase.co/storage/v1/object/public/frames/";

  const getFrameSrc = (index: number) =>
    `${BASE_URL}${index.toString().padStart(4, "0")}.png`;

  // Aggressively preload and decode all frames
  const preloadFrames = async () => {
    const promises: Promise<ImageBitmap | null>[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      const url = getFrameSrc(i);
      const promise = fetch(url)
        .then((res) => res.blob())
        .then((blob) => createImageBitmap(blob))
        .catch(() => null);
      promises.push(promise);
    }
    const bitmaps = await Promise.all(promises);
    framesRef.current = bitmaps;
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let frame = 0;
    let then = performance.now();

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = Math.min(window.innerWidth * 0.9, 600);
      const height = width;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let preloaded = false;

    const startAnimation = async () => {
      if (!preloaded) {
        await preloadFrames();
        preloaded = true;
      }

      const loop = (now: number) => {
        const delta = now - then;
        if (delta >= frameDuration) {
          then = now - (delta % frameDuration);
          const img = framesRef.current[frame];
          if (img) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
              img,
              0,
              0,
              canvas.width / (window.devicePixelRatio || 1),
              canvas.height / (window.devicePixelRatio || 1)
            );
          }
          frame = (frame + 1) % totalFrames;
        }
        animationId = requestAnimationFrame(loop);
      };

      animationId = requestAnimationFrame(loop);
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      framesRef.current.forEach((img) => img?.close?.());
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
