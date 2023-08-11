import { Kohana } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import { useState, useEffect } from 'react';
import styles from './InputText.style';

import { useRouter, useLocalSearchParams  } from "expo-router";

const InputText = ({label, onIsValidChange, onTextChange}) => {
    const [text, setText] = useState('');
    const [isCorrect, setIsCorrect] = useState(true);

    const regexNomPrenom = /^[a-zA-ZÀ-ÿ '-]+$/;

    const onChangeTextHandler = (newText) => {
      setText(newText);
      if (newText.trim() == ""){
        setIsCorrect(false)
        onIsValidChange(false)
      }
      else{
        if(regexNomPrenom.test(newText)){
          setIsCorrect(true);
          // Appeler la fonction de mise à jour de l'état 'isValid' du composant parent
          onTextChange(newText)
          onIsValidChange(true);
        }else{
          setIsCorrect(false);
          onIsValidChange(false);
        }
        
        
      }
    };

    // Vérifier si le champ est vide au chargement initial
    useEffect(() => {
    setIsCorrect(regexNomPrenom.test(text) || text === '');
    }, []);



    return (
      <View style={{height:80, marginTop:30}}>
        <Kohana
        style={[
          styles.inputStyle,
          isCorrect ? {borderColor : '#fff'} : styles.alert ,
        ]}
        
        label={label}
        onChangeText={onChangeTextHandler}
        defaultValue={text}
        iconClass={FontAwesomeIcon}
        iconName={'user'}
        iconColor={'#FEBB35'}
        inputPadding={16}
        labelStyle={{ color: "#9C9C9C" }}
        inputStyle={{ color: COLORS.black,}}
        labelContainerStyle={{ padding: 12 }}
        iconContainerStyle={{ padding: 20 }}
        useNativeDriver
      />

      {/* Afficher le message si isCorrect est false */}
      {!isCorrect && (
        <Text style={{ color: 'red', }}>Veuillez entrer un {label} correct.</Text>
      )}

    </View>
    )
}

export default InputText