import {Stack} from 'expo-router';
import {COLORS} from '../constants/index'
import { Text, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';

const Layout = () => {

  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('../assets/fonts/Poppins-Bold.ttf'),
    'PoppinsMedium': require('../assets/fonts/Poppins-Medium.ttf'),
    'PoppinsRegular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return <Stack 
    screenOptions={{
      headerStyle :{
      backgroundColor : COLORS.primary
      },
      headerTitle : '',
      headerShadowVisible: false,      
      
    }}
  />;
}

export default Layout