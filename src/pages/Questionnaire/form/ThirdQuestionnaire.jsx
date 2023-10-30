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

const ThirdQuestionnaire = ({
  setFormThirdFirstQuestion,
  formThirdFirstQuestion,
  setFormThirdSecondQuestion,
  formThirdSecondQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  return (
    <>
      <div className="row">
        <FormControl isInvalid={isError}>
          <div className="col-md-6 mx-auto">
            <FormLabel>
              Qual cor e tamanho de fonte você acha ideial para sua
              visualização?
            </FormLabel>
            <Input
              isInvalid={isError && !formThirdFirstQuestion}
              type="text"
              value={formThirdFirstQuestion}
              onChange={(e) => setFormThirdFirstQuestion(e.target.value)}
            />
            {isError && !formThirdFirstQuestion ?  (
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

export default ThirdQuestionnaire;
