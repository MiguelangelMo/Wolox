import {
    LOGIN,
    CLOSESESSION,
    KEYWORD,
} from '../type';

const initialState = {
    token: localStorage.getItem('token'),
    session: localStorage.getItem('session'),
    item: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            if (action.payload.checkbox) {
                localStorage.setItem("session", action.payload.checkbox);
                localStorage.setItem("token", action.payload.token.token);
            }
            return {
                ...state,
                token: action.payload.token.token,
                session: action.payload.checkbox,
            };
        case CLOSESESSION:
            localStorage.removeItem("session");
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                session: null,
            };
        case KEYWORD:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};
