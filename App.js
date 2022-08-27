import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './Screen/ZipCodeScreen';
import WeatherScreen from './Screen/WeatherScreen';


const Stack = createStackNavigator();

export default function App() {

 return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
 );
} 

/*const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});*/
