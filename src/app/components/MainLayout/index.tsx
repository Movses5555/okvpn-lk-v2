"use client";

import { useState } from "react";

import Image from "next/image";
import { Container } from "./styled";
import { PropsI } from "./types";
import { BsCreditCardFill, BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoExit } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

export const MainLayout = ({ children }: PropsI) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const logoutHandler = () => {
    if (window.confirm("Вы точно хотите выйти?")) {
      localStorage.removeItem("token");
      router.replace("/login");
    }
  };

  return (
    <Container>
      <div
        className={`mobile-hamburger-header ${openMobileMenu ? "closed" : ""}`}
      >
        <Image
          className="icon"
          src={"/icon.svg"}
          alt=""
          width={116}
          height={36}
        />
        <div className="hamburger" onClick={() => setOpenMobileMenu(true)}>
          <GiHamburgerMenu size={25} />
        </div>
      </div>
      <div className={`fade ${openMobileMenu ? "open" : "closed"}`}>
        <div onClick={() => setOpenMobileMenu(false)} className="close">
          <Image src="/fi-sr-cross.svg" width={24} height={24} alt="" />
        </div>
      </div>
      <div className={`sidebar ${openMobileMenu ? "open" : "closed"}`}>
        <div className="icon-container">
          <Image
            className="icon"
            src={"/icon.svg"}
            alt=""
            width={116}
            height={36}
          />
        </div>
        <ul className="navigation">
          <li
            onClick={() => router.push("/")}
            className={path === "/" ? "active" : ""}
          >
            <div className="icon">
              <BsCreditCardFill size={20} />
            </div>
            <p>Мои подписки</p>
          </li>
          <li
            onClick={() => router.push("/profile")}
            className={path === "/profile" ? "active" : ""}
          >
            <div className="icon">
              <BsPersonCircle size={20} />
            </div>
            <p>Профиль</p>
          </li>
        </ul>
        <div className="actions">
          <div onClick={() => logoutHandler()} className="action">
            <div className="icon">
              <IoExit size={20} />
            </div>
            <div className="title">Выйти</div>
          </div>
        </div>
      </div>
      <div className={`content ${openMobileMenu ? "blur" : ""}`}>
        {children}
      </div>
    </Container>
  );
};
