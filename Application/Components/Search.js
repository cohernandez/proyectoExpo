import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

class Search extends React.Component{
    render(){
        return(
            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.textInput} placeholder='CVE de la alerta'/>
                <Button title="Search" onPress={()=>{}}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search