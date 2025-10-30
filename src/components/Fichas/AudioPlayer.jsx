// src/components/Fichas/AudioPlayer.jsx
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ src, auto = true }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(!auto); // si auto, esperamos interacción

  useEffect(() => {
    if (!auto) return;
    
    const onFirstInteract = () => {
      setReady(true);
      setTimeout(() => ref.current?.play?.(), 0);
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("touchstart", onFirstInteract);
    };
    window.addEventListener("click", onFirstInteract, { once: true });
    window.addEventListener("touchstart", onFirstInteract, { once: true });
    return () => {
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("touchstart", onFirstInteract);
    };
  }, [auto, src]); // reinicia si cambia src

  if (!src) return null;

  return (
    <div className="audio-player-container">
      <audio
        key={src}              
        ref={ref}
        controls
        className="audio-player"
        {...(ready ? { autoPlay: true } : {})}
      >
        <source src={src} type="audio/mpeg" />
      </audio>
      <center><label>Audio descriptivo</label></center>
    </div>
  );
}
