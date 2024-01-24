"use client";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "../card/CourseCard";
import diploma from "public/images/Diploma.png";
import BenefitCard from "../card/BenefitCard";
import ConsultationForm from "../forms/ConsultationForm";
import { useEffect, useState } from "react";
import useViewportWidth from "@/lib/hooks/useViewportWidth";

export const LearnWithUs = ({ courses, benefits }) => {
  const viewport = useViewportWidth();
  const benefitsWithUrl = benefits
    .filter((item) => item.link)
    .sort((a, b) => a.order - b.order);
  const benefitsWithoutUrl = benefits
    .filter((item) => !item.link)
    .sort((a, b) => a.order - b.order);
  const coursesMobile = courses.sort((a, b) => a.order - b.order);
  //Form component functions
  const [coursesDesktop, setCoursesDesktop] = useState([]);
  const [coursesMiddleScreen, setCoursesMiddleScreen] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [section, setSection] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (viewport && courses?.length) {
      const coursesOrdered = [...courses].sort(
        (a, b) => a.orderDesktop - b.orderDesktop
      );
      const coursesOrderedMiddle = [...courses].sort(
        (a, b) => a.orderMiddleScreen - b.orderMiddleScreen
      );

      setCoursesMiddleScreen(coursesOrderedMiddle);
    }
  }, [viewport]);

  const handleOpenForm = (e) => {
    e.preventDefault();
    setTitle(e.target.title);
    setSection(e.target.value);
    setOpenForm(true);
  };

  const handleCloseForm = (e) => {
    e.preventDefault();
    setTitle("");
    setOpenForm(false);
  };

  return (
    <>
      {openForm ? (
        <ConsultationForm
          handleCloseForm={handleCloseForm}
          section={section}
          title={title}
          setTitle={setTitle}
        />
      ) : null}

      <div className="bg-white w-full h-auto lg:min-h-screen flex flex-col justify-center items-center text-dark">
        <div className="flex justify-center items-center w-full h-auto bg-grey flex-col">
          <h2
            className="pt-16 px-4 md:px-8 font-bold text-center text-ellipsis sm:w-[80%] md:w-[60%] xl:w-[40%] "
            style={{
              fontSize: "clamp(1.2rem, 1.0264rem + 0.9256vw, 1.9rem)",
              // width: "clamp(28.125rem, 24.251rem + 20.6612vw, 43.75rem)",
            }}
          >
            Te contamos más sobre toda nuestra propuesta formativa en Recursos
            Humanos.
          </h2>
          <div className="w-[90%] max-w-7xl h-auto flex justify-center items-center pt-6 pb-6 md:pb-0">
            <p className="font-[500] text-center text-lg md:text-xl text-ellipsis">
              Todos nuestros cursos incluyen material de estudio complementario,
              clases sincrónicas y asincrónicas, certificado de aprobación al
              completar el curso, actividades prácticas para asimilar el
              conocimiento y una comunidad de aprendizaje para seguir
              conectados, resolver dudas y hacer networking.
            </p>
          </div>
        </div>
        <div className="w-full bg-grey flex flex-col justify-center items-center">
          <section className="flex flex-col flex-wrap justify-center items-center h-auto gap-6 px-6 py-6 w-full lg:relative lg:flex-row lg:justify-evenly lg:items-center lg:px-4 lg:py-10 bg-grey lg:bg-courses3 bg-top max-w-7xl">
            {viewport && viewport < 1024
              ? courses.map((course) => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    handleOpenForm={handleOpenForm}
                  />
                ))
              : coursesMiddleScreen &&
                coursesMiddleScreen.map((course) => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    handleOpenForm={handleOpenForm}
                  />
                ))}

            <div className="flex justify-center items-center w-full pt-4">
              <p className="font-semibold text-center text-xl sm:w-3/4 md:w-2/4 text-ellipsis">
                Consultá más sobre los próximos cursos de Recursos humanos,
                habilidades blandas y desarrollo profesional.
              </p>
            </div>
            <div className="flex justify-center items-center w-full pb-4">
              <p className="font-semibold text-center text-xl sm:w-3/4 md:w-2/4 text-ellipsis">
                Actualizamos el contenido y brindamos más cursos cada año.
              </p>
            </div>
          </section>
        </div>
        <section className="flex flex-col justify-center items-center p-6 md:p-12 flex-wrap">
          <h2
            className=" p-10 font-bold text-2xl text-center text-ellipsis md:text-3xl md:pb-12 border-t-2"
            style={{
              fontSize: "clamp(1.2rem, 1.0264rem + 0.9256vw, 1.9rem)",
            }}
          >
            ¡Este será tu certificado!
          </h2>
          <Image
            className="shadow-2xl outline-offset-8 "
            src={diploma}
            quality={100}
            style={{
              width: "clamp(25rem, 20.3512rem + 24.7934vw, 43.75rem)",
              height: "auto",
            }}
            alt="Consultora Enlazar Diploma"
          />
        </section>
        <section className="w-full h-auto bg-grey">
          <h2
            className="p-12 font-bold text-center text-ellipsis md:pb-10 border-t-2"
            style={{
              fontSize: "clamp(1.2rem, 1.0264rem + 0.9256vw, 1.9rem)",
            }}
          >
            Disfrutá de nuestros beneficios:
          </h2>
          <div className="flex flex-col p-5 md:flex-row flex-wrap justify-evenly items-center m-4">
            {benefitsWithUrl?.map((benefit) => {
              return (
                <Link
                  href={benefit.link.href}
                  target="_blank"
                  key={benefit._id}
                >
                  <BenefitCard
                    benefit={benefit}
                    handleOpenForm={handleOpenForm}
                  />
                </Link>
              );
            })}
            {benefitsWithoutUrl?.map((benefit) => {
              return (
                <BenefitCard
                  key={benefit._id}
                  benefit={benefit}
                  handleOpenForm={handleOpenForm}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
