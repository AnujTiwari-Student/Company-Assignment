/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFormContext } from "../context/FormContext";
import useFormValidation from "../hooks/useFormValidation";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TechnologySection from "./TechnologySection";
import HealthSection from "./HealthSection";
import EducationSection from "./EducationSection";
import AdditionalQuestions from "./AdditionalQuestions";
import Modal from "./SummaryModal";

const SurveyForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    additionalQuestions,
    fetchAdditionalQuestions,
  } = useFormContext();
  const validate = useFormValidation();

  const [summary, setSummary] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAdditionalQuestions(formData.surveyTopic);
  }, [formData.surveyTopic, fetchAdditionalQuestions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      const additionalQuestionsSummary = additionalQuestions.map((question) => ({
        id: question.id,
        text: question.text,
        answer: formData[`additionalQuestion${question.id}`] || "No answer provided",
      }));

      setSummary({
        fullName: formData.fullName,
        email: formData.email,
        surveyTopic: formData.surveyTopic,
        favoriteProgrammingLanguage: formData.favoriteProgrammingLanguage,
        yearsOfExperience: formData.yearsOfExperience,
        exerciseFrequency: formData.exerciseFrequency,
        dietPreference: formData.dietPreference,
        highestQualification: formData.highestQualification,
        fieldOfStudy: formData.fieldOfStudy,
        feedback: formData.feedback,
        additionalQuestions: additionalQuestionsSummary,
      });

      setIsModalOpen(true);
    }

    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSummary({});
  };

  return (
    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
      <TextInput label="Full Name" name="fullName" error={errors.fullName} />
      <TextInput label="Email" name="email" error={errors.email} />
      <SelectInput
        label="Survey Topic"
        name="surveyTopic"
        options={["Technology", "Health", "Education"]}
        error={errors.surveyTopic}
      />

      {formData.surveyTopic === "Technology" && <TechnologySection />}
      {formData.surveyTopic === "Health" && <HealthSection />}
      {formData.surveyTopic === "Education" && <EducationSection />}

      <TextAreaInput label="Feedback" name="feedback" error={errors.feedback} />

      <AdditionalQuestions />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded w-full"
        disabled={isSubmitting}
      >
        Submit
      </button>
      {summary && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} summary={summary} />
      )}

      {/* <Modal isOpen={isModalOpen} onClose={closeModal} summary={summary} /> */}
    </form>
  );
};

export default SurveyForm;
