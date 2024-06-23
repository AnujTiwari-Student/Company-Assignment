import { useFormContext } from "../context/FormContext";

const useFormValidation = () => {
  const { formData, setErrors } = useFormContext();

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      tempErrors["fullName"] = "Full Name is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Email is not valid";
      isValid = false;
    }
    if (!formData.surveyTopic) {
      tempErrors["surveyTopic"] = "Survey Topic is required";
      isValid = false;
    }

    if (formData.surveyTopic === "Technology") {
      if (!formData.favoriteProgrammingLanguage) {
        tempErrors["favoriteProgrammingLanguage"] =
          "Favorite Programming Language is required";
        isValid = false;
      }
      if (!formData.yearsOfExperience) {
        tempErrors["yearsOfExperience"] = "Years of Experience is required";
        isValid = false;
      }
    }

    if (formData.surveyTopic === "Health") {
      if (!formData.exerciseFrequency) {
        tempErrors["exerciseFrequency"] = "Exercise Frequency is required";
        isValid = false;
      }
      if (!formData.dietPreference) {
        tempErrors["dietPreference"] = "Diet Preference is required";
        isValid = false;
      }
    }

    if (formData.surveyTopic === "Education") {
      if (!formData.highestQualification) {
        tempErrors["highestQualification"] =
          "Highest Qualification is required";
        isValid = false;
      }
      if (!formData.fieldOfStudy) {
        tempErrors["fieldOfStudy"] = "Field of Study is required";
        isValid = false;
      }
    }

    if (!formData.feedback || formData.feedback.length < 10) {
      tempErrors["feedback"] = "Feedback must be at least 50 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  return validate;
};

export default useFormValidation;
