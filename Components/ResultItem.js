import React from 'react';
import {FlatList,Image,Text,View,StyleSheet} from 'react-native';

function ResultItem({item}) {

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{uri:item.image_url}}></Image>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars , {item.review_count} Reviews</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    container:{
         marginLeft:10,
         marginBottom:10

    },
    image:{
        width:250,
        height:120,
        borderRadius:4
    },
    name:{
        fontWeight:'bold',
        fontSize:18
    }
})
export default ResultItem;
