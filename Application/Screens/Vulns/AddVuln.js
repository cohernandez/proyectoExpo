import React, { Component } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import AppButton from '../../Components/AppButton';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { options, Vuln } from '../../Forms/Vuln'

import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';

const Form = t.form.Form;
import Toast from 'react-native-simple-toast';

export default class AddVuln extends Component {
    constructor() {
        super();
        this.state = {
            vuln: {
                ActionPlan: '',
                AttackVector: '',
                Availability: '',
                CVE: '',
                Complexity: '',
                Confidentiality: '',
                Comments: '',
                Description: '',
                DateAlerte: '',
                DateCloture: '',
                Editor: '',
                Exploit: '',
                Integrity: '',
                ModificationDate: '',
                PrivilegesRequired: '',
                PublicationDate: '',
                Priority: '',
                Reference: '',
                Scope: '',
                ScoreCVSSV3: '',
                Treatment: '',
                UserInteraction: '',
                VulnerableComponentsOnSecurityWatchPerimeter: '',
            }
        }
    }

    //Metodo Guardar
    save() {

    }

    onChange(vuln) {
        this.setState({ vuln });
    }

    render() {
        const { vuln } = this.state;

        return (
            <BackgroundImage source={require('../../../assets/Images/login.png')}>
                <View style={styles.container}>
                    <Card title="Formulario de Alertas">
                        <View>
                            <Form
                                ref="form"
                                type={Vuln}
                                options={options}
                                value={vuln}
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

