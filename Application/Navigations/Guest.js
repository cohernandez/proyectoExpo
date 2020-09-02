import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from '../Screens/Start';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';

export default createStackNavigator (
//export default StackNavigator(
    {
        Start: {
            screen: StartScreen
        },
        Login: {
            screen: LoginScreen
        },
        Register: {
            screen: RegisterScreen
        },
    },
    {
        initialRouteName: 'Start',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold'
            }
        }
    }
)