import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { useState, useEffect } from "react"
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Dropdown from "../layouts/Dropdown"
import getMovies from "../../services/movieApi"
import MoviesList from "../lists/MoviesList"

const MoviesScreen = ({ navigation, route }) => {
    // console.log('route from MovieScreen -> ', route)
    const type = route.name // get a name of Tav.Screen
    // console.log('routeType', type)

    const dropdownItems = [
        { label: 'now_playing', value: 'now_playing' },
        { label: 'popular', value: 'popular' },
        { label: 'top_rated', value: 'top_rated' },
        { label: 'upcoming', value: 'upcoming' }
    ]

    const [dropmenu, setDropmenu] = useState(dropdownItems[0].value)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const handleDropdown = (dropdownItem) => {
        setDropmenu(dropdownItem)
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies(type, dropmenu)

                setMovies(moviesData)
                setLoading(false)
                console.log('this is movie screen loading -> ', loading)
            } catch (error) {
                console.error('Error fetching movies', error)
            }
        }
        fetchMovies()
    }, [type, dropmenu])
    // console.log('dropmenu ->', dropmenu)
    // console.log('movies -> ', movies)

    return (
        <SafeAreaView>
            {loading
                ? (
                    <ActivityIndicator
                        animating={true}
                        color={MD2Colors.Pink}
                        size="large"
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    />
                ) : (
                    <View>
                        <View style={[{ paddingHorizontal: 64 }, { paddingBottom: 32 }]}>
                            <Dropdown
                                onValueChange={(handleDropdown)}
                                items={dropdownItems}
                                value={dropmenu}
                            />
                        </View>
                        <MoviesList
                            movies={movies}
                            type={type}
                            navigation={navigation}
                        />
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default MoviesScreen