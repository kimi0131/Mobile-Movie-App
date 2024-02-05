import { Card, Button, Text, overlay } from 'react-native-paper';
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native';

const MovieTVCard = props => {
    const { title, popularity, releasedate, source, navigation, id, type } = props

    return (
        <SafeAreaView>
            <View style={cardStyle.cardContainer}>
                <Card style={{ maxHeight: 120 }}>
                    <View style={cardStyle.contentContainer}>
                        <View style={{ flex: 1 }} >
                            <Card.Cover
                                source={{ uri: source }}
                                style={[{ borderTopRightRadius: 0, maxHeight: 120}]}
                            />
                        </View>
                        <View  style={{ flex: 2 }} >
                            <Card.Title
                                title={title} 
                                style={cardStyle.title} 
                                titleStyle={[{ fontWeight: 'bold' },{ maxHeight: 24}]} 
                            />
                            <Card.Content >
                                <Text variant="bodySmall">Popularity: {popularity}</Text>
                                <Text variant="bodySmall">Release Date: {releasedate}</Text>
                            </Card.Content>

                            <View >
                                <Card.Actions>
                                    <Button style={cardStyle.button} mode='contained-tonal' buttonColor='deepskyblue' textColor='white' onPress={() => {
                                        navigation.navigate('Details', { id, type, title })
                                    }}>More Details</Button>
                                </Card.Actions>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
};

const cardStyle = StyleSheet.create({
    cardContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    contentContainer: {
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'flex-start',
        paddingHorizontal: 40
    },
    title: {
        padding: 0,
        minHeight: 32
    }
})

export default MovieTVCard