import Base from "./Base";

class Color extends Base {
    constructor(hex = "", defaultColor = false) {
        super();
        this.hex = hex;
        this.default = defaultColor;
    }
}

export default Color;