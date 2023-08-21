import { Text, View, TouchableOpacity, Image } from "react-native";


const Card = ({title, imageUrl, points}) => {

     // Décodage de l'URL avant utilisation
     const decodedImageUrl = decodeURIComponent(imageUrl);

    return(
        <View style={{backgroundColor: "#fff", flex : 1, width: 350, borderRadius:10, margin: 20}}>
            
            <Text>{title}</Text>
            <Text>{points}</Text>
            <Text>{decodedImageUrl}</Text>
            <Image 
            source={{uri: `http://192.168.0.33:8000/images/products/${decodedImageUrl}`}}
            style={{ width: 100, height: 100 }} />

        </View>
    )
}

export default Card