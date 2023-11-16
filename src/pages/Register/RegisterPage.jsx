import "./RegisterPage.css";
import backgroundImg from "../components/images/WoodsBackground.png";
import LoginRegisterImageRight from "../components/images/ColorHarmonyHome.png";

export default function RegisterPage() {
  return (
    <>
      {/* <img
        className="backgroundImg"
        src={backgroundImg}
        alt="background image"
      /> */}
      <section className="row containerRegister">
        <div className="imageLoginRight col-md-6">
          <img src={LoginRegisterImageRight} alt="Login image" />
        </div>
        <div className="formLoginLeft col-md-6">
          <form className="registerInputs">
            <h1>Crie uma conta</h1>
            <input
              className="mt-5 inputsRegister"
              type="txt"
              placeholder="Nome"
            />
            <input
              className="inputsRegister"
              type="email"
              placeholder="Email"
            />
            <input
              className="inputsRegister mb-2"
              type="password"
              placeholder="Senha"
            />
            <button className="buttonRegister">Criar conta</button>
            <div
              className="mt-2"
              style={{
                textAlign: "center",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Já possui conta?{" "}
              <a
                className="registerLogin_tagA"
                href="/login"
                style={{ textDecoration: "none" }}
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
