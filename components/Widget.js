import React from 'react'

const Widget = () => {
  return (
    <>
        <div className="flex flex-col w-[75%]">
          <div className="flex items-center justify-center w-full">
            <input 
                id="search"
                type="text" 
                placeholder='Search for the name of a bus service, flight service or a hotel'
                autoComplete='off'
                className='w-full h-[40px] border border-solid rounded-l-3xl shadow-lg ps-5'
            />

            <input 
                type="submit"
                className='h-[40px] px-20 rounded-r-3xl cursor-pointer bg-gray-200 hover:bg-gray-300 border-l border-gray-400'
            />
          </div>

          <section className="bg-white w-[81%] ml-[1.7%] flex items-center py-5 px-10">
            <aside className='flex items-center mr-10'>
              <input type="radio" name="category" value="Buses" />
              <label className="ml-2">Buses</label>
            </aside>
            <aside className='flex items-center mr-10'>
              <input type="radio" name="category" value="Flights" />
              <label className="ml-2">Flights</label>
            </aside>
            <aside className='flex items-center mr-10'>
              <input type="radio" name="category" value="Hotels" />
              <label className="ml-2">Hotels</label>
            </aside>
            <aside className='flex items-center mr-10'>
              <input type="radio" name="category" value="All" />
              <label className="ml-2">All</label>
            </aside>
          </section>
        </div>
    </>
  )
}

export default Widget