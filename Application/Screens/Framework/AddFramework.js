import React, { Component } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import AppButton from '../../Components/AppButton';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { options, Framework } from '../../Forms/Framework'

import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';

const Form = t.form.Form;
import Toast from 'react-native-simple-toast';

export default class AddFramework extends Component {
    constructor() {
        super();
        this.state = {
            framework: {
                HorsScopeCAP: '',
                Treatment: '',
                actionPlan: '',
                anneeAlerte: '',
                anneeClos: '',
                attackVector: '',
                availability: '',
                comments: '',
                complexity: '',
                confidentiality: '',
                cve: '',
                dateAlerte: '',
                dateCloture: '',
                dateFinTraitementCrise: '',
                dateFinTraitementUrgent: '',
                description: '',
                editor: '',
                exploit: '',
                integrity: '',
                modeDeTraitement: '',
                modificationDate: '',
                moisAlerte: '',
                moisClos: '',
                priority: '',
                privilegesRequired: '',
                publicationDate: '',
                reference: '',
                scope: '',
                scoreCVSSV3: 0.0,
                tempsDeRemediation: '',
                traitementCrise: '',
                traitementObso: '',
                traitementParCAP: '',
                traitementProjet: '',
                traitementStandard: '',
                traitementUrgent: '',
                userInteraction: '',
                vulnerableComponentsOnSecurityWatchPerimeter: '',
            }
        }
    }

    //Metodo Guardar
    save() {

    }

    onChange(framework) {
        this.setState({ framework });
    }

    render() {
        const { framework } = this.state;

        return (
            <BackgroundImage source={require('../../../assets/Images/login.png')}>
                <View style={styles.container}>
                    <Card title="Formulario del Framework">
                        <View>
                            <Form
                                ref="form"
                                type={Framework}
                                options={options}
                                value={framework}
                                onChange={(v) => this.onChange(v)}
                            />
                        </View>
                        <AppButton
                            bgColor="rgba(255,38,74,0.9)"
                            title="Registrar Alerta"
                            action={this.save.bind(this)}
                            iconName="plus"
                            iconSize={30}
                            iconColor="#FFF"
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231,228,224,0.8)',
        padding: 10
    }
});

