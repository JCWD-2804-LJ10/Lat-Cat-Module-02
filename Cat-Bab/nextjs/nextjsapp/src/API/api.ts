import axios from "axios";
import { error } from "console";
export const BASE_URL = "http://localhost:4000/";

interface ProductItem
{
    name:string,
    price:number,
    description:string,
    image:string,
    category:string,
}



export const getProducts = async () => {
  await axios
    .get(BASE_URL + "products")
    .then((response: any) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error: any) => {
      return {
        error: error,
      };
    });
};


export const getProductsById = async (id:String) => {
    await axios
      .get(BASE_URL + `products/${id}`)
      .then((response: any) => {
        return {
          status: response.status,
          data: response.data,
        };
      })
      .catch((error: any) => {
        return {
          error: error,
        };
      });
  };



export const postProducts = async (data:ProductItem) => {
const body ={
    name:data.name,
    price:data.price,
    description:data.description,
    image:data.image,
    category:data.category,
};

await axios
.post(BASE_URL + "products",body)
.then((response:any)=>{
    return{
        status:response.status,
        data:response.data
    };
})
.catch((error:any) =>{
    return{
        error:error
    }
})
}


export const editProducts = async (data:ProductItem, id:string)  => {
    const body ={
        name:data.name,
        price:data.price,
        description:data.description,
        image:data.image,
        category:data.category,
    };
    await axios
    .put(BASE_URL + `products/${id}`,body)
    .then((response:any)=>{
        return{
            status:response.status,
            data:response.data
        };
    })
    .catch((error:any) =>{
        return{
            error:error
        }
    })
    }

    export const deleteProducts = async (id:string) => {
        await axios
        .delete(BASE_URL + `products/${id}`)
        .then((response:any)=>{
            return{
                status:response.status,
                data:response.data
            };
        })
        .catch((error:any) =>{
            return{
                error:error
            }
        })
        }