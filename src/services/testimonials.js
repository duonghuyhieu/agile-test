import { ApiClient } from "./api-client";

export const getGalleries = async () => {
  const response = await ApiClient.get("/galleries");
  return response;
};