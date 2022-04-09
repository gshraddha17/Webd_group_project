import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FetchData() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
         .then(res=>{
             console.log(res);
             setData(res.data)
         })
         .catch(err =>{
             console.log(err)
         })
    })
  return (
    <div>
        <ul>
            {
                data.map(data=><li key={data.id}>{data.name}</li>)
            }
        </ul>
    </div>
  )
}

export default FetchData