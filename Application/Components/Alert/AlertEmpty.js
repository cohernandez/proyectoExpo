import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class AlertEmpty extends Component{
    render(){
        const {cve}= this.props;
        return(
            <View style={styles.AlertEmptyView}>
                <Text style={styles.AlertEmptyText}>
                    {cve}
                </Text>
            </View>
        )
    }
}

// Solo estilo
const styles =StyleSheet.create({
    
    AlertEmptyView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    AlertEmptyText:{
        backgroundColor:'rgba(111, 38, 74, 0.7)',
        color:'white',
        textAlign:'center',
        padding:20
    }

});