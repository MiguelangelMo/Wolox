import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentText = () => {
    const { t } = useTranslation();
    return (
        <article className="article">
            <p className="text-content-primary-requerimientos">
                {t('nav.requ')}
            </p>
        </article>
    );
};

export default ContentText;
