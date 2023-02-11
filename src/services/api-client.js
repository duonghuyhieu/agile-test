import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://test-react.agiletech.vn/",
});

export { ApiClient };
