//Axios
import { baseAxios } from "../../config/Axios";
//request
const HomeRequest = async () =>{
    const response = await baseAxios.get('https://rickandmortyapi.com/api/character');
    return response;
}

export { HomeRequest }