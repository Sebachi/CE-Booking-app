import axios from "axios";
import { endpoint } from "./data";

export const getAlojamientos = async () =>{
    try{
        const {data} = await axios.get(endpoint.alojamiento)
        return data
    }
    catch(error){
        console.log(error);
        return error
    }
}