import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import Register from './screen/Register';
import MainTabScreen from './screen/MainTabScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabScreen" component={MainTabScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App