import React from 'react'
import style from "@/styles/FirstSection.module.css"
import PrinterImg from "@/public/assets/ImgHome.svg"
import Image from 'next/image'

function FirstSection() {
    return (
        <div className={style.FirstSectionContainer}>
            <div className={style.TextBtnContainer}>
                <div className={style.TextContainer}>
                    <h1 className={style.TopText}>Personalización Creativa: <br /> Tu Estilo, Nuestro Arte</h1>
                    <p className={style.SecondText}> Impresiona con tu Estilo Único! Descubre Nuestro Increíble Negocio de Impresión Personalizada, donde podrás transformar tus ideas en <br/> realidades tangibles.</p>
                </div>
                <button className={style.PrimaryButton}>Iniciemos</button>
            </div>
            <div className={style.PrinterImgContainer}>
                <Image
                    src={PrinterImg}
                    alt='Printer Image'
                    className={style.PrinterImg}
                />
            </div>
            <div className={style.StatisticsContainer}>
                <div>
                    <h1>2+</h1>
                    <p>Años de experiencia</p>
                </div>
                <div>
                    <h1>30+</h1>
                    <p>Proyectos completados</p>
                </div>
                <div>
                    <h1>15+</h1>
                    <p>Clientes satisfechos</p>
                </div>
            </div>
        </div>
    )
}

export default FirstSection
