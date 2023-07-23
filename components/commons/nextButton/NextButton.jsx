import { Text, TouchableOpacity,Image } from "react-native";
import { icons } from "../../../constants";

const NextButton = ({number, valid}) => {
    console.log(number)
    return (
        <TouchableOpacity
        onPress={() => {
          console.log(valid);
          console.log(number)
        }}
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

export default NextButton