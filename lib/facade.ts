import axios from "axios";

export async function requestAxios(
  url: string,
  params = {},
  method: string,
  data = {}
) {
  try {
    const response = await axios({
      url: url,
      method: method,
      params: params,
      data: method !== "GET" ? data : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("AXIOS ERROR: ", error);
    throw error;
  }
}
