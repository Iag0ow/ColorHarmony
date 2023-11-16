import React, { useContext } from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useQuestionnaireContext } from "../../../Provider/QuestionnaireProvider";

const FirstQuestionnaire = ({
  setFormOneFirstQuestion,
  formOneFirstQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  const handleRadioChange = (value) => {
    setFormOneFirstQuestion(value);
    console.log(`Selected value: ${value}`);
  };
  
  return (
    <div className="row">
        <FormControl isInvalid={isError}>
        <div className="divFormOne  mx-auto mt-1 ">
          <FormLabel htmlFor="daltonismo">Você possui algum problema ligado ao daltonismo?</FormLabel>
          <RadioGroup
           className="radioFormOne" value={formOneFirstQuestion} onChange={(e) => handleRadioChange(e)}>
            <Radio value="true">Sim</Radio>
            <Radio value="false">Não</Radio>
          </RadioGroup>
          {isError && !formOneFirstQuestion ? (
            <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
          ) : (
            ''
          )}
        </div>
      </FormControl>
    </div>
  );
};

export default FirstQuestionnaire;
