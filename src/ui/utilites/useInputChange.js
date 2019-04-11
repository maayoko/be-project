import { useState } from "react";

const useInputChange = (initialValue) => {
    const [value, updateValue] = useState(initialValue);

    const onChange = (e) => {
        updateValue(e.target.value);
    }

    return [value, onChange];
};

export { useInputChange }