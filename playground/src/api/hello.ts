import axios from "axios";

const API_URL: string = "http://localhost/backend/";

export async function getHello() {
  const response = axios.get<string>(API_URL).then((res) => res.data);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return response;
}
