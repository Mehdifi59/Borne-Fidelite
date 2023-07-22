import { useState } from "react";
import { TextInput } from "react-native";
import styles from "./Input.style";


const Input = () => {
    const [value, onValueChange] = useState("bjr")
    return(
        <TextInput
            editable
            style={styles.input} 
            onChangeText={text => onValueChange(text)}
            placeholder="0657...."
            keyboardType="numeric"
            value={value}
            
        />
    )
}

export default Input