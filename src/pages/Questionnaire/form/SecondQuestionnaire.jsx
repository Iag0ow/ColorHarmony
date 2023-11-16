import React, { useContext } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useQuestionnaireContext } from "../../../Provider/QuestionnaireProvider";

const SecondQuestionnaire = ({
  setFormSecondFirstQuestion,
  formSecondFirstQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  const handleRadioChange = (value) => {
    setFormSecondFirstQuestion(value);
    console.log(`Selected value: ${value}`);
  };

  return (
    <div className="row">
      <FormControl isInvalid={isError}>
        <div className="col-md-6 mx-auto divFormTwo">
          <FormLabel>Você gostaria de ter os sites no modo escuro?</FormLabel>
          <RadioGroup
            className="radioFormTwo"
            value={formSecondFirstQuestion}
            onChange={(e) => handleRadioChange(e)}
          >
            <Radio value="true">Sim</Radio>
            <Radio value="false">Não</Radio>
          </RadioGroup>
          {isError ? (
            <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
          ) : (
            ""
          )}
        </div>
      </FormControl>
    </div>
  );
};

export default SecondQuestionnaire;
