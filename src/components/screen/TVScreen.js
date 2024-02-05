import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { useState, useEffect } from "react"
// import { useRoute } from '@react-navigation/native'
import Dropdown from "../layouts/Dropdown"
import getMovies from "../../services/movieApi"
import MoviesList from "../lists/MoviesList"


const TVScreen = ({ navigation, route }) => {
    // const route = useRoute()
    const type = route.name
    // console.log('type from TVscreen -> ', type)

    const dropdownItems = [
        { label: 'airing_today', value: 'airing_today' },
        { label: 'on_the_air', value: 'on_the_air' },
        { label: 'popular', value: 'popular' },
        { label: 'top_rated', value: 'top_rated' }
    ]

    const [dropmenu, setDropmenu] = useState(dropdownItems[0].value)
    const [tvs, setTvs] = useState([])

    const handleDropdown = (dropdownItem) => {
        setDropmenu(dropdownItem)
    }

    useEffect(() => {
        const fetchTVs = async () => {
            try {
                const tvsData = await getMovies(type, dropmenu)
                setTvs(tvsData)
            } catch (error) {
                console.error('Error fetching TVs', error)
            }
        }
        fetchTVs()
    }, [type, dropmenu])

    // console.log('dropmenu ->', dropmenu)
    // console.log('movies -> ', movies)

    return (
        <SafeAreaView>
            <View>
                <View style={[{ paddingHorizontal: 64 }, { paddingBottom: 32 }]}>
                    <Dropdown
                        onValueChange={(handleDropdown)}
                        items={dropdownItems}
                        value={dropmenu}
                    />
                </View>
                <MoviesList movies={tvs} type={type} navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

export default TVScreen