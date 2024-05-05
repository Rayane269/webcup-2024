import React from "react"

type Props = {
  handleChange: () => void,
  value: string|number,
  title: string,
  name: string,
  color?: string
}

const Input = ({ handleChange, value, title, name, color }: Props) => {
  return (
    <label className="flex items-center gap-1">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default Input;