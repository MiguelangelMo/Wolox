import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentImg = () => {
    const { t } = useTranslation();
    const list = [
        {
            id: 1,
            title: 'content.six.avaz',
            style: 'list list-icono1',
        },
        {
            id: 2,
            title: 'content.six.ia',
            style: 'list list-icono2',
        },
        {
            id: 3,
            title: 'content.six.metho',
            style: 'list list-icono3',
        },
    ];
    return (
        <ul className="render-start">
            {list.map((list) => (
                <li key={list.id} className={list.style}>{t(list.title)}</li>
            ))}
        </ul>
    );
};

export default ContentImg;
