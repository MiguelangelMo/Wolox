import React from 'react';

const ContentImg = () => {
    const list = [
        {
            id: 1,
            title: 'Estudios avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos',
            style: 'list list-icono1',
        },
        {
            id: 2,
            title: 'Inglés intermedio/avanzado',
            style: 'list list-icono2',
        },
        {
            id: 3,
            title: 'Conocimientos en metodologías ágiles (deseable)',
            style: 'list list-icono3',
        },
    ];
    return (
        <ul className="render-start">
            {list.map((list) => (
                <li key={list.id} className={list.style}>{list.title}</li>
            ))}
        </ul>
    );
};

export default ContentImg;
