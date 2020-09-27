import React from 'react';
import Logotipo from '../../img/logo_full_color.png';

const Logo = () => {
    return (
        <div className="space-col">
            <img src={Logotipo} alt="Logo" className="render-logo" />
        </div>
    );
};

export default Logo;
