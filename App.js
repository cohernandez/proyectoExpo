import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import 'react-native-gesture-handler';

//Componentes (Funcionamiento) Basico(s) de la Aplicacion
import Search from './Application/Components/Search'
import AppButton from './Application/Components/AppButton';
import PreLoader from './Application/Components/PreLoader';
import BackgroundImage from './Application/Components/BackgroundImage';
import Start from './Application/Screens/Start';

import Drawers from './Application/Screens/Menu';

console.disableYellowBox = true;
/**
 * Navegaciones
 */
import { createAppContainer } from 'react-navigation';
import GuestNavigation from './Application/Navigations/Guest';
//import LoggedNavigation from './Application/Navigations/Logged';

/**
 * Firebase Configuration
 */
import firebaseConfig from './Application/Utils/firebase'
import * as firebase from 'firebase';


import VulnEmpty from './Application/Components/Vuln/VulnEmpty';
import FrameworkEmpty from './Application/Components/Framework/FrameworkEmpty';

import AlertEmpty from './Application/Components/Alert/AlertEmpty'
import Alerts from './Application/Screens/Alerts/Alerts';
// import Alerts from './Application/Screens/Alerts/Alerts';

import { FlatList } from 'react-native-gesture-handler';

firebase.initializeApp(firebaseConfig);

//Lo que decia el profe
AppContainer = createAppContainer(GuestNavigation);

export default class App extends React.Component {
  //Metodos Constructores
  constructor() {
    //Funciones y codigo
    super();//Para Heredar de componente
    this.state = {
      isLogged: false,
      loaded: false,
    }
  }

  //Evento
  async componentDidMount() {
    /*
    Para cerrar sesion
    */
    //firebase.auth().signOut();

    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({
          isLogged: true,
          loaded: true
        });
      } else {
        this.setState({
          isLogged: false,
          loaded: true
        });
      }
    })
  }

  render() {
    const { isLogged, loaded } = this.state;
    //--Vamos a comprobar si no ha cargado
  
    if (!loaded) {
      //Si no ha cargado hacemos un return del Componente PreLoader
      return (<PreLoader />);
    }   
    if(isLogged){
      return(
        <Drawers />
        )
    }else{
      return(<AppContainer />)
    }
  }
}


