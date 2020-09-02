import React, { Component } from 'react';
import BackgroundImage from '../../Components/BackgroundImage';
import AppButton from '../../Components/AppButton';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import { options, Alert } from '../../Forms/Alert'

import t from 'tcomb-form-native';
import { Card } from 'react-native-elements';

const Form = t.form.Form;
import Toast from 'react-native-simple-toast';

export default class AddAlert extends Component {
    constructor() {
        super();
        this.state = {
            alert: {
                ActionPlan: '',
                AttackVector: '',
                Availability: '',
                CVE: '',
                Complexity: '',
                Confidentiality: '',
                Description: '',
                Editor: '',
                Integrity: '',
                ModificationDate: '',
                PrivilegesRequired: '',
                PublicationDate: '',
                Reference: '',
                Scope: '',
                ScoreCVSSV3: 0.0,
                UserInteraction: '',
                VulnerableComponentsOnSecurityWatchPerimeter: '',
            }
        }
    }

    //Metodo Guardar
    save(){

    }

    onChange(alert){
        this.setState({alert});
    }

    render(){
        const {alert}=this.state;

        return(
            <BackgroundImage source={require('../../../assets/Images/login.png')}>
                <View style={styles.container}>
                    <Card title="Formulario de la Alerta">
                        <View>
                            <Form
                                ref="form"
                                type={Alert}
                                options={options}
                                value={alert}
                                onChange={(v) =>this.onChange(v)}
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

