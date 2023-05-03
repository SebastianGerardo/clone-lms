import { URL } from "../ApiUrl";

export const TraeCicloSalon = async (bearer) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles_classrooms`, {
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
  
  export const crearCicloSalon = async (bearer, registro) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles_classrooms`, {
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
  
  export const cambiarCicloSalon = async (bearer, registro, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles_classrooms/${id}`, {
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
  
  export const eliminarCicloSalon = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/cycles_classrooms/${id}`, {
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
  