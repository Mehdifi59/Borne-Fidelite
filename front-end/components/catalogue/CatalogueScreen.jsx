import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator } from "react-native";
import styles from "./CatalogueScreen.style";
import Card from "../commons/card/Card";
import { getAllCatalogue } from "../../api/requestCatalogue";
import { useEffect, useState } from "react";
import { COLORS } from "../../constants";

const CatalogueScreen = ({points}) => {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const data = await getAllCatalogue();
                setResponse(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }finally {
                setIsLoading(false)
                
            }
        }

        fetchData();
    }, [])

    return (
        
        <View style={{flex: 1}}>
            {isLoading ? ( // Si isLoading est true, affiche un ActivityIndicator
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color={COLORS.secondary} />
                </View>
            ) : 
            ( // Sinon, affiche le contenu de la page
            <View style={{height: "90%"}}>
            <View style={{height: "20%", justifyContent: 'center', alignItems:'center'}}>
                <Text style={styles.text}>Profite de tes {points} points !</Text>
            </View>
            <View style={{height: "50%",}}>
                <ScrollView
                    horizontal={true}
                >
                    {console.log(response)}
                    {response.map(item => {
                        if (item.online){
                            return(
                                <Card
                                title={item.title}
                                points={item.points}
                                imageUrl={item.image}                       
                            />
                            )

                        }
                    })}
                    

                </ScrollView>
            </View>
            </View>
            )}
        </View>

    )
}

export default CatalogueScreen