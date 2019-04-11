import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";


const Home = ({
    colors,
    title,
    changeTitle,
    changeColor
}) => {

    return (
        <div>
            <h1>{title}</h1>
            {
                colors.map((color, idx) => (
                    <Box key={idx} color={color} />
                ))
            }
            <Button onClick={changeColor}>Change color</Button>
            <Input value={title} onChange={changeTitle} />
        </div>
    );
}

Home.propTypes = {
    colors: PropTypes.array,
    title: PropTypes.string,
    changeTitle: PropTypes.func,
    changeColor: PropTypes.func
};

Home.defaultProps = {
    colors: [],
    title: "Awesome title",
    changeTitle: () => {},
    changeColor: () => {}
}

export default Home;