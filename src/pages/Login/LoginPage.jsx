import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/Config";
import LoginRegisterImageRight from "../components/images/LoginRegisterImage.png";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navegar = useNavigate();

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log("teste");
      navegar("/");
      localStorage.setItem("token", data.access_token);
    } catch (error) {
      setError("Falha ao tentar entrar...");
    }
  };

  return (
    <>
      <div className="temporaryBackground">
        <section className="row containerLogin">
          <div className="formLoginLeft col-md-6">
            <form className="loginInputs" onSubmit={fazerLogin}>
              <h1>Bem vindo</h1>
              <h4 className="mb-5" style={{ opacity: "0.8" }}>
                Entre em sua conta
              </h4>
              <input
                className="inputsLogin"
                type="email"
                placeholder="Entre com seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="inputsLogin mb-2"
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
              <label className="mt-3 text-danger">{error}</label>
              <button className="buttonLogin">Entrar</button>
              <div className="mt-2" style={{ textAlign: "center" }}>
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
          <div className="imageLoginRight col-md-6">
            <img src={LoginRegisterImageRight} alt="Login image" />
          </div>
        </section>
      </div>
    </>
  );
}
