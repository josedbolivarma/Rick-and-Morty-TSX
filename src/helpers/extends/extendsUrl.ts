import { AxiosPromise } from "axios";
import { getCharacters } from "../../ts/interfaces/extendsUrl.interface";
import axios from "../baseUrl";

export const urlService = () => {
    // Get Characters URL
    const getCharacters = ({pageNumber = 1, name = '', status = '', gender= '', species= '' }: getCharacters): AxiosPromise<any> => {
        // console.log(pageNumber, name, status, gender, species);
        return axios({
            method: 'GET',
            url: `character/?&page=${pageNumber}&gender=${gender}&status=${status}&species=${species}&name=${name}`
        })
    }
    
    // Get Episodes URL
    
    return {
        getCharacters
    }

}


