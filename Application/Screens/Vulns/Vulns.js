import React, { Componet } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import PreLoader from '../../Components/PreLoader';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as firebase from 'firebase';

import { NavigationActions } from 'react-navigation';
import VulnEmpty from '../../Components/Vuln/VulnEmpty';
import VulnAddButton from '../../Components/Vuln/VulnAddButton'

//Definiendo el Componente Vulns
export default class Vulns extends Componet {
    constructor() {
        super();
        this.state = {
            vulns: [],
            loaded: false,
            vuln_logo_editor: require('../../../assets/Images/sonar.png')
        };

        //Referencia a la base de datos de Firebase
        //this.refVulns = firebase.database().ref.child('vulns')
        this.refVulns = firebase.database().ref.child('CVE')
        
    }

    componetDidMount() {
        this.refVulns.on('value', snapshot => {
            let vulns = [];
            snapshot.forEach(row => {
                vulns.push({
                    id: row.key,
                    ActionPlan: row.val().ActionPlan,
                    AttackVector: row.val().AttackVector,
                    Availability: row.val().Availability,
                    CVE: row.val().CVE,
                    Complexity: row.val().Complexity,
                    Confidentiality: row.val().Confidentiality,
                    Description: row.val().Description,
                    Editor: row.val().Editor,
                    Integrity: row.val().Integrity,
                    ModificationDate: row.val().ModificationDate,
                    PrivilegesRequired: row.val().PrivilegesRequired,
                    PublicationDate: row.val().PublicationDate,
                    Reference: row.val().Reference,
                    Scope: row.val().Scope,
                    ScoreCVSSV3: row.val().ScoreCVSSV3,
                    UserInteraction: row.val().UserInteraction,
                    VulnerableComponentsOnSecurityWatchPerimeter: row.val().VulnerableComponentsOnSecurityWatchPerimeter
                })
            })
        });

        this.setState({
            vulns,
            loaded: true
        });
    }

    /*Metodos*/
    //Agregar una Vuln
    addVuln() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddVuln'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    //Metodo para cada uno de las vulnerabilidades
    vulnDetails(vuln) {
    }

    //Metodo RenderVuln
    renderVuln(vuln) {
        return (
            <ListItem
                containerStyle={styles.item}
                titleStyle={styles.title}
                roundAvatar
                title={`${vuln.CVE}(Resultado: ${vuln.Editor})`}
                avatar={this.state.vuln_logo_editor}
                onPress={() => this.vulnDetail(vuln)}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle }}
            />
        )
    }

    render() {
        const { loaded, vulns } = this.state;
        if (!loaded) {
            return <PreLoader />
        };
        // Que no hay vulns!
        if (!vulns.length) {
            return (
                <BackgroundImage source={require('../../../assets/Images/Continents_from_globe.png')}>
                    <VulnEmpty text="No hay vulnerabilidades registradas" />
                    <VulnAddButton addVuln={this.addVuln.bind(this)} />
                </BackgroundImage>
            );
        }

        return (
            <BackgroundImage source={require('../../../assets/Images/Continents_from_globe.png')}>
                <FlatList
                    data={vulns}
                    renderItem={(data)=>this.renderVuln(data.item)}
                />
                <VulnAddButton addVuln={this.addVuln.bind(this)} />
            </BackgroundImage>
        )


    }

}

const styles = StyleSheet.create({
    title: {
        color: '#fff'
    },
    listIconStyle: {
        marginRight: 10,
        fontSize: 15,
        color: 'rgba(255,38,74,0.6)'
    },
    item: {
        padding: 0,
        backgroundColor: 'rgba(206,206,206,0.6)',

    }
})