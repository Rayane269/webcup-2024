import React from "react";

type Props = {
  text: string,
  bgColor: string,
  textColor: string,
  disabled?: boolean
  handler?: () => void
}

const Button = ({ disabled, text, bgColor, textColor, handler = () => {} }: Props) => {
  return (
    <button
      disabled={disabled ?? false}
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-1 px-4 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
