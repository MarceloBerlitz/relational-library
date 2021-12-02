import axios, { AxiosRequestConfig } from "axios";
import { UserTypeEnum } from "./enum/UserTypeEnum";
import { GetAll } from "./shared/GetAll";

const ax = axios.create({
  baseURL: "http://localhost:8080/livros",
});

export type BookRequest = {
  codigo?: number;
  titulo: string;
  descricao: string;
  ano: number;
  autores: string[];
  codigoUsuario?: number;
};

export type BookUserResponse = {
  codigo: number;
  nome: string;
  email: string;
  senha: string;
  tipo: UserTypeEnum;
};

export type BookResponse = {
  codigo: number;
  titulo: string;
  descricao?: string;
  ano?: number;
  autores: string[];
  usuario?: BookUserResponse;
  image?: string;
};

export const createBook = (request: BookRequest): Promise<BookResponse> => {
  return ax.post("/", request).then((res) => res.data);
};

export const updateBook = (
  bookCode: number,
  request: BookRequest
): Promise<BookResponse> => {
  return ax.put(`/${bookCode}`, request).then((res) => res.data);
};

export const setCoverImage = async (
  bookCode: number,
  file: File,
  onProgress: any
): Promise<void> => {
  const formData = new FormData();

  const config: AxiosRequestConfig = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event) => {
      onProgress({ percent: (event.loaded / event.total) * 100 }, file);
    },
  };

  formData.append("file", file);
  await ax.patch(`/${bookCode}/capa`, formData, config);
};

export const getAllBooks = (search?: string): Promise<GetAll<BookResponse>> => {
  return ax
    .get("/", { params: search ? { search } : {} })
    .then((res) => res.data);
};

export const getBook = (bookCode: number): Promise<BookResponse> => {
  return ax.get(`/${bookCode}`).then((res) => res.data);
};

export const deleteBook = async (bookCode: number): Promise<void> => {
  await ax.delete(`/${bookCode}`).then((res) => res.data);
};
