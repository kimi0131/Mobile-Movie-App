import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screen/DetailScreen'
import ListScreen from '../screen/ListScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route }) => ({
              headerStyle: {
                backgroundColor: route.name === 'List' ? 'deeppink' : 'white'
              }}
            )}
          >
            <Stack.Screen
              name="List" 
              component={ListScreen}
              options={{
                title: 'Movies App',
                headerTintColor: 'white'     
              }} />
            <Stack.Screen
              name='Details'
              component={DetailScreen}
              options={({ route }) => ({
              title: route.params.title ? route.params.title : route.params.name,
              headerBackTitle: 'Back to List',
              headerTintColor: 'black'
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
)

export default AppStack