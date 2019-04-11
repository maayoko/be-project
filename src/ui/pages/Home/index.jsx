import React, { useEffect, useState } from "react";

import Home from "./Home";
import * as colorsApi from "../../../api/colors/colors";
import { getColorValue } from "../../../api/colors/mappers";
import { useInputChange } from "../../utilites/useInputChange";

export default () => {
    const [title, changeTitle] = useInputChange("Awesome title");
    const [colors, pushColor] = useState([]);
    useEffect(() => {
        if (colors.length < 2) {
            colorsApi.getColor()
                .then(response => response.json())
                .then(colorDetails => {
                    const color = getColorValue(colorDetails);
                    pushColor([...colors, color])
                });
        }
    }, [colors]);

    return <Home title={title} changeTitle={changeTitle} colors={colors} />
};