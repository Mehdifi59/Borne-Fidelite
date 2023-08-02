import { Kohana } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
const InputText = ({label}) => {

    return (
      <View style={{height:80, marginTop:30}}>
        <Kohana
        style={{ backgroundColor: '#f9f5ed',  width: "70%", elevation : 5, borderRadius:5 }}
        label={label}
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