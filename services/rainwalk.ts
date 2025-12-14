import axios from "axios";
import env from "@/env";

const rainwalkApi = axios.create({
  baseURL: env.RAINWALK_API_URL,
  headers: {
    "Api-Key": env.RAINWALK_API_KEY,
  },
});

export async function verfiyZipcodeCoverage(zipCode: string) {
  const response = await rainwalkApi.get<{
    covered: boolean;
    state: string;
  }>(`/coverage/zipcode/${zipCode}`);
  return response.data;
}
