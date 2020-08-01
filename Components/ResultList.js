import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultItem from './ResultItem';
import {useNavigation} from '@react-navigation/native'
function ResultList({title,result}) {
    const nav=useNavigation();
    return (
        <View>
           <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>nav.navigate("ResultsShow",{
                                id:item.id
                            })}>
                            <ResultItem item={item}></ResultItem>
                        </TouchableOpacity>

                    )
                }}
                keyExtractor={(item)=>item.id}
             ></FlatList>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20

    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginLeft:10
    }
})

export default ResultList;
