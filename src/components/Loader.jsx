import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Simula tu requestAnimationFrame + remove con timeout
    const id = requestAnimationFrame(() => setHidden(true));
    const t = setTimeout(() => setGone(true), 450);
    return () => { cancelAnimationFrame(id); clearTimeout(t); };
  }, []);

  if (gone) return null;
  return (
    <div className={`loader-screen ${hidden ? 'hidden' : ''}`} id="loader">
      <div className="loader" aria-label="Cargando" role="status"></div>
    </div>
  );
}
