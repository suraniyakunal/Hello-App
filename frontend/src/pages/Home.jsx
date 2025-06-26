import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Home() {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log('Error fetching the data', error)
      })

  }, [])


  return (
    <div className='bg-teal-300 items-center justify-center text-black'>
      <h1>This is the Home Page </h1>
      <div className='flex flex-col '>
        {data ? (
          <>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
          </>
        ) : (
          <p>Loding...</p>
        )}

      </div>
    </div>
  )
}
