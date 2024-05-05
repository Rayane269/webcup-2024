import React from "react";

type Props = {
  text: string,
  bgColor: string,
  textColor: string,
  handler?: () => void
}

const Button = ({ text, bgColor, textColor, handler = () => {} }: Props) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-1 px-4 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
