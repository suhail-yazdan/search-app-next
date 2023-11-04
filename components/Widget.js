import React from 'react'

const Widget = () => {
  return (
    <>
        <input 
            id="search"
            type="text" 
            placeholder='Search for the name of a bus service, flight service or a hotel'
            autoComplete='off'
            className='w-[70%] h-[40px] border border-solid rounded-l-3xl shadow-lg ps-5'
        />

        <input 
            type="submit"
            className='h-[40px] px-20 rounded-r-3xl cursor-pointer bg-gray-200 hover:bg-gray-300 border-l border-gray-400'
        
        />

    
    </>
  )
}

export default Widget