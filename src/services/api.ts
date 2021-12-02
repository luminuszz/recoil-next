import axios from 'axios';

interface Info {
  count: number;
  next: string;
  pages: number;
}

type ApiResponse<Data = any> = {
  results: Data;
  info: Info;
};

export type Person = {
  status: string;
  name: string;
  species: string;
  image: string;
  id: string;
};

export type GetPersons = ApiResponse<Person[]>;

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
