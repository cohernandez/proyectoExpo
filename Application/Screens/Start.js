import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from '../Components/BackgroundImage';
import AppButton from '../Components/AppButton';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

import Expo from 'expo';


import facebook from '../Utils/facebook';
//import auth from '@react-native-firebase/auth';
//import { LoginManager, AccessToken } from 'react-native-fbsdk';

export default class Start extends Component {
    static navigationOptions = {
        title: 'LaVeille'
    };

    login() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    register() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Register'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    async facebook() {
 
        const { type, token } = await Expo.Facebook.LogInWithReadPermissionsAsync(
            facebook.config.application_id,
            { permissions: facebook.config.permissions }
        );
        //Validar si todo ha ido bien
        if (type === "Success") {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credentials)
                .catch(error => {
                    Toast.showWithGravity('Error to access with facebook', Toast.LONG, Toast.BOTTOM);
                })
        } else if (type === "cancel") {
            Toast.showWithGravity('Access with facebook cancel', Toast.LONG, Toast.BOTTOM);
        }
        else {
            Toast.showWithGravity('Error desconocido', Toast.LONG, Toast.BOTTOM);
        }
        

    }

    render() {
        return (
            <BackgroundImage source={require('../../assets/Images/login.png')}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <AppButton
                        bgColor="rgba(111, 38, 74, 0.7)"
                        title="Login"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#fff"
                    />

                    <AppButton
                        bgColor="rgba(200, 200, 50, 0.7)"
                        title="Register"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#fff"
                    />

                    <AppButton
                        bgColor="rgba(67, 67, 146, 0.7)"
                        title="Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#fff"
                    />

                </View>
            </BackgroundImage>
        )
    }
}