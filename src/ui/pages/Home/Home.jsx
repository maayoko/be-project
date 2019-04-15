import React from "react";
import PropTypes from "prop-types";

import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";


const Home = ({
    colors,
    title,
    changeTitle,
    changeColor,
    currentColor
}) => (
    <div>
        <h1>{title}</h1>
        {
            colors.map((color, idx) => (
                <Box key={idx} color={color.hex} />
            ))
        }
        <Button onClick={() => changeColor(currentColor)}>Change color</Button>
        <Box color={currentColor.hex} />
        <Input value={title} onChange={changeTitle} />
    </div>
);

Home.propTypes = {
    colors: PropTypes.array,
    title: PropTypes.string,
    changeTitle: PropTypes.func,
    changeColor: PropTypes.func,
    currentColor: PropTypes.shape({
        hex: PropTypes.string,
        idx: PropTypes.number
    })
};

Home.defaultProps = {
    colors: [],
    title: "Awesome title",
    changeTitle: () => {},
    changeColor: () => {},
    currentColor: { hex: "#000", _id: 0 }
}

export default Home;