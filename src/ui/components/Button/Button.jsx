import React from "react";

const Button = ({
    children,
    onClick
}) => (
    <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => {}
}

export default Button;