import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchAdditionalQuestions = async (topic) => {
    if (topic) {
      try {
        const topicApiMap = {
          Technology: "https://jsonplaceholder.typicode.com/posts?userId=1",
          Health: "https://jsonplaceholder.typicode.com/posts?userId=2",
          Education: "https://jsonplaceholder.typicode.com/posts?userId=3",
        };

        const headers = {
          "Accept-Language": "en-US,en;q=0.9",
        };

        const response = await axios.get(topicApiMap[topic], { headers });
        const questions = response.data.slice(0, 5).map((item, index) => ({
          id: index,
          text: `${item.title}`,
        }));
        setAdditionalQuestions(questions);
      } catch (error) {
        console.error("Error fetching additional questions:", error);
      }
    } else {
      setAdditionalQuestions([]);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setErrors,
        errors,
        isSubmitting,
        setIsSubmitting,
        additionalQuestions,
        setAdditionalQuestions,
        handleChange,
        fetchAdditionalQuestions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
