import axios from "axios";
import { URL_LIBRARY_API } from "../constants/constants";

export const searchBooks = (query) => {
  return axios.get(`${URL_LIBRARY_API}/app/books?q=${query}`);
};
