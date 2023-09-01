import React from "react";

import Switch from "react-switch";

const Toggle = ({ active, name, di, field, fn }) => {
  const handleChange = () => {
    fn(di, field);
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={active}
        onChange={handleChange}
        className="react-switch"
      />

      <label className="m-2 text-lg" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Toggle;
