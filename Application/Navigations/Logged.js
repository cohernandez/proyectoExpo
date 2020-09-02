import React from 'react';

/**
 * Screens
 */
import VulnsScreen from '../Screens/Vulns/Vulns';
import AddVuln from '../Screens/Vulns/AddVuln';

import FrameworkScreem from '../Screens/Framework/Framework';
import addFramework from '../Screens/Framework/AddFramework';

import AlertScreen from '../Screens/Alerts/Alerts';
import addAlert from '../Screens/Alerts/addAlert';



import LogoutScreen from '../Screens/Logout';

//Fin Screens exports


import { DrawerNavigator, StackNavigator } from 'react-navigation';

import { createStackNavigator  } from 'react-navigation-stack'; //Quizas deba utilizar esta solucion en vez del StackNavigator
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * Para Usuarios Identificados
 */
//Estilos para toda la navegacion de la Aplicacion
const navigationOptions = {
    headerStyle: {
        backgroundColor: 'rgba(200, 38, 74, 1)',
    },
    headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
};

//Iconos a la izquierda
const leftIcon = (navigation, icon) =>
    <Icon
        name={icon}
        style={{ marginLeft: 20 }}
        size={20}
        color="white"
        onPress={() =>
            navigation.navigate('DrawerOpen')
        }
    />;

//Iconos a la derecha
const rightIcon = (navigation, icon) =>
    <Icon
        name={icon}
        style={{ marginLeft: 20 }}
        size={30}
        color="white"
        onPress={() =>
            navigation.navigate('ListAlerts')
        }
    />;

//Definiendo las Navegaciones VULNS
const VulnsScreenStack = StackNavigator(
    {
        ListVulns: {
            screen: VulnsScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Vulnerabilidades',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        
        AddVuln: {
            screen: AddVulnScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Ingresar Alerta',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);


//Definiendo las Navegaciones de Alert
const AlertsScreenStack = StackNavigator(
    {
        ListAlerts: {
            screen: AlertsScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Alertas',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        
        AddAlert: {
            screen: AddAlertScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Ingresar Alerta',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);


const FrameworkScreenStack = StackNavigator(
    {
        ListFramework: {
            screen: FrameworkScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Framework',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        
        addFramework: {
            screen: AddFrameworkScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Ingresar Framework',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);

const AlertScreenStack = StackNavigator(
    {
        ListAlert: {
            screen: AlertScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Alert',
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} style={{ color: tintColor }} />),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        
        addAlert: {
            screen: AddAlertScreen,
            navigationOptions: ({ navigation }) => ({
                title: 'Ingresar Alerta',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);



const logoutScreenStack = StackNavigator({
    LogoutScreen: {
        screen: LogoutScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Cerrar Sesion',
            drawerIcon: ({ tintColor }) => (<Icon name="sign-out" size={24} style={{ color: tintColor }} />)
        })
    }
})


export default DrawerNavigator(
    {
        VulnsScreen: {
            screen: VulnsScreenStack
        },

        AlertsScreen:{
            screen: AlertScreenStack
        },

        FrameworkScreem:{
            screen: FrameworkScreenStack
        },

        LogoutScreen: {
            screen: logoutScreenStack
        }
    },
    {
        drawerBackgrundColor: 'rgba(128,35,60, 0.7)',
        contentOptions: {
            activateTintColor: 'white',
            activateBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle: {
                marginVertical: 0
            }
        },
    }
)