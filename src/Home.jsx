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
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{

                let companyName = "Paper";
                let companyDescription = "We make paper";
                setData({Company: companyName, Description: companyDescription})
                console.log("Response from api: ", res);
                console.log("colors data: ", res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
        </>
    )
}
export default Home;