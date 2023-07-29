import { Text, TouchableOpacity,Image } from "react-native";
import { icons } from "../../../constants";
import { getAllRequest, postData } from "../../../api/request";
import { hasPhoneNumber } from "../../../api/dataHandlerClient";

const ValidNumber = ({number, valid}) => {

    const handleButtonPress = async () => {
      try {
        let exist = await hasPhoneNumber(number)
        if (exist) {
          console.log("il existe")
        }
        else {
          console.log("il n'existe pas")
        }
      }
      catch(error) {
        console.error(error)
      }

      // try{
      //   let exist = false;
      //   const data = await getAllRequest();
      //   data.forEach(client => {
      //     if (client.telephone == number) {
      //       exist = true
      //     }
      //   });
      //   if (!exist){
      //     postData(number)
      //     console.log("le numéro à été ajouté")
      //   }
      //   else{
      //     console.log("il existe déjà :/")
      //   }
      //   console.log(valid);
      //   console.log(number)
      // }catch(error){
      //   console.error(error)
      // }
    }

    return (
        <TouchableOpacity
        onPress={handleButtonPress}
        style={{backgroundColor:"#E66298", height:100, marginTop:50, width : 100, borderRadius: 100, justifyContent:"center",alignItems:"center"}}
      >
        <Image 
          style={{width: '40%', height:"40%"}} 
          source={icons.arrowRight}
          resizeMode="contain"
        />
        
      </TouchableOpacity>
    )
}

export default ValidNumber