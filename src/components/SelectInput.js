import React from "react";
import { useFormContext } from "../context/FormContext";

const SelectInput = ({ label, name, options, error }) => {
  const { formData, handleChange } = useFormContext();

  return (
    <div>
      <label className="block mb-2">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SelectInput;
