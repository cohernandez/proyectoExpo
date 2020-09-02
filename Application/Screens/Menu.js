import * as React from 'react';
//import { Button, View } from 'react-native';

import { Text, StatusBar, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Screens
 */
//import VulnsScreen from '../Screens/Vulns/Vulns';
//import AddVuln from '../Screens/Vulns/AddVuln';

import LogoutScreen from './Logout';
import Alerts from './Alerts/Alerts';

/**
 * Components
 */
import AlertsAddButton from '../Components/Alert/AlertsAddButton';
import AlertEmpty from '../Components/Alert/AlertEmpty';
import ListAlerts from '../Components/Alert/ListAlerts';

import VulnAddButton from '../Components/Vuln/VulnAddButton'
import VulnEmpty from '../Components/Vuln/VulnEmpty';

import FrameworkAddButton from '../Components/Framework/FrameworkAddButton';
import FrameworkEmpty from '../Components/Framework/FrameworkEmpty';


/**
 *Navegaciones Drawer
 */

function HomeScreen({ navigation }) {
    return (
            <AlertEmpty cve="Listado de alertas cves e indicadores de Gestion"/>
    );
}

function VulnsScreen({ navigation }) {
    return (
            <VulnEmpty text="Las alertas (empty) procesadas por el NIST"/>        
    );
}

function AlertsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>           
            <ListAlerts />
            <AlertsAddButton />
        </View>
    );
}

function FrameworkScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Lista de Alertas registradas en CSMS</Text>
            <FrameworkEmpty />
            <FrameworkAddButton />
            <Button onPress={() => navigation.goBack()} title="Go back Framework" />
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Profile')}
                title="Go to Profile"
            />
        </View>
    );
}



function LogOutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Salir" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function Drawers() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Vulns" component={VulnsScreen} />
                <Drawer.Screen name="Alerts" component={AlertsScreen} />
                <Drawer.Screen name="Framework" component={FrameworkScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Log-out" component={LogOutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Drawers;

