import { useState } from "react";

const STORAGE_KEY = "cookie_consent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === null;
  });

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-[9998] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
        Usamos cookies para mejorar tu experiencia en el sitio. ¿Aceptás su uso?
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={handleReject}
          className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm text-gray-600 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Rechazar
        </button>
        <button
          onClick={handleAccept}
          className="rounded-lg bg-teal-500 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-teal-600"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
