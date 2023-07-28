import axios from 'axios'

// fonction pour récupérer toutes les données de la bdd
const getAllRequest = () => {
    const baseUrl = 'http://192.168.0.33:8000';

    axios({
    method: 'get',
    url: `${baseUrl}/api/clients/`,
    headers : {
        "Accept" : "application/json" // definir l'entête accept
    }
    })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => console.error(error)); 
}




export {
    getAllRequest,

}