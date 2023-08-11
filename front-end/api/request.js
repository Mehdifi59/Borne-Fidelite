import axios from 'axios'

let today = new Date();

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
/**
 * requête post
 * envoie les données dans la base de données d'un nouveau clients (20 points à l'inscription)
 * @param {string} numero 
 * @param {string} nom 
 * @param {string} prenom 
 */
const postData = async (numero, nom, prenom) => {
    try{
        const response = await axios.post(BASEURL, {
            telephone : numero,
            nom : nom,
            prenom : prenom,
            points : 20,
            createdAt : today
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