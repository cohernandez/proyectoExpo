import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class ListAlerts extends Component {
    
    async componentWillMount()
    {
        await axios.get('https://services.nvd.nist.gov/rest/json/cves/1.0')
            .then(function (response) {
                console.warn(response.data.CVE_Items);
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>NIST API handler</Text>
            </View>
        )
    }
}