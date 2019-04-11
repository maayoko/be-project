import React from "react";
import PropTypes from "prop-types";

const Input = ({
    onChange,
    placeholder,
    value
}) => {
    return <input value={value} placeholder={placeholder} onChange={onChange} />;
};

Input.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

Input.defaultProps = {
    onChange: () => {},
    placeholder: ""
}

export default Input;