import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
// eslint-disable-next-line no-use-before-define
/*eslint no-undef: "error"*/
function success() {
    return {
        type: 'SEND_DATA',
    };
}

function fetchData(data) {
    return (dispatch) => {
        return axios.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login', data).then(() => dispatch(success()));
    };
}

it('should execute fetch data', () => {
    const store = mockStore({});

    // Return the promise
    return store.dispatch(fetchData({ email: 'user@wolox.com.ar', password: '12345678' }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(success());
        });
});
