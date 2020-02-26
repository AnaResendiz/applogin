/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import{NavigationContainer}from '@react-navigation/native';
import{createStackNavigator}from 'react-navigation-stack';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Input,Item,Icon} from 'native-base';
import Login from './screens/Login';
import Registro from './screens/Registro';
import Perfil from './screens/Perfil';



const Stack = createStackNavigator();


const App:()=> React$Node =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          Component={Login}/>
        <Stack.Screen
          name='Registro'
          Component={Registro}/>
          <Stack.Screen
          name='Perfil'
          Component={Perfil}/>

      </Stack.Navigator>
    </NavigationContainer>

  );

};

export default App;
