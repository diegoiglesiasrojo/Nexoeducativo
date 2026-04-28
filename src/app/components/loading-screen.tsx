import { useEffect, useState } from "react";

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // La pantalla dura el tiempo de 2 ciclos de la barra (2 × 600ms) + 1s extra + fade
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 2400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-400"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
      }}
    >
      {/* Logo / texto */}
      <p className="mb-6 text-2xl font-semibold tracking-wide text-teal-600 dark:text-teal-400">
        Cargando...
      </p>

      {/* Barra de carga */}
      <div className="h-1.5 w-56 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-full rounded-full bg-teal-500 loading-bar" />
      </div>

      <style>{`
        @keyframes fillBar {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        .loading-bar {
          animation: fillBar 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
