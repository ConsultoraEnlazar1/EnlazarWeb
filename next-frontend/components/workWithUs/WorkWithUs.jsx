import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useRouter } from "next/router";
import WorkWithUsImage from "public/images/trabaja-con-nosotros.webp";
import { useContext, useState } from "react";
import WorkWithUsForm from "../forms/CVSubmissionForm";

const WorkWithUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const route = useRouter();
  const description = "Adjuntá tu CV y contanos un poco sobre vos.";
  const title = "¡Formá parte del team Enlazar!";

  const handleOpenCv = (e) => {
    e.preventDefault();
    if (session) {
      setIsOpen(true);
    } else {
      localStorage.setItem("pathname", "team#workWithUs");
      route.push("/auth");
    }
  };

  return (
    <div className="flex justify-center bg-grey lg:h-100vh xsm:flex xsm:justify-center xsm:flex-wrap xsm:items-center">
      <div className="xsm:w-11/12 xsm:py-6 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center lg:flex-row lg:justify-center lg:items-center">
        <Image
          className="w-[40%] lg:w-[26rem] rounded-full drop-shadow-lg"
          src={WorkWithUsImage}
          alt="Trabaja con nosotros"
          width="900"
          height="900"
        />
        <div className="lg:w-2/5 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center lg:pl-9 lg:items-start">
          <h2 className="text-3xl font-bold text-ellipsis opacity-90 xsm:py-6 lg:py-2 lg:text-left text-darkBlue whitespace-nowrap">
            ¡Trabajá con nosotros!
          </h2>
          <p className="text-dark lg:pb-6 xsm:pb-6 xsm:w-9/12 lg:w-full text-base lg:text-sm md:pt-12 lg:pt-6">
            Constantemente estamos ampliando nuestra red de profesionales. Si te
            sentís identificado/a con nuestra organización, podés dejarnos tu CV
            y lo tendremos en cuenta para futuras búsquedas.
          </p>
          <button
            className="bg-yellow rounded-full m-4 p-3 md:px-8 lg:py-2 lg:px-10 font-semibold uppercase xsm:self-center lg:self-start text-dark xsm:px-8 text-base lg:text-sm"
            onClick={handleOpenCv}
          >
            Cargar mi CV
          </button>
        </div>
      </div>
      {isOpen && (
        <WorkWithUsForm
          handleClose={setIsOpen}
          title={title}
          description={description}
        />
      )}
    </div>
  );
};

export default WorkWithUs;
