import React, { useEffect, useState } from 'react'

export const Search = () => {
    

    const [value, setValue] = useState("")
    const [data , setData] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    console.log(value);
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then(res=> res.json())
        .then(data => console.log(data))
    },[value])
  return (
<>
<div className=''>
<div className='container'>
        <div className='flex justify-between items-center h-[70px]'>
            <form onSubmit={()=>handleSubmit} >
                <input className='border' onChange={(e)=>setValue(e.target.value)} type="search" />
            </form>
            <div>
                <select className='border'>
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceanie">Oceania</option>
                </select>
            </div>
        </div>
</div>
</div>
</>
  )
}
