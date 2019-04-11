import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "../../components/Box";
import * as colorsApi from "../../../api/colors/colors";
import { getColorValue } from "../../../api/colors/mappers";

const Home = () => {
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

    return (
        <div>
            {
                colors.map((color, idx) => (
                    <Box key={idx} color={color} />
                ))
            }
        </div>
    );
}

export default Home;