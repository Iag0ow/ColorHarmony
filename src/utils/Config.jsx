const API = "https://color-harmony-api.vercel.app";
const bearerToken = localStorage.getItem("token");


export const login = async (loginForm) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginForm),
    };

    const response = await fetch(`${API}/session/login`, config);
        
    if (!response.ok) {
        throw new Error(response.statusText);
      }

    const data = await response.json();
  
    return data;
  };