import React, { useEffect, useState } from "react";

import Home from "./Home";
import * as colorsApi from "../../../api/colors/colors";
import { getColorValue } from "../../../api/colors/mappers";
import { useInputChange } from "../../utilites/useInputChange";

const initialColor = { hex: "#000", idx: 0 };

export default () => {
    const [title, changeTitle] = useInputChange("Awesome title");
    const [colors, pushColor] = useState([initialColor]);
    const [currentColor, updateCurrentColor ] = useState(initialColor);
    useEffect(() => {
        if (colors.length < 3) {
            colorsApi.getColor()
                .then(response => response.json())
                .then(colorDetails => {
                    const colorHex = getColorValue(colorDetails);
                    const color = { hex: colorHex, idx: colors.length };
                    pushColor([...colors, color])
                });
        }
    }, [colors, currentColor]);

    const changeCurrentColor = (colorIdx) => {
        let currentColor;
        if (colorIdx === initialColor.idx) {
            const randomColor = colors[Math.floor(Math.random() * 2) + 1];
            currentColor = randomColor;
        } else {
            const black = colors[initialColor.idx];
            currentColor = black;
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