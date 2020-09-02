import React, { Componet } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import PreLoader from '../../Components/PreLoader';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

import { NavigationActions } from 'react-navigation';

import FrameworkEmpty from '../../Components/Framework/FrameworkEmpty';
import FrameworkAddButton from '../../Components/Framework/FrameworkAddButton'

//Definiendo el Componente Frameworks
export default class Framework extends Componet {
    constructor() {
        super();
        this.state = {
            framework: [],
            loaded: false,
            vuln_logo_editor: require('../../../assets/Images/sonar.png')
        };

        //Referencia a la base de datos de Firebase
        //this.refVulns = firebase.database().ref.child('vulns')
        //Tabla del Framework
        this.refFramework = firebase.database().ref.child('Framework')
        
    }

    componetDidMount() {
        this.refFramework.on('value', snapshot => {
            let framework = [];
            snapshot.forEach(row => {
                framework.push({
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
                    vulnerableComponentsOnSecurityWatchPerimeter: row.val().vulnerableComponentsOnSecurityWatchPerimeter,
                    priority: row.val().priority,
                    actionPlan: row.val().actionPlan,
                    Treatment: row.val().Treatment,
                    comments: row.val().comments,
                    exploit: row.val().exploit,
                    traitementCrise: row.val().traitementCrise,
                    traitementUrgent: row.val().traitementUrgent,
                    traitementStandard: row.val().traitementStandard,
                    traitementProjet: row.val().traitementProjet,
                    traitementObso: row.val().traitementObso,
                    modeDeTraitement: row.val().modeDeTraitement,
                })
            })
        });

        this.setState({
            framework,
            loaded: true
        });
    }

    /*Metodos*/
    //Agregar una Vuln al Framework
    addFramework() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'AddFramework'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    //Metodo para cada uno de los Perimetros
    frameworkDetails(framework) {
    }

    //Metodo RenderVuln
    renderFramework(framework) {
        return (
            <ListItem
                containerStyle={styles.item}
                titleStyle={styles.title}
                roundAvatar
                title={`${framework.editor}(Modelo: ${framework.model})`}
                // avatar={this.state.vuln_logo_editor}
                onPress={() => this.frameworkDetails(framework)}
                rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: styles.listIconStyle }}
            />
        )
    }

    render() {
        const { loaded, framework } = this.state;
        if (!loaded) {
            return <PreLoader />
        };
        // Que no hay perimetros!
        if (!framework.length) {
            return (
                <BackgroundImage source={require('../../../assets/Images/Continents_from_globe.png')}>
                    <FrameworkEmpty text="No hay perimetros registrados" />
                    <FrameworkAddButton addFramework={this.addFramework.bind(this)} />
                </BackgroundImage>
            );
        }

        return (
            <BackgroundImage source={require('../../../assets/Images/Continents_from_globe.png')}>
                <FlatList
                    data={framework}
                    renderItem={(data)=>this.renderFramework(data.item)}
                />
                <FrameworkAddButton addFramework={this.addFramework.bind(this)} />
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