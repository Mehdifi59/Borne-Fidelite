import { TouchableOpacity, Image } from "react-native"
import { icons } from "../../../constants"
import { postData } from "../../../api/requestClient"
import { useEffect, useState } from "react"
import { useRouter } from "expo-router"
import styles from "./NextButton.style"

const NextButton = ({isValidNom, isValidPrenom, nom, prenom, numero}) => {
    const router = useRouter()
    const [disabled,setDisabled]=useState(true)

    // Utilisation de useEffect pour mettre à jour l'état lorsque 'valid' change
    useEffect(() => {
      setDisabled(!isValidNom || !isValidPrenom); // Met à jour l'état 'disabled' en fonction de la valeur de 'valid'
      console.log("doit etre desactive : " + disabled)
    }, [isValidNom, isValidPrenom]); // Le tableau des dépendances indique à React d'exécuter le useEffect lorsque 'valid' change

    const onHandlePress = () => {
        if(isValidNom && isValidPrenom){
            postData(numero,nom,prenom)
            router.push(`/catalogue/${numero}`)
        } 
    }
    
    return (
        <TouchableOpacity
        onPress={onHandlePress}
        style={[
            styles.btn,
            disabled ? {backgroundColor : '#808080'} : styles.btn,
        
        ]}
        disabled={disabled}
        >
            <Image 
            style={styles.btnImg} 
            source={icons.arrowRight}
            resizeMode="contain"
            />
        </TouchableOpacity>
    )

}

export default NextButton