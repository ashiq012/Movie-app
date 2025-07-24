import React from 'react'
import { useEffect , useState } from 'react';
const Fetch = () =>  {
      const [data, setData] = useState([])
     useEffect(() =>{
            const FetchDataFromApi = async() => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json()
            setData(data);
            console.log(data)
        } 
        
        FetchDataFromApi()
    },[]);
  return (
    <div>{data.map((p)=>
    <div key={p.id} style={{background:"blue",fontSize:"20px", margin:"5px" , textAlign:"center" , color:"white"}}><h4>{p.id+"=>"+p.title}</h4></div>
    )}</div>
  )
}

export default Fetch