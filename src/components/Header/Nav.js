import React from 'react';

const Nav = () => {
    const btnSimple = "btn btn-simple";
    const btnComplejo = "btn btn-complejo";
    // const display_none = "d-none";
    const buttons = [
        {
            title: 'Inicio',
            style: btnSimple,
            link: '/',
            id: 1,
        },
        {
            title: 'Tecnologías',
            style: btnSimple,
            link: '#tecnology',
            id: 2,
        },
        {
            title: 'Beneficios',
            style: btnSimple,
            link: '#benefits',
            id: 3,
        },
        {
            title: 'Requerimientos',
            style: btnSimple,
            link: '#requirements',
            id: 4,
        },
        {
            title: 'Login',
            style: btnComplejo,
            link: '#',
            id: 5,
        },
    ];

    return (
        <div className="space-button" data-animation="center">
            {buttons.map((btn) => (
                <a href={btn.link} alt={btn.title} key={btn.id} className={btn.style}>
                    {btn.title}
                </a>
            ))}
        </div>
    );
};

export default Nav;
