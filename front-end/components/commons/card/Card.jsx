import { Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import styles from "./Card.style";

const Card = ({title, imageUrl, points}) => {

     // Décodage de l'URL avant utilisation
     const decodedImageUrl = decodeURIComponent(imageUrl);

    return(
        <View style={styles.container}>
            <Image 
            source={{uri: `http://192.168.0.33:8000/images/products/${decodedImageUrl}`}}
            resizeMode="cover"
            style={styles.img} />
            
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Obtenir</Text></TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.points}>{points} points</Text>
        </View>
    )
}

export default Card