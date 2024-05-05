import React from "react";
import Input from "./Input";

type Props = {
  handleChange: () => void
}

const Price = ({ handleChange }: Props) => {
  return (
    <div>
      <h2 className="text-xl mb-3">Prix</h2>
      <div className="flex items-center gap-x-3">
        <label className="flex items-center gap-x-1">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
