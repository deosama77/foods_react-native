import React,{useState} from 'react';
import {Text,StyleSheet,ScrollView,View} from 'react-native';
import SearchBar from '../Components/SearchBar';
import Yelp from '../Api/Yelp'
import useResults from '../hooks/useResuts';
import ResultList from '../Components/ResultList';

function SearchScreen(props) {
    const [item,setItem]=useState("")
    const [results,errorMessage,searchApi]=useResults();

    const filterItemsByPrice=(price)=>{
        return results.filter(r=>{
            return r.price===price;
        })
    }
    return (
        <>
        <SearchBar
            item={item}
            onChange={setItem}
            onTermSubmit={()=>searchApi(item)}
        ></SearchBar>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text>:null}
             <ScrollView>
                 <ResultList
                     title="Cost Effective"
                             result={filterItemsByPrice("$")}></ResultList>

                 <ResultList
                     title="Bit pricier"
                             result={filterItemsByPrice("$$")}></ResultList>
                 <ResultList
                     title="Big Spinder"
                             result={filterItemsByPrice("$$")}></ResultList>
             </ScrollView>

            </>
    );
}

const styles=StyleSheet.create({
   error:{
       color:"red",
       marginHorizontal:12
   }
})

export default SearchScreen;
