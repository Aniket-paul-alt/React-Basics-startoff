import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()

  return (
    <div>
      <div className='flex gap-10  text-center m-4 bg-gray-600 text-white p-6 text-2xl'>
      <img className='w-80' src={data.avatar_url} alt="Git Picture" />
        <div className='flex flex-col gap-8' >
            <div>Username : <span>{data.name}</span></div>
            <div>Followers : <span>{data.followers}</span></div>
            <div>Following : <span>{data.following}</span></div>
            <div>Repository : <span>{data.public_repos}</span></div>
            <div>Country : <span>{data.location}</span></div>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
