import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()
    // console.log(data)
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/mehdi-raza1")
    //     .then(response => response.json())
    //     .then(data =>{
    //         // console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Git hub Followers : {data.followers}
      <img src={data.avatar_url}  width={300} alt="Git Picture"  />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/mehdi-raza1");
  return response.json();
}