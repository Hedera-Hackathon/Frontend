import axios from "axios";
import { UUID } from "crypto";

export const api = axios.create({
  baseURL: "http://localhost:3333/api/v1",
});

export const endpoints = {
  projects: {
    add: "/projects",
    list: "/projects",
    single: (uuid: UUID) => `/projects/${uuid}`,
  },
};
