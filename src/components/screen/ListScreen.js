import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchScreen from "./SearchScreen";
import MoviesScreen from "./MoviesScreen";
import TVScreen from "./TVScreen";
// import Dropdown from "../layouts/Dropdown";

const Tab = createMaterialTopTabNavigator();

const ListScreen = ({navigation}) => {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63'
                }}
            >
                <Tab.Screen name="movie" component={MoviesScreen} navigation={navigation} />
                <Tab.Screen name="search" component={SearchScreen} navigation={navigation}/>
                <Tab.Screen name="tv" component={TVScreen} navigation={navigation}/>
            </Tab.Navigator>
    )
}



export default ListScreen