import React from "react";
import SelectInput from "./SelectInput";
import { useFormContext } from "../context/FormContext";

const HealthSection = () => {
  const { errors } = useFormContext();

  return (
    <>
      <SelectInput
        label="Exercise Frequency"
        name="exerciseFrequency"
        options={["Daily", "Weekly", "Monthly", "Rarely"]}
        error={errors.exerciseFrequency}
      />
      <SelectInput
        label="Diet Preference"
        name="dietPreference"
        options={["Vegetarian", "Vegan", "Non-Vegetarian"]}
        error={errors.dietPreference}
      />
    </>
  );
};

export default HealthSection;
