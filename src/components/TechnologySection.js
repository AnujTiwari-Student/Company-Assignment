import React from "react";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { useFormContext } from "../context/FormContext";

const TechnologySection = () => {
  const { errors } = useFormContext();

  return (
    <>
      <SelectInput
        label="Favorite Programming Language"
        name="favoriteProgrammingLanguage"
        options={["JavaScript", "Python", "Java", "C#"]}
        error={errors.favoriteProgrammingLanguage}
      />
      <TextInput
        label="Years of Experience"
        name="yearsOfExperience"
        error={errors.yearsOfExperience}
      />
    </>
  );
};

export default TechnologySection;
