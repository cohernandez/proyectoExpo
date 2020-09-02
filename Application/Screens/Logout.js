import React, { Component } from 'react';
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

export default class Logout extends Component {
    componentDidMount() {
        firebase.auth().signOut()
            .then(() => {
                //Que the ha ido bien
                Toast.showWithGravity("Has cerrado sesion correctamente", Toast.LONG, Toast.BOTTOM);
            })
            .catch(error => {
                //Que te ha ido mal, que has tenido un problema
                Toast.showWithGravity(error.message, Toast.LONG, Toast.BOTTOM);
            })
    }

    render() {
        return null;
    }

}
