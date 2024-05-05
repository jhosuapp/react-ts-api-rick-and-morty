//Axios
import { baseAxios } from "../../config/Axios";

//Type custom
type IResponse = { data: { results: [], info: IInfo | null} }

//request
const HomeRequest = async ():Promise<IResponse> =>{
    try {
        const response = await baseAxios.get('https://rickandmortyapi.com/api/character');
        return response;
    }catch (error) {
        throw error;
    }
}

export { HomeRequest }