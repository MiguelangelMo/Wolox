import React from 'react';
import Hour from '../../img/Ic_Hour_opt.png';
import HomeOffice from '../../img/Ic_HomeOffice_opt.png';
import Workshops from '../../img/Ic_Workshops_opt.png';
import DrinkSnacks from '../../img/Ic_DrinkSnacks_opt.png';
import Laptop from '../../img/Ic_laptop_opt.png';
import Brain from '../../img/Ic_brain_opt.png';

const ContentImg = () => {
    const styleImg = 'galery';
    const styleLeg = 'legend';
    const galery = [
        {
            id: 1,
            img: Hour,
            legend: "Flexibilidad Horario",
            styleImg,
            styleLeg,
        },
        {
            id: 2,
            img: HomeOffice,
            legend: "Home Office",
            styleImg,
            styleLeg,
        },
        {
            id: 3,
            img: Workshops,
            legend: "Capacitaciones y workshops",
            styleImg,
            styleLeg,
        },
        {
            id: 4,
            img: DrinkSnacks,
            legend: "Snacks, frutas y bebidas gratis",
            styleImg,
            styleLeg,
        },
        {
            id: 5,
            img: Laptop,
            legend: "Semana Remota",
            styleImg: `${styleImg} lapto`,
            styleLeg,
        },
        {
            id: 6,
            img: Brain,
            legend: "Trabajo en últimas tecnologías",
            styleImg,
            styleLeg,
        },
    ];

    return (
        <>
            <div>
                <p>
                    Entre los beneficios que ofrecemos se encuentran
                    <span className="carita-picara">;)</span>
                </p>
            </div>
            <figure className="container-galery">
                {galery.map((content) => (
                    <div key={content.id}>
                        <img src={content.img} alt={content.legend} className={content.styleImg} />
                        <figcaption className={content.styleLeg}>
                            {content.legend}
                        </figcaption>
                    </div>
                ))}
            </figure>
            <hr />
        </>
    );
};

export default ContentImg;
