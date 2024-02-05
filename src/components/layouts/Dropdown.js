import RNPickerSelect from 'react-native-picker-select'
import { StyleSheet, View } from 'react-native';
import { Chevron } from 'react-native-shapes';

const Dropdown = (props) => {

    const { onValueChange, items, value } = props
    // console.log("first items props", props.items[0]);
    

    return (
        <View>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={items}
                value={value}
                style={dropdownStyle.picker}
                placeholder={{}}
                useNativeAndroidPickerStyle={false}

                Icon={() => {
                    return <Chevron size={1.5} color="gray" />;
                }}
            />
        </View>
    )
}

const dropdownStyle = StyleSheet.create({
    picker: {
        iconContainer: {
            top: 20,
            right: 20,
          },
        inputIOS: {
            fontSize: 16,
            borderWidth: 1,
            borderColor: 'lightgray',
            paddingLeft: 16,
            paddingVertical:12,
          },
          inputAndroid: {
              fontSize: 16,
              borderWidth: 1,
              borderColor: 'lightgray',
              paddingLeft: 16,
              paddingVertical:12,
          },
    }
})

export default Dropdown
