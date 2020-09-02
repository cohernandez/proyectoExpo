import React, {Component} from 'react';
import AppButton from '../AppButton';
import {StyleSheet, View} from 'react-native';

export default class FrameworkAddButton extends Component{
    render(){
        const { addFramework } = this.props;//Esto es un Evento que se ejecuta cuando se utiliza este componente 
        return (
            <View style={styles.buttonContainer}>
                <AppButton
                    bgColor="rgba(255,38,74,0.6)"
                    title="Agregar al Frameworks csms "
                    action={addFramework}
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