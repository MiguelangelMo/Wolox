import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../img/Ic_Wolox_Footer.png';
import { siteo } from '../../util/addresses';

const ContentImg = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="conocer">
                <p>
                    {t('content.one.than')}
                    <span className="carita-picara">{t('content.one.completed')}</span>
                </p>
                <p>
                    {t('content.one.info')}
                </p>
                <br />
                <a className="btn btn-complejo" href={siteo}>
                    {t('content.one.know')}
                </a>
            </div>
            <div className="pie">
                <img src={Footer} alt="Logo pie de página" className="img-pie" />
            </div>
        </div>
    );
};

export default ContentImg;
