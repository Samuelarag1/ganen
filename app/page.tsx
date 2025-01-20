"use client";

import { signOut, useSession } from "next-auth/react";
import FutbolCarousel360 from "./components/Carousel";
import Navbar from "./components/Navigation";
import Image from "next/image";

const teams = [
  {
    id: 0,
    name: "Boca Juniors",
    image: "/static/teams/1.png",
    width: 20,
    height: 20,
  },
  {
    id: 1,
    name: "River Plate",
    image: "/static/teams/2.png",
    width: 20,
    height: 20,
  },
  {
    id: 2,
    name: "Equipo 3",
    image: "/static/teams/3.png",
    width: 20,
    height: 20,
  },
  {
    id: 3,
    name: "Equipo 4",
    image: "/static/teams/4.png",
    width: 20,
    height: 20,
  },
  {
    id: 4,
    name: "Equipo 5",
    image: "/static/teams/5.png",
    width: 20,
    height: 20,
  },
  {
    id: 5,
    name: "Equipo 6",
    image: "/static/teams/6.png",
    width: 20,
    height: 20,
  },
  {
    id: 6,
    name: "Equipo 7",
    image: "/static/teams/7.png",
    width: 20,
    height: 20,
  },
  {
    id: 7,
    name: "Equipo 8",
    image: "/static/teams/8.png",
    width: 20,
    height: 20,
  },
  {
    id: 8,
    name: "Equipo 9",
    image: "/static/teams/9.png",
    width: 20,
    height: 20,
  },
  {
    id: 9,
    name: "Equipo 10",
    image: "/static/teams/10.png",
    width: 20,
    height: 20,
  },
  {
    id: 10,
    name: "Equipo 11",
    image: "/static/teams/11.png",
    width: 20,
    height: 20,
  },
  {
    id: 11,
    name: "Equipo 12",
    image: "/static/teams/12.png",
    width: 20,
    height: 20,
  },
  {
    id: 12,
    name: "Equipo 13",
    image: "/static/teams/13.png",
    width: 20,
    height: 20,
  },
  {
    id: 13,
    name: "Equipo 14",
    image: "/static/teams/14.png",
    width: 20,
    height: 20,
  },
  {
    id: 14,
    name: "Equipo 15",
    image: "/static/teams/15.png",
    width: 20,
    height: 20,
  },
  {
    id: 15,
    name: "Equipo 16",
    image: "/static/teams/16.png",
    width: 20,
    height: 20,
  },
  {
    id: 16,
    name: "Equipo 17",
    image: "/static/teams/17.png",
    width: 20,
    height: 20,
  },
  {
    id: 17,
    name: "Equipo 18",
    image: "/static/teams/18.png",
    width: 20,
    height: 20,
  },
  {
    id: 18,
    name: "Equipo 19",
    image: "/static/teams/19.png",
    width: 20,
    height: 20,
  },
  {
    id: 19,
    name: "Equipo 20",
    image: "/static/teams/20.png",
    width: 20,
    height: 20,
  },
  {
    id: 20,
    name: "Equipo 21",
    image: "/static/teams/21.png",
    width: 20,
    height: 20,
  },
  {
    id: 21,
    name: "Equipo 22",
    image: "/static/teams/22.png",
    width: 20,
    height: 20,
  },
  {
    id: 22,
    name: "Equipo 23",
    image: "/static/teams/23.png",
    width: 20,
    height: 20,
  },
  {
    id: 23,
    name: "Equipo 24",
    image: "/static/teams/24.png",
    width: 20,
    height: 20,
  },
  {
    id: 24,
    name: "Equipo 25",
    image: "/static/teams/25.png",
    width: 20,
    height: 20,
  },
  {
    id: 25,
    name: "Equipo 26",
    image: "/static/teams/26.png",
    width: 20,
    height: 20,
  },
  {
    id: 26,
    name: "Equipo 27",
    image: "/static/teams/27.png",
    width: 20,
    height: 20,
  },
  {
    id: 27,
    name: "Equipo 28",
    image: "/static/teams/28.png",
    width: 20,
    height: 20,
  },
];

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Navbar />
        <main className="w-full flex items-center justify-around py-10">
          <div className="text-white text-center mt-12">
            {!session ? <p>¡Inicia sesión para comenzar a jugar!</p> : ""}
            <div className="h-10 bg-black/50 flex items-center lg:h-20">
              <FutbolCarousel360 teams={teams} />
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="w-full flex items-center justify-around">
        {/* <h1 className="text-[5rem] text-shadow-green text-white">GANEN</h1> */}
        <div className="flex items-center justify-center gap-2 py-10">
          <div className="flex items-center gap-2">
            <p>{session.user?.name || "Nombre no disponible"}</p>
            <Image
              src={session.user?.image || "/default-avatar.jpg"}
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => signOut()}>Cerrar sesión</button>
        </div>
      </main>
    </>
  );
}
