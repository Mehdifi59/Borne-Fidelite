import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import NumberScreen from "../components/number/NumberScreen";
import { Svg, Path } from "react-native-svg";
import { Stack } from "expo-router";

const Details = () =>{
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary}}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
            />
            <Svg style={{position:"absolute"}} width={"100%"} height={"50%"}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <Path fill="#75CA97" fill-opacity="1" d="M0,288L34.3,293.3C68.6,299,137,309,206,293.3C274.3,277,343,235,411,192C480,149,549,107,617,117.3C685.7,128,754,192,823,224C891.4,256,960,256,1029,229.3C1097.1,203,1166,149,1234,122.7C1302.9,96,1371,96,1406,96L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></Path>
            </Svg>
        <View>
            <NumberScreen />            
        </View>
        </SafeAreaView>

    )
}

export default Details