import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentText = () => {
    const { t } = useTranslation();
    return (
        <article className="article">
            <p className="text-content-primary">
                <span>{t('content.fif.wel')}</span>
                <br />
                <span className="text-primary-span2">{t('content.fif.tec')} </span>
                {t('content.sec.in')}
                <br />
                <span className="text-primary-span3">Wolox</span>
            </p>
        </article>
    );
};

export default ContentText;
