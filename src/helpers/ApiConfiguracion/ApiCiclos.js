import { URL } from "../ApiUrl";

export const TraeDataCiclos = async (bearer) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
      });
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const crearCiclo = async (bearer, registro) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
        body: JSON.stringify(registro),
      });
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const cambiarCiclo = async (bearer, registro, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
        body: JSON.stringify(registro),
      });
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const eliminarCiclo = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
      });
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  