import React, { useContext, useState } from "react";
import "./Questionnaire.css";
import { Button } from "@chakra-ui/react";
import {
  useSteps,
  StepStatus,
  Step,
  Box,
  Stepper,
  StepIndicator,
  StepSeparator,
  StepTitle,
  StepDescription,
  StepIcon,
  StepNumber,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import FirstQuestionnaire from "./form/FirstQuestionnaire";
import SecondQuestionnaire from "./form/SecondQuestionnaire";
import ThirdQuestionnaire from "./form/ThirdQuestionnaire";
import ColorHarmonyHome from "../components/images/ColorHarmonyHome.png";
import { Link } from "react-router-dom";
import { useQuestionnaireContext } from "../../Provider/QuestionnaireProvider";
import { setConfigUser } from "../../utils/Config";

const Questionnaire = () => {
  const steps = [
    { title: "Primeira", description: "Problemas visuais" },
    { title: "Segunda", description: "Sobre cores" },
    { title: "Terceira", description: "Sobre fontes" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [formOneFirstQuestion, setFormOneFirstQuestion] = useState("");
  const [formOneSecondQuestion, setFormOneSecondQuestion] = useState("");

  const [formSecondFirstQuestion, setFormSecondFirstQuestion] = useState("");
  const [formSecondSecondQuestion, setFormSecondSecondQuestion] = useState("");

  const [formThirdFirstQuestion, setFormThirdFirstQuestion] = useState("");
  const [formThirdSecondQuestion, setFormThirdSecondQuestion] = useState("");

  const { isError, updateStatusError } = useContext(useQuestionnaireContext);

  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (activeStep === 0 && !formOneFirstQuestion) {
      updateStatusError(true);
      return;
    }
    if (activeStep === 1 && !formSecondFirstQuestion) {
      updateStatusError(true);
      return;
    }
    if (activeStep === 2 && !formThirdFirstQuestion) {
      updateStatusError(true);
      return;
    }
    updateStatusError(false);
    setActiveStep(activeStep < 2 ? activeStep + 1 : activeStep);
  };
  const handleConclude = async () => {
    if (activeStep === 2 && !formThirdFirstQuestion) {
      updateStatusError(true);
      return;
    }
    updateStatusError(false);
    
    const obj = {
      daltonian: JSON.parse(formOneFirstQuestion),
      night_mode: JSON.parse(formSecondFirstQuestion),
      font_size: Number(formThirdFirstQuestion),
    };
    const data = await setConfigUser(obj);
    if (data.error) {
      updateStatusError(true);
      return;
    }
    setFinished(true);
  };
  return (
    <>
      <div className="mt-2 ms-2">
        <Link to={"/"} onClick={() => updateStatusError(false)}>
          <img
            src={ColorHarmonyHome}
            alt="ColorHarmony"
            style={{ width: "120px" }}
          />
        </Link>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 bg-white p-5 rounded">
            {finished ? (
              <>
                <div className="text-center">
                  <h1>Parabéns!</h1>
                  <p>
                    Seu questionário foi enviada com sucesso. Em breve
                    atualizaremos a sua conta com os detalhes fornecidos.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to={"/"}>
                    <Button colorScheme="blue" variant="solid" className="mt-4">
                      Voltar
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Stepper size="lg" index={activeStep}>
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator>
                        <StepStatus
                          complete={<StepIcon />}
                          incomplete={<StepNumber />}
                          active={<StepNumber />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>
                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
                <Box mt={4}>
                  {activeStep === 0 && (
                    <FirstQuestionnaire
                      setFormOneFirstQuestion={setFormOneFirstQuestion}
                      formOneFirstQuestion={formOneFirstQuestion}
                      setFormOneSecondQuestion={setFormOneSecondQuestion}
                      formOneSecondQuestion={formOneSecondQuestion}
                    />
                  )}
                  {activeStep === 1 && (
                    <SecondQuestionnaire
                      setFormSecondFirstQuestion={setFormSecondFirstQuestion}
                      formSecondFirstQuestion={formSecondFirstQuestion}
                      setFormSecondSecondQuestion={setFormSecondSecondQuestion}
                      formSecondSecondQuestion={formSecondSecondQuestion}
                    />
                  )}
                  {activeStep === 2 && (
                    <ThirdQuestionnaire
                      setFormThirdFirstQuestion={setFormThirdFirstQuestion}
                      formThirdFirstQuestion={formThirdFirstQuestion}
                      setFormThirdSecondQuestion={setFormThirdSecondQuestion}
                      formThirdSecondQuestion={formThirdSecondQuestion}
                    />
                  )}
                </Box>
                <div className="d-flex justify-content-between">
                  <div>
                    {activeStep === 0 ? (
                      ""
                    ) : (
                      <Button
                        colorScheme="blue"
                        variant="outline"
                        className="mt-4"
                        onClick={() => setActiveStep(activeStep - 1)}
                        disabled={activeStep === 0}
                      >
                        Voltar
                      </Button>
                    )}
                  </div>
                  <div className="d-flex justify-content-end">
                    {activeStep !== 2 ? (
                      <Button
                        colorScheme="blue"
                        variant="solid"
                        className="mt-4"
                        onClick={handleNext}
                      >
                        Avançar
                      </Button>
                    ) : (
                      <Button
                        colorScheme="blue"
                        variant="solid"
                        className="mt-4"
                        onClick={handleConclude}
                      >
                        Concluir
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
