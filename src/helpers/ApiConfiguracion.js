import { URL } from "./ApiUrl";

// APIS EMPRESA

export const TraeDataEmpresa = async (bearer) => {
  try {
    const fetchResponse = await fetch(`${URL}/companies`, {
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

export const crearEmpresa = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/companies`, {
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

export const cambiarEmpresa = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/companies/${id}`, {
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

export const eliminarEmpresa = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/companies/${id}`, {
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

//APIS LOCALES

export const TraeDataLocales = async (bearer) => {
  try {
    const fetchResponse = await fetch(`${URL}/locals`, {
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

export const CambiaDataLocal = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/locals/${id}`, {
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

export const crearLocal = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/locals`, {
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

export const eliminarLocal = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/locals/${id}`, {
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

//APIS SALONES

export const TraeDataSalones = async (bearer) => {
  try {
    const fetchResponse = await fetch(`${URL}/classrooms`, {
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

export const crearSalon = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/classrooms`, {
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

export const cambiarSalon = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/classrooms/${id}`, {
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

export const eliminarSalon = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/classrooms/${id}`, {
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

//APIS CURSOS - CAPITULOS - TEMAS

//CURSOS

export const TraeDataCursos = async (bearer) => {
  try {
    const fetchResponse = await fetch(`${URL}/courses`, {
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

export const TraeDataCurso = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/courses/${id}`, {
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

export const CrearCurso = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/courses`, {
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

export const cambiarCurso = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/courses/${id}`, {
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

export const eliminarCurso = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/courses/${id}`, {
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

//API CAPITULOS

export const TraeDataCapitulo = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/chapters/${id}`, {
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

export const CrearCapitulo = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/chapters`, {
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

export const cambiarCapitulo = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/chapters/${id}`, {
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

export const eliminarCapitulo = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/chapters/${id}`, {
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

//API TEMAS

export const TraeDataTemas = async (bearer) => {
  try {
    const fetchResponse = await fetch(`${URL}/issues`, {
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

export const CrearTema = async (bearer, registro) => {
  try {
    const fetchResponse = await fetch(`${URL}/issues`, {
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

export const cambiarTema = async (bearer, registro, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/issues/${id}`, {
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

export const eliminarTema = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/issues/${id}`, {
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

//APIS DE PRUEBA
export const ApiConfiguracionCursos = [
  {
    id: 1,
    nombre: "Algebra",
    cantidadCapitulos: 0,
    capitulos: [
      {
        id: 1,
        nombre: "Capitulo 1",
        cantidadLecciones: 0,
        temas: [
          {
            id: 1,
            nombre: "Teoria de exponentes",
          },
        ],
      },
    ],
  },
];
