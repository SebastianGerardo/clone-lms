import { URL } from "../ApiUrl";

export const TraeDataLearning = async (bearer) => {
    try {
      const fetchResponse = await fetch(`${URL}/learning_paths`, {
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

export const TraeLearning = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/learning_paths/${id}`, {
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
  
  export const crearLearning = async (bearer, registro) => {
    try {
      const fetchResponse = await fetch(`${URL}/learning_paths`, {
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
  
  export const cambiarLearning = async (bearer, registro, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/learning_paths/${id}`, {
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
  
  export const eliminarLearning = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/learning_paths/${id}`, {
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
  
//CURSOS POR SEMANA PARA LEARNING PATH

  export const crearCursoSemana = async (bearer, registro) => {
    try {
      const fetchResponse = await fetch(`${URL}/courses_weeks`, {
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

  export const cambiarCursoSemana = async (bearer, registro, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/courses_weeks/${id}`, {
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

  export const eliminarCursoSemana = async (bearer, id) => {
    try {
      const fetchResponse = await fetch(`${URL}/courses_weeks/${id}`, {
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