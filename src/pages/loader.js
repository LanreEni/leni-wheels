import { useEffect, useState } from "react";

export default function PageLoader({ onFinish }) {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
      if (onFinish) onFinish();
    }, 3000); // show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/showcasework.mp4"
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}
