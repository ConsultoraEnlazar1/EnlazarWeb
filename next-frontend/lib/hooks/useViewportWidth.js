import React, { useEffect, useState } from "react";

const useViewportWidth = () => {
  // Inicializa el estado con un valor predeterminado, y luego lo actualiza si `window` está disponible.
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    // Asegúrate de que `window` esté definido antes de usarlo.
    if (typeof window !== "undefined") {
      // Establece el ancho inicial del viewport
      setViewportWidth(window.innerWidth);

      // Función para actualizar el ancho del viewport cuando la ventana cambia de tamaño
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      // Agrega un event listener para el evento 'resize'
      window.addEventListener("resize", handleResize);

      // Limpia el event listener cuando el componente se desmonta
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
