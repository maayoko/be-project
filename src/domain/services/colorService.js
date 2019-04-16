import Color from "../entities/Color";

const createColor = (colorOptions) => {
    const { hex = "", defaultColor = false } = colorOptions;

    return new Color(hex, defaultColor);
}

export {
    createColor
}