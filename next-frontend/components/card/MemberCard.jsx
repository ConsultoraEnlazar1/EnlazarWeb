import useViewportWidth from "@/lib/hooks/useViewportWidth";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const MemberCard = ({ name, image, jobFirstLine, jobSecondLine }) => {
  const viewport = useViewportWidth();
  return (
    <div className="box-border py-4 px-2 w-auto sm:w-56 text-white flex flex-col justify-start items-center">
      <Image
        src={urlFor(image).url()}
        className="w-32 md:w-48 rounded-full shadow-2xl mx-auto"
        alt="Foto de perfil"
        width="800"
        height="800"
      ></Image>
      <p className="text-center font-bold pt-4">{name}</p>
      <p className="text-center w-32 sm:w-auto">
        {jobFirstLine.toLowerCase().includes("full stack") && viewport <= 640
          ? `${jobFirstLine} Dev.`
          : jobFirstLine}
      </p>
      <p className="text-center hidden sm:block">{jobSecondLine}</p>
    </div>
  );
};

export default MemberCard;
