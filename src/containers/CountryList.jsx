import React, { useEffect, useState } from 'react'

export const CountryList = () => {
    const BASE_URL = "https://restcountries.com/v3.1/all"

    const [title ,  setTitle] = useState([])
console.log(title);
    useEffect(()=>{
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => setTitle(data))
    }, [])
  return (
 <div className=' bg-slate-200'>
    <div className='container'>
    <div className='grid grid-cols-4 space-x-4 space-y-4'>
       {
        title.map((item)=>(
            <div className='bg-[white]'>
                <img className='object-cover h-[200px] w-[100%]' src={item.flags.svg} alt="Flags"/>
                <div className='px-2 py-2'>
                    <div className='flex'><h1 className='font-bold mr-5'>Name:</h1><p>{item.name.common}</p></div>
                    <div className='flex'><h1 className='font-bold mr-5'>Capital:</h1><p>{item.capital}</p></div>
                    <div className='flex'><h1 className='font-bold mr-5'>Population:</h1><p>{item.population  }</p></div>
                    <div className='flex'><h1 className='font-bold mr-5'>Region:</h1><p>{item.region}</p></div>
                </div>
            </div>
        ))
       }
    </div>
    </div>
 </div>
  )
}
