import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class VulnEmpty extends Component{
    render(){
        const {text}= this.props;
        return(
            <View style={styles.vulnEmptyView}>
                <Text style={styles.vulnEmptyText}>
                    {text}
                </Text>
            </View>
        )
    }
}

// Usaremos una props y la llamaremos desde afuera
const styles =StyleSheet.create({
    
    vulnEmptyView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    vulnEmptyText:{
        backgroundColor:'rgba(10,255,10,0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }

});