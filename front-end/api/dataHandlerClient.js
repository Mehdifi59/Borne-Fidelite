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

export {
    hasPhoneNumber,
}