import React, { useContext } from "react";
import { FormControl, FormLabel, RadioGroup, Radio, FormErrorMessage } from "@chakra-ui/react";
import { useQuestionnaireContext } from "../../../Provider/QuestionnaireProvider";

const ThirdQuestionnaire = ({
  setFormThirdFirstQuestion,
  formThirdFirstQuestion,
}) => {
  const { isError } = useContext(useQuestionnaireContext);

  const handleRadioChange = (value) => {
    setFormThirdFirstQuestion(value);
    console.log(`Selected value: ${value}`);
  };

  return (
    <div className="row">
      <FormControl isInvalid={isError}>
        <div className="col-md-6 mx-auto divFormThree">
          <FormLabel>
            Qual cor e tamanho de fonte você acha ideal para sua visualização?
          </FormLabel>
          <RadioGroup
          className="radioFormThree"
            value={formThirdFirstQuestion}
            onChange={(e) => handleRadioChange(e)}
          >
            <Radio value="2.5">Grande</Radio>
            <Radio value="2">Médio</Radio>
            <Radio value="1.5">Pequeno</Radio>
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

export default ThirdQuestionnaire;
