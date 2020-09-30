import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Nav from '../Login/Nav';
import Item from './Item';

const Items = () => {
    const { t } = useTranslation();
    const [input, setInput] = useState({
        search: '',
    });
    const [orders, setOrders] = useState("0");
    const { search } = input;
    const mapInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="row img-background-head">
            <Nav />
            <div className="row-content-second flex-start-y-spacex">
                <div className="render-start filtros">
                    <div>
                        <h2>{t('content.list.filter')}</h2>
                        <div className="reset-form form-check">
                            <input type="search" id="search" name="search" className="form-input-reset" placeholder={t('content.list.whatfilter')} value={search} onChange={(e) => mapInput(e)} />
                        </div>
                        <div className="reset-form form-check">
                            <h3>{t('content.list.order')}</h3>
                            <select name="orders" id="orders" className="form-input-reset" onChange={(e) => setOrders(e.target.value)}>
                                <option defaultValue="0">{t('content.list.selecc')}</option>
                                <option value={1}>{t('content.list.desc')}</option>
                                <option value={2}>{t('content.list.asc')}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Item search={search} orders={orders} />
            </div>
        </div>
    );
};

export default Items;
