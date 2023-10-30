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
const FirstQuestionnaire = ({
  setFormOneFirstQuestion,
  formOneFirstQuestion,
  setFormOneSecondQuestion,
  formOneSecondQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  return (
    <>
      <div className="row">
        <FormControl isInvalid={isError} >
          <div className="col-md-6 mx-auto mt-5">
            <FormLabel>Conte quais problemas de visão você possui:</FormLabel>
            <Input
              isInvalid={isError && !formOneFirstQuestion}
              type="text"
              value={formOneFirstQuestion}
              onChange={(e) => setFormOneFirstQuestion(e.target.value)}
            />
            {isError && !formOneFirstQuestion ? (
              <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 mx-auto mt-5">
            <FormLabel>
              Descreva o que em uma página web é ruim/prejudicial a sua visão.
            </FormLabel>
            <Input
              isInvalid={isError && !formOneSecondQuestion}
              type="text"
              value={formOneSecondQuestion}
              onChange={(e) => setFormOneSecondQuestion(e.target.value)}
            />
            {isError && !formOneSecondQuestion ? (
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

export default FirstQuestionnaire;
