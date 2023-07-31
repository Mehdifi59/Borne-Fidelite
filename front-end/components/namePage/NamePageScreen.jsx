import { View, Image, TextInput, Text } from "react-native";
import { images } from "../../constants";
import styles from "./NamePageScreen.style";
import React from 'react';
const NamePageScreen = () => {
    const [text, onChangeText] = React.useState('');
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

            <View style={{width: "100%", alignItems:"center", marginTop: 100}}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nom"
            />
            </View>
        </View>
    )
}

export default NamePageScreen