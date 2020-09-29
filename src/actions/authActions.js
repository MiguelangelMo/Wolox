import axios from 'axios';
import {
    LOGIN,
    CLOSESESSION,
    KEYWORD,
} from '../type';
import queryAPI from '../util/queryAPI';
import orderApi from '../util/orderApi';

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

export const keywordSearch = (word, num) => {
    return async (dispatch) => {
        const api = await axios.get('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs');
        const queryApi = queryAPI(api.data, word);
        const order = orderApi(queryApi, num);
        dispatch({
            type: KEYWORD,
            payload: num === 1 || num === 2 ? order : queryApi,
        });
    };
};
