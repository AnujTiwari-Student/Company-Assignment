import React from "react";
import { useFormContext } from "../context/FormContext";

const TextAreaInput = ({ label, name, error }) => {
  const { formData, handleChange } = useFormContext();

  return (
    <div>
      <label className="block mb-2">{label}</label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TextAreaInput;
