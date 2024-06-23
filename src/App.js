import React from "react";
import { FormProvider } from "./context/FormContext";
import SurveyForm from "./components/SurveyForm";

const App = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <SurveyForm />
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
