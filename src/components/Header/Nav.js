import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
    const token = useSelector((state) => state.items.token);
    const btnSimple = "btn btn-simple";
    const btnComplejo = "btn btn-complejo";
    const dnone = 'd-none';

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
            link: /*'#tecnology'*/ '/',
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
            title: typeof (token) === 'undefined' || !token ? 'Login' : 'Salir',
            style: typeof (token) === 'undefined' || !token ? btnComplejo : dnone,
            link: '/login',
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
