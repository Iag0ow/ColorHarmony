import { Text, Switch } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import "./Settings.css";
import { configUsuario } from "../../utils/Config";
import { Link } from "react-router-dom";

export default function Settings() {
  const { data: ConfigUser } = useQuery({
    queryKey: ["ConfigUser"],
    queryFn: async () => configUsuario(),
  });

  const [config, setConfig] = useState();

  useEffect(() => {
    setConfig(ConfigUser);
  }, [ConfigUser]);

  const font = (size) => {
    if (size === 1.5) {
      return "Pequeno";
    }
    if (size === 2) {
      return "Medio";
    }
    if (size === 2.5) {
      return "Grande";
    }
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container borda d-flex flex-column justify-content-center align-items-center">
        <div className="carSettings ">
          <div className="d-flex flex-column justify-content-center align-items-center  h-100">
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
                <p className="m-0 fs-4 me-3">{font(config?.font_size)}</p>
              </div>
            </div>
            <div className="d-flex align-items-end ">
                <Link to={"/questionnaire"} className="m-0 fs-4 mb-5">
              <div className="d-flex align-items-center justify-content-center  botao">
                  Edite
              </div>
                </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
