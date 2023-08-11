import { View, Image, Text, TouchableOpacity } from "react-native";
import { images } from "../../constants";
import InputText from "../commons/textInput/InputText";
import styles from "./NamePageScreen.style";
import {icons} from "../../constants";
import NextButton from "../commons/nextButton/NextButton";
import { useState } from "react";

const NamePageScreen = ({phoneNumber}) => {

    const [isValidNom, setIsValidNom] = useState(false);
    const [isValidPrenom, setIsValidPrenom] = useState(false);
    const [nom, setNom ] = useState("");
    const [prenom, setPrenom ] = useState("");
    
    return (
        
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    resizeMode="contain"
                    source={images.welcome}
                    style={styles.imgSize}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Entrez vos informations</Text>
                <Text style={styles.text}>Veuillez entrer votre nom et prénom</Text>
            </View>

            <View style={{width: "100%", alignItems:"center", marginTop: 40}}>

            <InputText label={"Nom"} onIsValidChange={setIsValidNom} onTextChange={setNom} />
            <InputText label={"Prénom"} onIsValidChange={setIsValidPrenom} onTextChange={setPrenom} />

            </View>

            <View >
                <NextButton 
                    isValidNom={isValidNom} isValidPrenom={isValidPrenom} nom={nom} prenom={prenom} numero={phoneNumber}
                />
            </View>

        </View>
    )
}

export default NamePageScreen