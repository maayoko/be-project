import http from "../common/http";

const getColor = () => {
    return http.get("http://www.colr.org/json/color/random");
}

export {
    get
}