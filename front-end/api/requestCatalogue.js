import axios from 'axios'

let today = new Date();

const BASEURL = 'http://192.168.0.33:8000/api/catalogues';

// requête GET de l'api
const getAllCatalogue = async () => {
    try {
        const response = await axios.get(BASEURL, {
            headers: {
                "Accept" : "application/json"
            }
        })
        return response.data
    }
    catch(error) {
        console.error(error);
        return null
    }
}



export {
    getAllCatalogue,
}