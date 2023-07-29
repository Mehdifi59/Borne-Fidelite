import axios from 'axios'

const BASEURL = 'http://192.168.0.33:8000/api/clients';

// requête GET de l'api
const getAllRequest = async () => {
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
// requête pour post 
/**
 * 
 * @param {string} numero 
 */
const postData = async (numero) => {
    try{
        const response = await axios.post(BASEURL, {
            telephone : numero,
            nom : "testApi",
            prenom : "testApi",
            points : 20,
            createdAt : "2023-07-29T18:37:42.080Z"
        }, {
            headers: {
                "Accept" : "application/json"
            },
        })
        console.log(response.status)
    }
    catch(error) {
        console.error(error)
    }
}

export {
    getAllRequest,
    postData,

}