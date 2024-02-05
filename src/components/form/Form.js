import { View, StyleSheet } from "react-native"
import { Text, Button, TextInput } from "react-native-paper"
import Dropdown from "../layouts/Dropdown"

const Form = props => {

    const { onChangeText, onPress, onValueChange, query, items, value } = props


    return (
        <View style={formStyles.card}>
            <View>
                <TextInput
                    label="&#x1f50d;  Search Movie / TV Show Name *"
                    value={query}
                    placeholder="i.e. James Bond, CSI"
                    onChangeText={onChangeText}
                    forceTextInputFocus={true}

                />
            </View>

            <View>
                <Text>Choose Search Type *</Text>
            </View>

            <View>

                <View style={formStyles.actions}>
                    <View style={[{ flex: 1 }]}>
                        <Dropdown
                            onValueChange={onValueChange}
                            items={items}
                            value={value}

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            // icon="search" 
                            mode="contained"
                            onPress={onPress}
                            buttonColor="deeppink"
                        > Search  &#x1f50d;</Button>
                    </View>
                </View>
                <View>
                    <Text variant="bodySmall">Please select a search type.</Text>
                </View>
            </View>
        </View>
    )
}
const formStyles = StyleSheet.create({
    card: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        gap: 8
    },
    actions: {
        flexDirection: 'row',
        gap: 16
    }
})

export default Form