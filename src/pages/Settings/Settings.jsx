import React, { useEffect, useState } from "react";
import { Text, Switch, Button, Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import "./Settings.css";
import { configUsuario } from "../../utils/Config";
import { Link } from "react-router-dom";
import { useClipboard } from "@chakra-ui/react";

function Settings() {
  const tokenAcces = () => localStorage.getItem("token");
  const { value, setValue } = useClipboard("");

  const [hasCopied, setHasCopied] = useState(false);
  const { data: ConfigUser } = useQuery({
    queryKey: ["ConfigUser"],
    queryFn: async () => configUsuario(),
  });

  const [config, setConfig] = useState();

  useEffect(() => {
    setConfig(ConfigUser);
  }, [ConfigUser]);

  const getFontSizeLabel = (size) => {
    switch (size) {
      case 1.5:
        return "Pequeno";
      case 2:
        return "Medio";
      case 2.5:
        return "Grande";
      default:
        return "";
    }
  };
  useEffect(() => {}, [hasCopied]);

  const handleCopyClick = async () => {
    const token = tokenAcces();
    await navigator.clipboard.writeText(token);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 1500);
    // setValue(token);
    // onCopy();
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="borda d-flex flex-column justify-content-center align-items-center">
        <div className="carSettings">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 h-100">
              <Text className="fs-2">Configurações</Text>
              <div className="d-flex align-items-center gap-1">
                <p className="m-0 fs-4 me-5">Modo daltônico</p>
                <Switch pointerEvents={"none"} isChecked={config?.daltonian} />
              </div>
              <div className="d-flex align-items-center gap-3">
                <p className="m-0 fs-4 me-5">Modo noturno</p>
                <Switch pointerEvents={"none"} isChecked={config?.night_mode} />
              </div>
              <div className="d-flex align-items-center gap-2">
                <p className="m-0 fs-4 me-3">Tamanho da fonte:</p>
                <p className="m-0 fs-4 me-3">
                  {getFontSizeLabel(config?.font_size)}
                </p>
              </div>
            </div>
            <div className="inputToken">
              <Input
                disabled
                color="teal"
                placeholder="Copiar Token"
                _placeholder={{ color: "inherit" }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <Button onClick={handleCopyClick}>
                {hasCopied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="d-flex align-items-end">
              <Link to="/questionnaire" className="m-0 fs-4 mb-3">
                <div className="d-flex align-items-center justify-content-center botao">
                  Edite
                </div>
                <div className="d-flex justify-content-center mt-3 me-3">
                  <Button
                    className="p-0"
                    style={{ backgroundColor: "#d9d9d9" }}
                    as={Link}
                    to="/"
                  >
                    <div className="p-3">Voltar</div>
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
