import React from "react";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { useFormContext } from "../context/FormContext";

const EducationSection = () => {
  const { errors } = useFormContext();

  return (
    <>
      <SelectInput
        label="Highest Qualification"
        name="highestQualification"
        options={["High School", "Bachelor's", "Master's", "PhD"]}
        error={errors.highestQualification}
      />
      <TextInput
        label="Field of Study"
        name="fieldOfStudy"
        error={errors.fieldOfStudy}
      />
    </>
  );
};

export default EducationSection;
