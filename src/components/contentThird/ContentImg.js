import React from 'react';
import Twitter from '../../img/image.png';
import { twitter } from '../../util/addresses';

const ContentImg = () => {
    return (
        <div className="loop">
            <p className="article">
                <span className="text-primary-span3">350 +</span>
                <span className="text-primary-span4">Woloxers</span>
            </p>
            <div className="container-twitter">
                <img src={Twitter} alt="Twitter" className="twitter" />
                <span>@Wolox</span>
            </div>
            <div>
                <a href={twitter} className="btn btn-complejo"> Siguenos </a>
            </div>
        </div>
    );
};

export default ContentImg;
