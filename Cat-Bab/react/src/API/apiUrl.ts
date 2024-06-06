import axios from "axios"

const API_URL = "https://665ede2f1e9017dc16f1cd73.mockapi.io/"

export const getUsers = () => axios.get(`${API_URL}users`)
export const getUsersById = (id:string) => axios.get(`${API_URL}users/${id}`);
export const createUsers = (user:any) => axios.post(`${API_URL}users`,{user});
export const updateUsers = (id:string,user:any) => axios.put(`${API_URL}users`,{user});
 export const deleteUsers = (id:string) => axios.delete(`${API_URL}users/${id}`);