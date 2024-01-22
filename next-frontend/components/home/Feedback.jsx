"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from "framer-motion";
// import "tailwindcss/tailwind.css";

// Inicio: Mejorar los datos y la forma de mostrarlos, (más dinámico y mejor visualmente) “Lo de + de tantos alumnos”, etc, etc. Nuevos datos: + de 15 personas en nuestro equipo. + de 10 cursos y 2000 inscriptos. + de 10 empresas capacitadas. + de 900 personas confiaron en nuestros servicios y recursos. + de 5 alianzas y partners. + de 90 mil seguidores en nuestras redes sociales.

export const Feedback = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const isInView = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  const isInView6 = useInView(ref6);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);

  const cardVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 10,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 15, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView2) {
      const controls = animate(0, 2000, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter2(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView2]);
  useEffect(() => {
    if (isInView3) {
      const controls = animate(0, 10, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter3(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView3]);
  useEffect(() => {
    if (isInView4) {
      const controls = animate(0, 900, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter4(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView4]);
  useEffect(() => {
    if (isInView5) {
      const controls = animate(0, 5, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter5(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView5]);
  useEffect(() => {
    if (isInView6) {
      const controls = animate(0, 90000, {
        duration: 2.5, // Duración de la animación en segundos
        onUpdate: (latest) => {
          setCounter6(Math.round(latest)); // Actualizar el estado con el último valor
        },
      });

      return () => controls.stop();
    }
  }, [isInView6]);

  return (
    <div className="w-full h-auto  bg-blue  text-white mx-auto ">
      <h2
        className="pt-10 px-6 md:px-8 font-bold text-center text-ellipsis opacity-90"
        style={{
          fontSize: "clamp(1.25rem, 1.064rem + 0.9256vw, 1.8rem)",
        }}
      >
        Te acompañamos siempre.
      </h2>
      <h2
        style={{
          fontSize: "clamp(1.25rem, 1.064rem + 0.9917vw, 2rem)",
        }}
        className="font-bold text-center text-ellipsis opacity-90 text-yellow"
      >
        ¡Garantizamos tu aprendizaje!
      </h2>

      <div className="flex justify-center items-center bg-blue text-dark p-4 md:p-12 flex-wrap gap-4">
        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref1}
        >
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/icono-empresas-seleccion-personal.svg"
              width={55}
              height={55}
              quality={100}
            />
            <motion.h1 className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm">
              +{counter}
            </motion.h1>
            <p className="text-lg font-[500] m-0 text-center">
              Personas en nuestro
              <br />
              equipo.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref2}
        >
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/logos-empresas/registrarse.png"
              width={55}
              height={55}
              quality={100}
            />
            <h3 className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm">
              +{counter2}
            </h3>
            <p className="text-lg font-[500] m-0 text-center">
              Inscriptos a nuestros
              <br />
              cursos.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref3}
        >
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/icono-empresas-formacion-desarrollo.svg"
              width={55}
              height={55}
              quality={100}
            />
            <h3 className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm">
              +{counter3}
            </h3>
            <p className="text-lg font-[500] m-0 text-center">
              Empresas <br /> capacitadas.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref4}
        >
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/icono-particulares-acompañamiento-capacidades-dif.svg"
              width={55}
              height={55}
              quality={100}
            />
            <h3 className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm">
              +{counter4}
            </h3>
            <p className="text-lg font-[500] m-0 text-center">
              Personas que confiaron <br /> en nuestros servicios y recursos.
            </p>
          </div>
        </motion.div>

        {/* <div className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto">
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/logos-empresas/cero.png"
              width={55}
              height={55}
              quality={100}
            />
            <h3 className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm">+900</h3>
            <p className="text-lg font-[500] m-0 text-center">Personas en nuestra comunidad.</p>
          </div>
        </div> */}

        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 mb-6 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref5}
        >
          {/* <div className="w-40 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative"> */}
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/logos-empresas/cinco.png"
              width={55}
              height={55}
              quality={100}
            />
            <h3
              className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm"
              style={{ lineHeight: "1.2" }}
            >
              +{counter5}
            </h3>
            <p className="text-lg font-[500] m-0 text-center">
              Alianzas y <br /> partners.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center text-center md:m-4 mt-10 mb-6 w-full md:w-auto bg-slate-100 p-4 rounded-3xl outline-offset-8"
          style={{ boxShadow: "20px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          ref={ref6}
        >
          {/* <div className="w-40 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative"> */}
          <div className="relative w-48 h-48 flex flex-col justify-start items-center gap-2 ">
            <Image
              alt="uno"
              src="/images/logos-empresas/rud.png"
              width={55}
              height={55}
              quality={100}
            />
            <h3
              className="text-5xl font-bold m-0 opacity-90 text-yellow drop-shadow-sm"
              style={{ lineHeight: "1.2" }}
            >
              +{counter6}
            </h3>
            <p className="text-lg font-[500] m-0 text-center">
              Seguidores en
              <br />
              nuestras redes sociales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
