import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import BackgroundImage from '../Components/BackgroundImage';
import AppButton from '../Components/AppButton';

import t from 'tcomb-form-native';
const Form=t.form.Form;

import FormValidation from '../Utils/Validation';
import { Card } from 'react-native-elements';

import * as firebase from 'firebase';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
        this.samePassword = t.refinement(t.String, (s) => {
            return s === this.state.user.password
        });

        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password,
            password_confirmation: this.samePassword
        });

        // Definir los Campos
        this.options = {
            fields: {
                email: {
                    help: 'Here your e-mail',
                    error: 'Incorrect e-mail',
                    autoCapitalize: 'none',
                },
                password: {
                    help: 'Here your passe',
                    error: 'Password incorrect',
                    password: true,
                    secureTextEntry: true,
                },
                password_confirmation: {
                    help: 'Repeat the same password',
                    error: 'Password incorrect',
                    password: true,
                    secureTextEntry: true,
                }
            }
        };
        this.validate = null;
    }
    //Metodo
    register() {
        this.validate = this.refs.form.getValue();
        if (this.validate) {
            firebase.auth().createUserWithEmailAndPassword(
                this.validate.email, this.validate.password
            ).then(() => {
                //Promesa, Si todo ha ido bien 
                Toast.showWithGravity('correct registration, welcome', Toast.Long, Toast.Button);
            })
                // Captura de errores y excepciones
                .catch(err =>{
                    Toast.showWithGravity(err.message, Toast.Long, Toast.Button);              
                })
        }
    }

    // Metodo
    onChange(user) {
        //Validacion en Tiempo Real de cualquier cambio que realice el usuario
        this.setState({ user });
        this.validate = this.refs.form.getValue();
    }

    render() {
        return (
            <BackgroundImage source={require('../../assets/Images/login.png')}>
                <View>
                    <Card wrapperStyle={{ paddingLeft: 10 }} title="Register">
                        <Form
                            ref="form"
                            type={this.user}
                            options={this.options}
                            onChange={(v) => this.onChange(v)}
                            value={this.state.user}
                        />
                        <AppButton
                            bgColor="rgba(200, 200, 50, 0.9)"
                            title="Register"
                            action={this.register.bind(this)}
                            iconName="user-plus"
                            iconSize={30}
                            iconColor="#FFF"
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }

}