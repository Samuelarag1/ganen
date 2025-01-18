"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { Teko } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50) {
      setMenuOpen(true);
    }
    if (diffX < -50) {
      setMenuOpen(false);
    }

    setStartX(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data: session } = useSession();
  return (
    <div
      className="navbar border-b border-solid border-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="text-[4rem] text-shadow-green text-white">GANEN</h1>
      <div className="bg-[#AEF6C7] rounded-full h-14 w-14 text-center items-center flex justify-center border-black border-2 border-solid">
        <p>0 pts</p>
      </div>
      <div className="hamburger">
        <input
          className="checkbox"
          type="checkbox"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
          <path
            className="lineTop line"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="black"
            d="M6 11L44 11"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="black"
            d="M6 24H43"
            className="lineMid line"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="black"
            d="M6 37H43"
            className="lineBottom line"
          ></path>
        </svg>
      </div>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/home" className="nav-link" onClick={handleSmoothScroll}>
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="nav-link"
              onClick={handleSmoothScroll}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#clients"
              className="nav-link"
              onClick={handleSmoothScroll}
            >
              Clientes
            </a>
          </li>
          <li>
            <a href="#planes" className="nav-link" onClick={handleSmoothScroll}>
              Planes y precios
            </a>
          </li>
          <li>
            <a href="#faq" className="nav-link" onClick={handleSmoothScroll}>
              Preguntas Frequentes
            </a>
          </li>
          {session ? (
            <div className="flex gap-5 items-center">
              <button
                onClick={() => signIn("twitter")}
                className="bg-black border-solid border-white border-1 text-white p-2 rounded-full flex items-center gap-2"
              >
                Inicia sesión con <FaSquareXTwitter size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button onClick={() => signOut()}>Cerrar sesión</button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
