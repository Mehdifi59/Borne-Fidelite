import { Text, View, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, Stack } from "expo-router";
import { COLORS } from "../../constants";
import GoBack from "../../components/commons/goBack/GoBack";
import { getDataFromNumber } from "../../api/dataHandlerClient";
import { useEffect, useState } from "react";
import Header from "../../components/catalogue/header/Header";

const catalogue =  () => {
    const {phoneNumber} = useLocalSearchParams();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true); // Début du chargement
                const response = await getDataFromNumber(phoneNumber);
                setResponse(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }finally{
                setIsLoading(false)
            }
        };

        fetchData();
    }, [phoneNumber]);

    console.log(response);
   
    return(
        <View style={{flex:1, backgroundColor: COLORS.primary}}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                }}
            />

            {isLoading ? ( // Si isLoading est true, affiche un ActivityIndicator
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color={COLORS.secondary} />
                </View>
            ) :

            ( // Sinon, affiche le contenu de la page
            <View style={{ flex: 1 }}>
                <View style={{ height: "20%", justifyContent: "center", alignItems: "center" }}>
                    <Header
                        prenom={response?.prenom || ""} // Utilisation de la condition optionnelle pour prévenir les erreurs si response est null
                    />
                </View>
                {/* Autre contenu de votre page */}
            </View>
        )}
    </View>
    )
}

export default catalogue