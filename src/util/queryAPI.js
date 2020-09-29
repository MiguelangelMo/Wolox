export default (data, word) => {
    let query = [];
    if (word.length > 0) {
        data.forEach((resp) => {
            const tech = resp.tech.toLowerCase();
            const type = resp.type.toLowerCase();
            const language = resp.language.toLowerCase();
            if (tech.indexOf(word) !== -1
                || type.indexOf(word) !== -1
                || language.indexOf(word) !== -1) {
                query = query.concat(resp);
            }
        });
        return query;
    }
    return data;
};
