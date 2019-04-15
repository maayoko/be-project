import {createColor} from "../../domain/services/colorService";

const getColor = (response) => {
    return createColor({ hex: `#${response.new_color}` });
}

export {
    getColor
}