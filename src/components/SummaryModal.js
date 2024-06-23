import React from "react";

const Modal = ({ isOpen, onClose, summary }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-2">Summary of the form</h2>
        {summary.fullName && <p>Full Name: {summary.fullName}</p>}
        {summary.email && <p>Email: {summary.email}</p>}
        {summary.surveyTopic && <p>Survey Topic: {summary.surveyTopic}</p>}
        {summary.favoriteProgrammingLanguage && (
          <p>Favorite Programming Language: {summary.favoriteProgrammingLanguage}</p>
        )}
        {summary.yearsOfExperience && (
          <p>Years of Experience: {summary.yearsOfExperience}</p>
        )}
        {summary.exerciseFrequency && (
          <p>Exercise Frequency: {summary.exerciseFrequency}</p>
        )}
        {summary.dietPreference && (
          <p>Diet Preference: {summary.dietPreference}</p>
        )}
        {summary.highestQualification && (
          <p>Highest Qualification: {summary.highestQualification}</p>
        )}
        {summary.fieldOfStudy && (
          <p>Field of Study: {summary.fieldOfStudy}</p>
        )}
        {summary.feedback && <p>Feedback: {summary.feedback}</p>}
        {summary.additionalQuestions && summary.additionalQuestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Additional Questions:</h3>
            {summary.additionalQuestions.map((question, index) => (
                <div className="border-gray-300 border-b mb-2">
                    <div>
                        <span className="font-bold" key={index}>Question:</span>
                        <span key={index}>{question.text}</span>
                    </div>
                    <div>
                        <span className="font-bold" key={index}>Answer:</span>
                        <span key={index}>Answer: {question.answer}</span>
                    </div>
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
