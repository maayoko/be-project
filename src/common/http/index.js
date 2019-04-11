const fetch = fetch;

const get = (url, headers = {}) => {
    return fetch(url, headers);
}

export default {
    get
}