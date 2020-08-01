import React,{useState,useEffect} from 'react';
import {View,Text,FlatList,Image,StyleSheet} from 'react-native';
import Yelp from '../Api/Yelp';

function ResultsScreen({route}) {
    const [result,setResult]=useState(null);
    const id=route.params.id
    const getResult=async ()=>{
        const res=await Yelp.get(`/${id}`)
        setResult(res.data)
    }
    useEffect(()=>{
        getResult();
    },[])
    if(!result){
        return <Text>No items to show</Text>
    }
    return (
        <View style={{flex:1}}>
            <Text style={styles.title}> {result.name}</Text>
            <FlatList
               data={result.photos}
               keyExtractor={(photo)=>photo}
               renderItem={({item})=>{
                   return <Image
                       source={{uri:item}}
                       style={styles.image}
                   ></Image>
               }}
            ></FlatList>
        </View>
    );
}
const styles=StyleSheet.create({
       image:{
           width:300,
           height:200
       },
    title:{
           fontSize:22,
           padding:5

    }
})

export default ResultsScreen;
