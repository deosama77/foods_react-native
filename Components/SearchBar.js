import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function SearchBar({item,onChange,onTermSubmit}) {

    return (
        <View style={styles.container}>
            <Icon name="search" size={35} color="#000"
            style={styles.searchIcon}/>
            <TextInput style={styles.inputText}
                       autoCorrect={false}
                       autoCapitalize="none"
                       placeholder="Search ..."
                       value={item}
                       onChangeText={onChange}
                       onEndEditing={onTermSubmit}
            ></TextInput>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        marginTop:10,
        backgroundColor:"#F0EEEE",
        height:50
    },
    inputText:{
        flex:1,
        fontSize:18,
        padding:10
    },
    searchIcon:{
      marginHorizontal:15
    }
})

export default SearchBar;
