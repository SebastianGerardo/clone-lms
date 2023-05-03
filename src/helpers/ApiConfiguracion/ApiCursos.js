import { URL } from "../ApiUrl";

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