import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const stack = createStackNavigator();
const App:() => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
         <stack.Navigator
           initialRouteName='Home'
           headerMode='screen'
         >
           <Stack.Screen
             name='Home'
             options={{
               headerShown: false
             }} 
           >
             {(props) => <Home {...props} username='Sports Fan' />}
           </Stack.Screen>
         </stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
