import React from 'react';
import { Link } from 'react-router-dom';
import Logotipo from '../../img/logo_full_color.png';

const Nav = () => {
    return (
        <div className="style-img-login">
            <Link to="/landing-page">
                <img src={Logotipo} alt="Logo" className="render-logo" />
            </Link>
        </div>
    );
};

export default Nav;
