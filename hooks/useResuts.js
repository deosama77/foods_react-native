import {useEffect, useState} from 'react';
import Yelp from '../Api/Yelp';

const useResults=()=>{
    const [results,setResults]=useState([])
    const [errorMessage,setErrorMessage]=useState("")

    const searchApi=async (term)=>{
        try{
            const res= await Yelp.get("/search",{
                params:{
                    limit:50,
                     term,
                    location:"san jose"
                }
            });
            setResults(res.data.businesses)
        }catch (e) {
            console.log(e)
            setErrorMessage("Something Wrong")
        }

    }
    useEffect(()=>{
        searchApi()
    },[])

    return [results,errorMessage,searchApi]
}

export default useResults;
