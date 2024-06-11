import Link from 'next/link'
import React from 'react'
import style from "@/styles/Navbar.module.css"
import Image from 'next/image'
import LogoCreame from "@/public/assets/LogoCreame.svg"

function Navbar() {
  return (
    <div className={style.navContainer}>
      <header className={style.header}>
        <div className={style.ImageContainer}>
          <Image
            src={LogoCreame}
            alt='LogoCreame.svg'
            className={style.Image}
          />
        </div>
        <div className={style.navLinks}>
          <Link className={style.link} href={"/"}>Inicio</Link>
          <Link className={style.link} href={"#Services"}>Servicios</Link>
          <Link className={style.link} href={"#Works"}>Trabajos</Link>
          <Link className={style.link} href={"#Testimonials"}>Opiniones</Link>
          <Link className={style.linkLetStart} href={"/LetStart"}>¿Empezamos?</Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
