import React, { useEffect, useState } from "react";

import Home from "./Home";
import * as colorsApi from "../../../api/colors/colors";
import { getColor } from "../../../api/colors/mappers";
import { useInputChange } from "../../utilites/useInputChange";
import { createColor } from "../../../domain/services/colorService";

const initialColor = createColor({ hex: "#000", defaultColor: true });

export default () => {
    const [title, changeTitle] = useInputChange("Awesome title");
    const [colors, pushColor] = useState([initialColor]);
    const [currentColor, updateCurrentColor ] = useState(initialColor);
    useEffect(() => {
        if (colors.length < 3) {
            colorsApi.getColor()
                .then(response => response.json())
                .then(colorDetails => {
                    const color = getColor(colorDetails);
                    pushColor([...colors, color])
                });
        }
    }, [colors, currentColor]);

    const changeCurrentColor = (color) => {
        let currentColor;
        
        if (color.default) {
            const randomColor = colors[Math.floor(Math.random() * 2) + 1];
            currentColor = randomColor;
        } else {
            currentColor = initialColor;
        }

        updateCurrentColor(currentColor);
    }

    return <Home 
        currentColor={currentColor} 
        title={title} 
        changeColor={changeCurrentColor}
        changeTitle={changeTitle} 
        colors={colors} />
};