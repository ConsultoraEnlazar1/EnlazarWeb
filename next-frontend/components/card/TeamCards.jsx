import React from "react";
import MemberCard from "./MemberCard";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const TeamCards = (props) => {
  const [team, setTeam] = React.useState();
  React.useEffect(() => {
    setTeam(props.team.sort(() => Math.random() - 0.5));
  }, []);
  return (
    <div className="bg-blue flex justify-center">
      <div className="flex flex-wrap w-full sm:justify-center lg:justify-start lg:py-12">
        <div className="lg:pb-5 flex self-start justify-center w-screen ml-4 sm:ml-12 sm:w-[90%] lg:w-3/4">
          <h3 className="py-12 text-[1.4rem] min-[790px]:max-lg:w-full  w-3/4  md:text-2xl font-semibold text-left text-ellipsis opacity-90 text-yellow">
            Detrás de todo gran proyecto hay grandes personas y profesionales.
            <br></br>Queremos que conozcas a nuestro gran equipo.
          </h3>
        </div>
        <div className="flex justify-center w-screen m-2 sm:w-[90%] md:m-auto lg:w-3/4 ">
          <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-8 pb-8 justify-center w-auto">
            {!team
              ? Array.from(new Array(6)).map((item, index) => (
                  <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                    <Skeleton variant="rectangular" width={210} height={200} />
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                ))
              : team.map((member, index) => (
                  <MemberCard
                    key={member._id}
                    image={member.photo}
                    name={member.name}
                    jobFirstLine={member.jobFirstLine}
                    jobSecondLine={member.jobSecondLine}
                  ></MemberCard>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
