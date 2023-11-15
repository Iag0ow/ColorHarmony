import "./LoginPage.css";
import backgroundImg from "../components/images/WoodsBackground.png";
import LoginRegisterImageRight from "../components/images/ColorHarmonyHome.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="temporaryBackground">
        {/* <img
          className="backgroundImg"
          src={backgroundImg}
          alt="background image"
        /> */}
        <section className="row containerLogin">
          <div className=" imageLoginRight col-md-6">
            <img src={LoginRegisterImageRight} alt="Login image" />
          </div>
          <div className="formLoginLeft col-md-6">
            <form className="loginInputs">
              <h1>Bem vindo</h1>
              <h4 className="mb-5" style={{ opacity: "0.8" }}>
                Entre em sua conta
              </h4>
              <input
                className="inputsLogin mb-4"
                type="email"
                placeholder="Entre com seu email"
              />
              <input
                className="inputsLogin mb-2"
                type="password"
                placeholder="Digite sua senha"
              />
              <div>
                <input
                  type="checkbox"
                  name="keepConnected"
                  id="lembrar-me"
                  style={{
                    marginTop: "10px",
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                />
                <label
                  htmlFor="lembrar-me"
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "5px",
                    marginTop: "10px",
                  }}
                >
                  Lembrar-me
                </label>
              </div>

              <Link to={"/"}>
                <button className="buttonLogin">Entrar</button>
              </Link>
              <div className="mt-4" style={{ textAlign: "center" }}>
                Você não tem conta?{" "}
                <a
                  className="loginRegister_tagA"
                  href="/register"
                  style={{ textDecoration: "none" }}
                >
                  Registre-se
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
