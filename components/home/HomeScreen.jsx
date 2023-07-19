import {View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./HomeScreen.style";
import {images} from "../../constants"
import {Svg, Path} from 'react-native-svg';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={{height:"50%"}}>
            <Image 
                source={images.vazygood}
                resizeMode="contain"
                style={styles.imgSize}
            />
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Vazy</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, height:"100%"}}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height="100%" width="100%" preserveAspectRatio="none">
                <Path fill="#E66298" fill-opacity="1" d="M0,160L60,154.7C120,149,240,139,360,112C480,85,600,43,720,32C840,21,960,43,1080,69.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></Path>
            </Svg>   
            </View>
        </View>
        
    )

}

export default HomeScreen