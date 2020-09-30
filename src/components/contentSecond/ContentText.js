import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentText = () => {
    const { t } = useTranslation();
    return (
        <article className="article">
            <p className="text-content-primary">
                {t('content.thir.search')}
                <br />
                {t('content.thir.people')}
                <br />
                {t('content.thir.increi')}
                <br />
                {t('content.thir.tech')}:
            </p>
        </article>
    );
};

export default ContentText;
