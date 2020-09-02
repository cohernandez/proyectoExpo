import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FrameworkEmpty extends Component{
    render(){
        const {cve}= this.props;
        return(
            <View style={styles.FrameworkEmptyView}>
                <Text style={styles.FrameworkEmptyView}>
                    {cve}
                </Text>
            </View>
        )
    }
}

// Solo estilo
const styles =StyleSheet.create({
    
    FrameworkEmptyView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    FrameworkEmptyView:{
        backgroundColor:'rgba(111, 38, 74, 0.7)',
        color:'white',
        textAlign:'center',
        padding:20
    }

});