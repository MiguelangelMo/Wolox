import axios from 'axios';
import {
    LOGIN,
    CLOSESESSION,
    LIST,
} from '../type';

export const Login = (data, checkbox) => {
    return async (dispatch) => {
        const api = await axios.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login', data);
        const response = {
            token: api.data,
            checkbox,
        };
        dispatch({
            type: LOGIN,
            payload: response,
        });
    };
};

export const closeSesion = () => {
    return (dispatch) => {
        dispatch({
            type: CLOSESESSION,
        });
    };
};

export const List = () => {
    return async (dispatch) => {
        const api = await axios.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs');
        dispatch({
            type: LIST,
            payload: api.data,
        });
    };
};
