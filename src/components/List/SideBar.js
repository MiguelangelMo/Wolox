import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SideBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        search: '',
    });
    const { search } = input;
    const mapInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="render-start filtros">
            <div>
                <h2>Filtros</h2>
                <div className="reset-form form-check">
                    <input type="search" id="search" name="search" className="form-input-reset" placeholder="¿Qué tecnología buscas?" value={search} onChange={(e) => mapInput(e)} />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
