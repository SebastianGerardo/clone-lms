import { URL } from "../ApiUrl";

export const TraeDataSemanas = async (bearer) => {
    try {
      const fetchResponse = await fetch(`${URL}/weeks`, {
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
  
export const TraeSemana = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/weeks/${id}`, {
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
  
  export const crearSemana = async (bearer, registro) => {
    try {
      const fetchResponse = await fetch(`${URL}/weeks`, {
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
  
  export const cambiarSemana = async (bearer, registro, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/weeks/${id}`, {
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
  
  export const eliminarSemana = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/weeks/${id}`, {
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
  