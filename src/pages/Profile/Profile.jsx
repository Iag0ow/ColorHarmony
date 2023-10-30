import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <p>Página em construção</p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to={"/"}>
              <button type="button" className="btn btn-primary">Voltar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
