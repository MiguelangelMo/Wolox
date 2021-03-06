export default (data, order) => {
    let apiOrder = 0;
    if (order === 1) {
        apiOrder = data.sort((a, b) => {
            if (a.tech < b.tech) {
                return -1;
            }
            return 0;
        });
    }
    if (order === 2) {
        apiOrder = data.sort((a, b) => {
            if (a.tech > b.tech) {
                return -1;
            }
            return 0;
        });
    }
    return apiOrder;
};
