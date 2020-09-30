import React from 'react';
import { useTranslation } from 'react-i18next';
import Twitter from '../../img/image.png';
import { twitter } from '../../util/addresses';

const ContentImg = () => {
    const { t } = useTranslation();
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
                <a href={twitter} className="btn btn-complejo"> {t('content.sec.follow')} </a>
            </div>
        </div>
    );
};

export default ContentImg;
