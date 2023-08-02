import { Kohana } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import { useState } from 'react';
import styles from './TextInput.style';
const InputText = ({label}) => {
    const [text, setText] = useState('');
    const [isRed, setIsRed] = useState(false);

    const onChangeTextHandler = (newText) => {
      setText(newText);
      setIsRed(newText.includes('('));
      console.log(newText);
    };

    return (
      <View style={{height:80, marginTop:30}}>
        <Kohana
        style={[
          styles.inputStyle,
          isRed ? styles.alert : {borderColor : '#fff'},
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

    </View>
    )
}

export default InputText