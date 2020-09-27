const initialState = {
    item: [
        {
            id: 1,
            name: 'name',
        },
    ],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET':

        default:
            return state;
    }
};
