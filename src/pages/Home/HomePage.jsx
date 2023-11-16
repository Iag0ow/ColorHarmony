import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { configUsuario } from "../../utils/Config";
import ColorHarmonyHome from "../components/images/ColorHarmonyHome.png";
import "./HomePage.css";
export default function HomePage() {
  const { data: ConfigUser } = useQuery({
    queryKey: ["ConfigUser1"],
    queryFn: async () => configUsuario(),
  });

  const [rota, setRota] = useState("/settings");

  useEffect(() => {
    if (ConfigUser === "Algo deu errado") {
      setRota("/questionnaire");
    }
  }, [ConfigUser]);

  return (
    <div className="home-page">
      <form className="container home-page-box">
        <div className="page-box-context">
          <div className="row testeName">
            <div className="col-md-12">
              <div className="homeImageHolder d-flex justify-content-center align-items-center mb-5">
                <div className="homeImage">
                  <img src={ColorHarmonyHome} alt="" />
                </div>
              </div>
            </div>
            <Link
              to={rota}
              className={`d-flex align-items-center justify-content-center btn btn-entrar`}
            >
              Configurações
            </Link>
            <div className="text-center mt-4 mb-4 ou-border">
            </div>
            <Link
              to={"/profile"}
              className={`d-flex align-items-center justify-content-center btn btn-entrar mt-4`}
            >
              Visualizar Perfil
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
