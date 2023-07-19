import {Stack} from 'expo-router';
import {COLORS} from '../constants/index'
import { Text, TouchableOpacity } from 'react-native';

export default function Layout() {
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