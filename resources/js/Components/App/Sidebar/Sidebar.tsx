import React from "react"
import Category from "./Category";
import Price from "./Price";

type Props = {
  handleChange: () => void
}

const Sidebar = ({ handleChange }: Props) => {
  return (
    <div className="px-5 py-3 mx-3 mb-10 bg-slate-100 rounded-md">
      <section className="">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;
