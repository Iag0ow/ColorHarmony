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

export const dadosUsuario = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${bearerToken}`,
    },
    method: "GET",
  };

  const response = await fetch(`${API}/api-user/profile`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return data;
};
export const configUsuario = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${bearerToken}`,
    },
    method: "GET",
  };

  const response = await fetch(`${API}/api-user/profile/configurations`, config);
  const data = await response.json();

  if (!response.ok) {
      return 'Algo deu errado'
  }
  return data;
};

export const editaUsuario = async (dados) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${bearerToken}`,
    },
    method: "PATCH",
    body: JSON.stringify(dados),
  };

  const response = await fetch(`${API}/api-user/profile`, config)

  if (!response.ok){
    return 'Algo deu errado'
  }
  const data = await response.json();
  return data;
};
