import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Login } from '../../actions/authActions';
import RegexEmail from '../../util/regex';

const Form = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.items.token);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [check, setCheck] = useState(false);
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState(false);

    const { email, password } = form;

    const verifyInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (email.length > 5 && !RegexEmail.test(email)) {
            setErrorEmail(true);
            return null;
        }
        if (password.length < 5) {
            setErrorPassword(true);
            return null;
        }
        setErrorEmail(false);
        setErrorPassword(false);
        dispatch(Login(form, check));
        if (token) {
            history.push('/');
        }
    };

    return (
        <div className="container-form">
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <div className="card-form">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="reset-form">
                        <label htmlFor="email" className="label">E-Mail:</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu E-Mail" className={`form-input-reset ${errorEmail ? 'error-input' : 'success-input'}`} value={email} onChange={(e) => verifyInput(e)} required />
                        {errorEmail ? (<span className="label-password">ingrese un E-Mail Valido</span>) : null}
                    </div>
                    <div className="reset-form">
                        <label htmlFor="password" className="label">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Ingresa tu Password" className={`form-input-reset ${errorPassword ? 'error-input' : 'success-input'}`} value={password} onChange={(e) => verifyInput(e)} required />
                        <span className="label-password">Mínimo 4 caracteres</span>
                    </div>
                    <div className="reset-form form-check">
                        <input type="checkbox" id="sesion" name="sesion" className="check" value={check} onClick={() => setCheck(!check)} />
                        <label htmlFor="sesion" className="label">mantenerse conectado</label>
                    </div>
                    <button type="submit" className="btn btn-style width-full btn-simple">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
