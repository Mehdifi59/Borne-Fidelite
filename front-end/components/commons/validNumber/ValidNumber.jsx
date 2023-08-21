import { Text, TouchableOpacity,Image } from "react-native";
import { useState, useEffect } from "react";
import { icons } from "../../../constants";
import { getAllRequest, postData } from "../../../api/requestClient";
import { hasPhoneNumber } from "../../../api/dataHandlerClient";
import { useRouter} from "expo-router";
import styles from "./ValidNumber.style";

const ValidNumber = ({number, valid}) => {
    console.log(valid)
    const router = useRouter()
    const [disabled,setDisabled]=useState(true)

    // Utilisation de useEffect pour mettre à jour l'état lorsque 'valid' change
    useEffect(() => {
      setDisabled(!valid); // Met à jour l'état 'disabled' en fonction de la valeur de 'valid'
    }, [valid]); // Le tableau des dépendances indique à React d'exécuter le useEffect lorsque 'valid' change


    const handleButtonPress = async () => {
    
      try {
        let exist = await hasPhoneNumber(number)
        if (exist) {
          router.push(`/catalogue/${number}` )
        }
        else {
          console.log("il n'existe pas")
          router.push(`/namePage/${number}` )
          
        }
      }
      catch(error) {
        console.error(error)
      }

    }

    return (
        <TouchableOpacity
        onPress={handleButtonPress}
        style={[
          styles.nextButton,
          disabled ? {backgroundColor : '#808080'} : styles.nextButton ,
        ]}
        disabled={disabled} 
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