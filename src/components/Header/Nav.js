import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { changeLenguage } from '../../actions/authActions';

const Nav = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.items.token);
    const lng = useSelector((state) => state.items.lenguage);
    const [lenguage, setLenguage] = useState(false);
    const { t, i18n } = useTranslation();
    const btnSimple = "btn btn-simple";
    const btnComplejo = "btn btn-complejo";
    const dnone = 'd-none';

    useEffect(() => {
        dispatch(changeLenguage(lenguage));
        if (lng) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('es');
        }
    }, [lenguage]);

    const buttons = [
        {
            style: btnSimple,
            link: '/',
            id: 1,
            translator: 'nav.start',
        },
        {
            style: btnSimple,
            link: '#tecnology',
            id: 2,
            translator: 'nav.tech',
        },
        {
            style: btnSimple,
            link: '#benefits',
            id: 3,
            translator: 'nav.bene',
        },
        {
            style: btnSimple,
            link: '#requirements',
            id: 4,
            translator: 'nav.requ',
        },
    ];

    return (
        <div className="space-button" data-animation="center">
            <button className="btn btn-empty" type="button" onClick={() => setLenguage(!lenguage)}>
                {t('nav.global.language')}
            </button>
            {buttons.map((btn) => (
                <a href={btn.link} alt={btn.title} key={btn.id} className={btn.style}>
                    {t(btn.translator)}
                </a>
            ))}
            <Link className={btnComplejo} to={typeof (token) === 'undefined' || !token ? '/login' : '/'}>
                {typeof (token) === 'undefined' || !token
                    ? t('nav.login')
                    : t('nav.tools')}
            </Link>
        </div>
    );
};

export default Nav;
