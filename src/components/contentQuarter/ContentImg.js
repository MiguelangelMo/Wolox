import React from 'react';
import { useTranslation } from 'react-i18next';
import Hour from '../../img/Ic_Hour_opt.png';
import HomeOffice from '../../img/Ic_HomeOffice_opt.png';
import Workshops from '../../img/Ic_Workshops_opt.png';
import DrinkSnacks from '../../img/Ic_DrinkSnacks_opt.png';
import Laptop from '../../img/Ic_laptop_opt.png';
import Brain from '../../img/Ic_brain_opt.png';

const ContentImg = () => {
    const { t } = useTranslation();
    const styleImg = 'galery';
    const styleLeg = 'legend';
    const galery = [
        {
            id: 1,
            img: Hour,
            legend: "content.quar.hour",
            styleImg,
            styleLeg,
        },
        {
            id: 2,
            img: HomeOffice,
            legend: "content.quar.home",
            styleImg,
            styleLeg,
        },
        {
            id: 3,
            img: Workshops,
            legend: "content.quar.capa",
            styleImg,
            styleLeg,
        },
        {
            id: 4,
            img: DrinkSnacks,
            legend: "content.quar.fruit",
            styleImg,
            styleLeg,
        },
        {
            id: 5,
            img: Laptop,
            legend: "content.quar.remote",
            styleImg: `${styleImg} lapto`,
            styleLeg,
        },
        {
            id: 6,
            img: Brain,
            legend: "content.quar.last",
            styleImg,
            styleLeg,
        },
    ];

    return (
        <>
            <div>
                <p>
                    {t('content.quar.benefind')}
                    <span className="carita-picara">;)</span>
                </p>
            </div>
            <figure className="container-galery">
                {galery.map((content) => (
                    <div key={content.id}>
                        <img src={content.img} alt={content.legend} className={content.styleImg} />
                        <figcaption className={content.styleLeg}>
                            {t(content.legend)}
                        </figcaption>
                    </div>
                ))}
            </figure>
            <hr />
        </>
    );
};

export default ContentImg;
