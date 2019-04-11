import React from "react";
import PropTypes from "prop-types";

const Box = ({
    styles,
    color
}) => (
    <div style={{ backgroundColor: color }} className={styles.root}></div>
);

Box.propTypes = {
    color: PropTypes.string
};

Box.defaultProps = {
    color: "black"
};

export default Box;