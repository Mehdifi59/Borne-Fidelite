import { View, SafeAreaView } from 'react-native';
import {COLORS} from '../constants'
import { HomeScreen } from "../components";
const Home = () => {
  return (
   <SafeAreaView style={{backgroundColor: COLORS.primary, flex:1}}>
    <View style={{flex:1}}>
        <HomeScreen />
    </View>
  </SafeAreaView>
  )
}

export default Home;