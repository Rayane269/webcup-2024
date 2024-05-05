import React from "react"
import Input from "./Input"

type Props = {
  handleChange: () => void
}

function Category({ handleChange }: Props) {
  return (
    <div className="mb-5">
      <h2 className="text-xl mb-3">Category</h2>
      <div className="flex items-center gap-x-3">
        <label className="flex items-center gap-x-1">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category;
