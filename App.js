import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import AppStack from './src/components/stacks/AppStack';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppStack />        
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })

export default App