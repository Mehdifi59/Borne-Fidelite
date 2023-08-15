import { getAllRequest } from "./request";

const hasPhoneNumber = async (phoneNumber) => {
    try{
        const data = await getAllRequest();
        return data.some(client => client.telephone === phoneNumber);
      }
      catch(error){
        console.error(error)
      }
}

const getDataFromNumber = async (phoneNumber) => {
  try{
    const data = await getAllRequest();
    const foundItem = data.find(item => item.telephone === phoneNumber);
    return foundItem || null; // Retourne null si l'objet n'est pas trouvé
  }
  catch(error){
    console.error(error)
    return null; // Retourne null en cas d'erreur
  }
}


export {
    hasPhoneNumber,
    getDataFromNumber
}