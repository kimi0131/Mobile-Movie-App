import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"
import getSearchResult from "../../services/searchApi"
import Form from "../form/Form"
import MoviesList from "../lists/MoviesList"
import { useState } from "react"
import { Text } from "react-native-paper"

const SearchScreen = ({ navigation, route }) => {

    const type = route.name
    // console.log("type from Search Screen", type)

    const dropdownItems = [
        { label: 'multi', value: 'multi' },
        { label: 'tv', value: 'tv' },
        { label: 'movie', value: 'movie' }
    ]

    const [dropmenu, setDropmenu] = useState(dropdownItems[0].value)
    const [search, setSearch] = useState([])
    const [query, setQuery] = useState('')

    const handleDropdown = (dropdownItem) => {
        setDropmenu(dropdownItem)
    }

    const onInputChange = query => {
        setQuery(query);
    }

    const onPress = () => {
        const fetchSearch = async () => {
            try {
                const searchData = await getSearchResult(query, type, dropmenu)
                setSearch(searchData)
            } catch (error) {
                console.error('Error fetching search', error)
            }
        }
        fetchSearch();
    }

    return (
        <SafeAreaView>
            <View>
                <Form
                    onChangeText={onInputChange}
                    onPress={onPress}
                    onValueChange={(handleDropdown)}
                    items={dropdownItems}
                    value={dropmenu}
                />
            </View>
            {search.length === 0
                ?
                <Text style={[{paddingVertical: 80}, {paddingHorizontal: 32}]}variant="headlineLarge">Let's find movies / TV programs!</Text>
                :
                <View>
                    <MoviesList
                        movies={search}
                        // type={type} 
                        navigation={navigation}
                    />
                </View>
            }

        </SafeAreaView>
    )
}

export default SearchScreen

    // useEffect(() => {
    //     const onPress = () => {
    //         const fetchSearch = async () => {
    //             try {
    //                 const searchData = await getSearchResult(query, type, dropmenu)
    //                 setSearch(searchData)
    //             } catch (error) {
    //                 console.error('Error fetching movies', error)
    //             }
    //         }
    //         fetchSearch()
    //     }
    // },[query, type, dropmenu])
