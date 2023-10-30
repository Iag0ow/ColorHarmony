import React, { useContext } from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useQuestionnaireContext } from "../../../Provider/QuestionnaireProvider";
const SecondQuestionnaire = ({
  setFormSecondFirstQuestion,
  formSecondFirstQuestion,
  setFormSecondSecondQuestion,
  formSecondSecondQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  return (
    <>
      <div className="row">
        <FormControl isInvalid={isError}>
          <div className="col-md-6 mx-auto">
            <FormLabel>
              Quais cores você possui maior dificuldade em enxergar e por quais
              você acharia melhor substituição?
            </FormLabel>
            <Input
              isInvalid={isError && !formSecondFirstQuestion}
              type="text"
              value={formSecondFirstQuestion}
              onChange={(e) => setFormSecondFirstQuestion(e.target.value)}
            />
            {isError && !formSecondFirstQuestion ? (
              <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
            ) : (
              ""
            )}
          </div>
        </FormControl>
      </div>
    </>
  );
};

export default SecondQuestionnaire;
