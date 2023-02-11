import { ApiClient } from "./api-client";

export const postUser = async (userName) => {
    try {
      const response = await ApiClient.post("/auth/login", {
        userName
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };