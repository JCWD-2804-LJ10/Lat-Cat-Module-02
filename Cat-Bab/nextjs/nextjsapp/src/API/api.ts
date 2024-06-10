import axios from "axios";
import { error } from "console";
export const BASE_URL = "http://localhost:4000/";

export interface ProductItem {
  name: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  id: any;
}

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL + "products");
    return response.data;
  } catch (error) {
    console.error("error fetching products", error);
    throw new Error("failed fetching products");
  }
};

export const getProductsById = async (id: String) => {
  try {
    const response = await axios.get(BASE_URL + `products/${id}`);
    return response.data;
  } catch (error) {
    console.error("error getting products by id", error);
    throw new Error(" failed getting products by id");
  }
};

export const postProducts = async (data: ProductItem) => {
  const body: ProductItem = {
    name: data.name,
    price: data.price,
    description: data.description,
    image: data.image,
    category: data.category,
    id: data?.id
  };
  try {
    const response = await axios.post(BASE_URL + "products", body);
    return response.data;
  } catch (error) {
    console.error("error posting products", error);
    throw new Error("failed posting products");
  }
};

export const editProducts = async (data: ProductItem, id: string):Promise<ProductItem> => {
  const body = {
    name: data.name,
    price: data.price,
    description: data.description,
    image: data.image,
    category: data.category,
  }
  try{
    const response = await axios.put(BASE_URL + `products/${id}`, body);
    return response.data;
  }
  catch(error){
    console.error("error editing products", error);
    throw new Error("failed editing products");
  }
};

export const deleteProducts = async (id: string):Promise<void> => {
  try{
    await axios.delete(BASE_URL + `products/${id}`);
    
  }
  catch(error){
    console.error("error deleting products", error);
    throw new Error("failed deleting products");
  }
};
