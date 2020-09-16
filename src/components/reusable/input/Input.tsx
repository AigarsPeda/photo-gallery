import React from "react";

interface Props {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
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
    labelClassName,
    inputClassName,
    name,
    type,
    placeholder,
    autoComplete = "off",
    value,
    handleChange
  } = props;
  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <input
        className={inputClassName}
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
