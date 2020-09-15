import React from "react";

interface Props {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    autoComplete = "off",
    value,
    handleChange
  } = props;
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Input;
