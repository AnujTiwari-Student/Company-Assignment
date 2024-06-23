import React from "react";
import { useFormContext } from "../context/FormContext";

const AdditionalQuestions = () => {
  const { additionalQuestions, handleChange } = useFormContext();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Additional Questions</h2>
      {additionalQuestions.map((question) => (
        <div key={question.id} className="mt-4">
          <label className="block mb-2">{question.text}</label>
          <input
            type="text"
            name={`additionalQuestion${question.id}`}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default AdditionalQuestions;
