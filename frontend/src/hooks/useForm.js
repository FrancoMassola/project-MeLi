import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};
