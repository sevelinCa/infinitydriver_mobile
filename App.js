import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/Pages/Onboarding';
import Home from './src/Pages/Home';
import { useFonts } from 'expo-font';
import Courses from './src/Pages/Courses';
import CoursesCategory from './src/Pages/CourseCategory';
import {NavigationContainer} from "@react-navigation/native"
import Navigation from './src/Navigation';


export default function App() {
  const [fontsLoaded] = useFonts({
    "Jost-regular": require('./assets/fonts/Jost-VariableFont_wght.ttf'),
    "Jost-medium": require('./assets/fonts/Jost-Medium.ttf'),
    "Jost-bold": require('./assets/fonts/Jost-Bold.ttf'),
    "Jost-light": require('./assets/fonts/Jost-Light.ttf'),

})
if(!fontsLoaded){
    return undefined
}
  return (
    <View style={styles.container}>
      <NavigationContainer>


       <Navigation/>
      </NavigationContainer>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
   
  

  },
});
