import React, { createContext, useContext, useEffect, useState } from 'react';

const useQuestionnaireContext = createContext();

const QuestionnaireProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);

  const updateStatusError = (state) => {
    setIsError(state);
  };

  return (
    <useQuestionnaireContext.Provider value={{ isError, updateStatusError }}>
      {children}
    </useQuestionnaireContext.Provider>
  );
};

export { useQuestionnaireContext, QuestionnaireProvider };
