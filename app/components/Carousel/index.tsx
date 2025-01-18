import { useEffect, useRef } from "react";
import Image from "next/image";

// Definir la interfaz para los equipos
interface Team {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
}

const FutbolCarousel360 = ({ teams }: { teams: Team[] }) => {
  return (
    <div className="overflow-hidden relative w-full h-fit">
      {" "}
      <div className="flex animate-scroll-infinite items-center">
        {teams.concat(teams).map((team, index) => (
          <div key={index} className="flex-shrink-0 mr-4">
            <Image
              src={team.image}
              alt={team.name}
              width={team.width}
              height={team.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutbolCarousel360;
