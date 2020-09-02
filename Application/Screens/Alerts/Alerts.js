import React, { Componet } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import PreLoader from '../../Components/PreLoader';
import { StyleSheet, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

import { NavigationActions } from 'react-navigation';

import AlertAddButton from '../../Components/Alert/AlertsAddButton';
import AlertEmpty from '../../Components/Alert/AlertEmpty';
import ListAlert from '../../Components/Alert/ListAlerts';

import axios from 'axios';

/**
 * Definiendo el Componente Alerts
 */

 export default class Alerts extends React.Component {
    constructor() {
        super();
        this.state = {
            CVE_Items:[],
            alerts: [],
            loaded: false,
            nistDB: 'https://services.nvd.nist.gov/rest/json/cves/1.0'
        };

        this.refAlerts = firebase.database().ref.child('alerts')

    }

    /**
     * Referencia DB Firebase
     */

    componetDidMount() {
        this.refAlerts.on('value',snapshot =>{
            let alerts = [];
            snapshot.forEach(row =>{
                alerts.push({
                    cve : row.key,
                    reference: row.val().reference,
                    description: row.val().description,
                    userInteraction: row.val().userInteraction,
                    attackVector: row.val().attackVector,
                    complexity: row.val().complexity,
                    privilegesRequired: row.val().privilegesRequired,
                    confidentiality: row.val().confidentiality,
                    integrity: row.val().integrity,
                    availability: row.val().availability,
                    scope: row.val().scope,
                    editor: row.val().editor,
                    vulnerableComponentsOnSecurityWatchPerimeter: row.val().vulnerableComponentsOnSecurityWatchPerimeter
                })
            });

            this.setState({
                alerts,
                CVE_Items,
                loaded: true
            })

        })


        this.getAlerts(
            axios.get(nistDB)
                .then(function (response) {
                    console.warn(response.data.CVE_Items);
                })
        );
    }

    componentWillMount()
    {
        async function getAlertsFromNist() {
            try {
                const response = await axios({
                    url: 'https://services.nvd.nist.gov/rest/json/cves/1.0',
                    method: 'GET'
                }).then(res=>{
                    console.log(res.data)
                })
        
                //return res
        
            } 
            
            catch (err) {
                console.log(err)
            }
        }
        getAlertsFromNist()
    }


    addAlert(){
        const navigateAction = NavigationActions.navigate({
            routeName:'AddAlert'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    alertDetail(alert){

    }

    renderAlert(alert){
        return(
            <ListItem 
                containerStyle={styles.item}
                titleStyle={styles.title}
                roundAvatar
                title={`${alert.cve} (Descripcion: ${alert.description})`}
                onPress={()=>this.alertDetail(alert)}
                rightIcon={{name:'arrow-right', type:'font-awesome', style:styles.listIconStyle}}
            />
        )
    }


    //Aca el codigo mas importante para el proceso de descarga del .json del nist 
    getAlerts = () => {
        this.setState({ loaded: true });
        fetch(this.state)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    alert: res.result,
                    //url: res.CVE_Items,
                    loaded: false
                });
                console.log(data);
            })
        .catch(err=>console.log(err));
    };

    render() {
        const {loaded, alerts}=this.state;

        if(!loaded){
            return <PreLoader />
        };

        if(!alerts.length){
            return(
                <BackgroundImage source={require('../../../assets/Images/sonar.png')}>
                    <AlertEmpty text="No hay alertas disponibles"/>
                    <AlertAddButton addAlert={this.addAlert.bind(this)}/>
                </ BackgroundImage>
            );
        }

        if (this.state.loaded) {
            return (
                <BackgroundImage source={require('../../../assets/Images/sonar.png')}>
                    <FlatList 
                    data={alerts}
                    renderItem={(data)=>this.renderAlert(data.item)}
                    />
                </BackgroundImage>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: 50, paddingLeft: 5 }}>
                <FlatList
                    data={this.state.alert}
                    renderItem={
                        ({ item }) => <Text>{item.cve}</Text>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});