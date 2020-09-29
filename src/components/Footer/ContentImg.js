import React from 'react';
import Footer from '../../img/Ic_Wolox_Footer.png';
import { siteo } from '../../util/addresses';

const ContentImg = () => {
    return (
        <div className="footer">
            <div className="conocer">
                <p>
                    Gracias por
                    <span className="carita-picara">completar el ejercicio</span>
                </p>
                <p>
                    Te invitamos a ver mas información
                </p>
                <br />
                <a className="btn btn-complejo" href={siteo}>
                    Conocer más
                </a>
            </div>
            <div className="pie">
                <img src={Footer} alt="Logo pie de página" className="img-pie" />
            </div>
        </div>
    );
};

export default ContentImg;
