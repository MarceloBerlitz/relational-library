import axios from "axios";
import { UserTypeEnum } from "./enum/UserTypeEnum";
import { GetAll } from "./shared/GetAll";

const ax = axios.create({
  baseURL: "http://localhost:8080/usuarios",
});

type UserRequest = {
  codigo?: number;
  nome: string;
  tipo: UserTypeEnum;
  email: string;
  senha: string;
};

type UserBookResponse = {
  codigo: number;
  titulo: string;
  descricao?: string;
  ano?: number;
  autores: string[];
  image?: string;
};

type UserResponse = {
  codigo: number;
  nome: string;
  tipo: UserTypeEnum;
  email: string;
  senha: string;
  livros?: UserBookResponse[];
};

export const createUser = (request: UserRequest): Promise<UserResponse> => {
  return ax.post("/", request).then((res) => res.data);
};

export const updateUser = (
  userCode: number,
  request: UserRequest
): Promise<UserResponse> => {
  return ax.put(`/${userCode}`, request).then((res) => res.data);
};

export const getAllUsers = (): Promise<GetAll<UserResponse>> => {
  return ax.get("/").then((res) => res.data);
};

export const getUser = (userCode: number): Promise<UserResponse> => {
  return ax.get(`/${userCode}`).then((res) => res.data);
};

export const deleteUser = async (userCode: number): Promise<void> => {
  await ax.delete(`/${userCode}`).then((res) => res.data);
};
