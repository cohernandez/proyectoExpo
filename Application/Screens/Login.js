import React, { Component } from 'react';
import {View} from 'react-native';
import BackgroundImage from '../Components/BackgroundImage';
import AppButton from '../Components/AppButton';

import t from 'tcomb-form-native';
import FormValidation from '../Utils/Validation';
import { Card } from 'react-native-elements';

import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

//Tag HTML para montar el formulario
const Form = t.form.Form;

export default class Login extends Component {
    constructor (){
        super();
        
        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password
        });

        // Definir los Campos
        this.options ={
            fields:{
                email: {
                    help: 'Here your e-mail',
                    error: 'Incorrect e-mail',
                    autoCapitalize: 'none',
                },
                password:{
                    help: 'Here your password',
                    error: 'Incorrect password',
                    password: true,
                    secureTextEntry: true,
                }
            }
        };
    }
    
    login(){
        const validate = this.refs.form.getValue();
        if(validate){
            firebase.auth().signInWithEmailAndPassword(validate.email, validate.password)
            .then(()=>{
                // Correcto inicio de sesion, envio de mensaje de bienvenida
                Toast.showWithGravity('Welcome', Toast.LONG, Toast.BOTTOM);
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password'){
                    Toast.showWithGravity('Incorrect Password', Toast.LONG, Toast.BOTTOM);
                }else{
                    Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                }
            });
            console.log("Success")
        }

    }
    render(){
        return(
            <BackgroundImage source={require('../../assets/Images/login.png')}>
                <View>
                    <Card wrapperStyle={{paddingLeft: 10}} title="Log-in">
                            <Form 
                                ref="form" 
                                type={this.user}
                                options={this.options}                            
                            />
                            <AppButton
                                 bgColor="rgba(111, 38, 74, 0.7)"                    
                                 title="Login "
                                 action={this.login.bind(this)}
                                 iconName="sign-in"
                                 iconSize={30}
                                 iconColor="#fff"                               
                            />

                    </Card>
                </View>
            </BackgroundImage>
        )
    }

}