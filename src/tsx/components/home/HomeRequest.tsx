//Axios
import { baseAxios } from "../../config/Axios";

//Type custom
type IResponse = { data: { results: [ICharacters] | null, info: IInfo | null} }

//request
const HomeRequest = async (url:string):Promise<IResponse> =>{
    try {
        const response = await baseAxios.get(url);
        return response;
    }catch (error) {
        throw error;
    }
}

export { HomeRequest }