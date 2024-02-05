

// ({ navigation }) => <Movie navigation={navigation} route={route} />

import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, StyleSheet, Image } from "react-native"
import { Text } from "react-native-paper"
import { useState, useEffect } from "react"
import getDetail from "../../services/detailApi"
import { IMG } from "../../config/apiConfig"


const DetailScreen = ({ route }) => {
    const { id, type } = route.params
    // console.log('type -> ', type)
    // console.log('id -> ', id)
    const [detail, setDetail] = useState("")

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const detailData = await getDetail(type, id)
                setDetail(detailData)
            } catch (error) {
                console.error('Error fetching movies', error)
            }
        }
        fetchDetail()
    },[id, type])
    // console.log('detail -> ', `${IMG}${detail.poster_path}`)

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentContainerStyle={detailStyle.container}>
                <Text variant="titleLarge" style={detailStyle.title}>{detail.title ? detail.title : detail.name} </Text>

                <Image 
                    style={detailStyle.image}
                    source={{ uri : `${IMG}${detail.poster_path}` }} 
                />
                <Text variant="bodyMedium" style={detailStyle.text}>{detail.overview}</Text>
                <Text variant="labelSmall" style={detailStyle.text}>Popularity: {detail.popularity} | Release Date: {detail.release_date}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const detailStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 24,
        padding: 42,
        paddingTop: 0
    },
    image: {
        width: 240,
        height: 240,
        marginTop: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    text: {
        alignSelf: 'flex-start'
    }
})

export default DetailScreen