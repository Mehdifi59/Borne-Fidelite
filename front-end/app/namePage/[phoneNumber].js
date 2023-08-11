import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams  } from "expo-router";
import { Stack } from "expo-router";
import GoBack from "../../components/commons/goBack/GoBack";
import { COLORS } from "../../constants";
import NamePageScreen from "../../components/namePage/NamePageScreen";

const namePage = () => {
    const router = useRouter()
    const {phoneNumber} = useLocalSearchParams();

    const handleClick = () => {
        router.back()
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary}}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
            />
             <View style={{height: "5%", justifyContent:"center"}}>
                <GoBack back={() => router.back() }/>
            </View>
            <NamePageScreen phoneNumber={phoneNumber} />
        </SafeAreaView>
    )   
}


export default namePage
