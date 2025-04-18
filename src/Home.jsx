import React,{useEffect, useState} from 'react';
// import Colors from './Colors';
import axios from 'axios';
import Colors from './colors';

const Home=()=>{
    const [Data,setData]=useState({
        Company: '',
        Description:''
    })
    const [colorsData, setColorsData] = useState([])
    //Grabbing color data from the website
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                //describing th com
                let companyName = "Paper";
                let companyDescription = "We have eternally unfoldiong A4 paper.";
                setData({Company: companyName, Description: companyDescription})
                setColorsData(res.data.data)
                console.log("Response from api: ", res);
                console.log("colors data: ", res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        //Printing out company info and showing color cards
        <>
    
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
        </>
    )
}
export default Home;