import React, { Component } from 'react';
import AppButton from '../AppButton';
import {StyleSheet, View} from 'react-native';

export default class VulnAddButton extends Component{
    render(){
        const { addVuln } = this.props;//Esto es un Evento que se ejecuta cuando se utiliza este componente
        
        return (
            <View style={styles.buttonContainer}>
                <AppButton
                    bgColor="rgba(255,38,74,0.6)"
                    title="Register Alert"
                    action={addVuln}
                    iconName="plus"
                    iconSize={30}
                    iconColor="#FFF"
                />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    buttonContainer:{
        position: 'absolute',
        alignSelf:'flex-end',
        bottom: 0
    }
})