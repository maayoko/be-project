import http from "../../common/http";

const colorsUrl = "http://www.colr.org/json/color/random";

const getColor = () => {
    return http.get(colorsUrl);
}

export {
    getColor
}