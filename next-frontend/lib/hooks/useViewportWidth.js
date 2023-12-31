import React, { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
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
  }, []);
  return viewportWidth;
};

export default useViewportWidth;
