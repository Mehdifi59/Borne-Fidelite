import React, { useState, useRef } from "react";
import {View, TouchableOpacity, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import NextButton from "../nextButton/NextButton";
import { getAllRequest } from "../../../api/request";

import styles from "./PhoneInput.style";


const NumberInput = () => {
  
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
    getAllRequest()
    return(
        <View style={{width: "100%", justifyContent:"center", alignItems:"center"}}>
          
        <PhoneInput
            containerStyle={{width:"80%"}}
            textInputStyle={{fontSize: 25}}
            codeTextStyle={{fontSize:25}}
            placeholder="652..."
            ref={phoneInput}
            defaultValue={value}
            defaultCode="FR"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />  
        <View style={{marginTop: 100}}>
          <NextButton
          valid={phoneInput.current?.isValidNumber(value)}
          number={formattedValue}
          />
        </View>
        </View>
    )
}

export default NumberInput