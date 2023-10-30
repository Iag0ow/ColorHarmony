import "./HomePage.css";
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import ColorHarmonyHome from '../components/images/ColorHarmonyHome.png';
export default function HomePage() {

  return (
    <div className="login-page">
      <form className="container login-page-box">
        <div className="page-box-context">
          <div className="row">
              <div className='col-md-12'>
                <div className="d-flex justify-content-center align-items-center mb-5">
                  <div>
                    <img src={ColorHarmonyHome} alt="" />
                  </div>
                </div>
                <Link to={'/questionnaire'} className={`d-flex align-items-center justify-content-center btn btn-entrar`}>Iniciar Questionário</Link>
                <div className="text-center mt-4 mb-4 ou-border">
                    <div></div>
                </div>
                <Link to={'/profile'} className={`d-flex align-items-center justify-content-center btn btn-entrar mt-4`}>Visualizar Perfil</Link>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
}
