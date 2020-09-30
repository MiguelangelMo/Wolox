import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentText = () => {
    const { t } = useTranslation();
    return (
        <article className="article f-shrink">
            <p className="text-content-primary">
                {t('content.sec.work')}
                <br />
                <span className="text-primary-span4">{t('content.sec.conv')}</span>
                &nbsp;
                <span className="text-primary-span3">{t('content.sec.idea')}</span>
                &nbsp;
                {t('content.sec.in')}
                <br />
                {t('content.sec.produc')}.
            </p>
        </article>
    );
};

export default ContentText;
