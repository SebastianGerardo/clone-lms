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
  console.log(registro);
  console.log(bearer);
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

export const TraeDataLocal = async (bearer, id) => {
  try {
    const fetchResponse = await fetch(`${URL}/locals/${id}`, {
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
  console.log(registro);
  console.log(bearer);
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
  console.log(registro);
  console.log(bearer);
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
  console.log(registro);
  console.log(bearer);
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
