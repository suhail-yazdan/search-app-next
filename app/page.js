"use client"
import React, {useState} from 'react'
import Card from '@/components/Card'
import Widget from '@/components/Widget'
import axios from 'axios'

export default function Home() {
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState([]);

  const makeAJAXcall = (category, searchQuery) => {
    let updatedResults = [];
    let categoryStates = [];
    let categoriesList = ["Buses", "Flights", "Hotels"];

    axios
      .get("bookmytrip-service.json")
      .then((response) => {
        if (category !== "All") {
          var bmtServices = response.data[category];
          console.log("bmtServices", bmtServices)
          bmtServices.forEach((elem) => {
            if ( elem.serviceName.toLowerCase().search(searchQuery.toLowerCase()) !== -1 ) {
              updatedResults.push(elem);
              categoryStates.push(category);
            }
          });
          setResults(updatedResults);
          setCategory(categoryStates);
        } else {
          categoriesList.forEach((cate) => {
            var bmtServices = response.data[cate];
            bmtServices.forEach((elem) => {
              if ( elem.serviceName.toLowerCase().search(searchQuery.toLowerCase()) !== -1 ) {
                updatedResults.push(elem);
                categoryStates.push(cate);
              }
            });
            setResults(updatedResults);
            setCategory(categoryStates);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (cat, squery) => {
    setResults([]);
    makeAJAXcall(cat, squery);
  };
 


  return (
      <>
        <header className='h-[320px] bg-[url(../public/images/clouds.jpg)] bg-center bg-cover border-t'>
          <div className='flex flex-col items-center h-full mt-40'>
            <Widget onSubmit={handleSubmit} />
          </div>
        </header>
        <main>
          <div className="pt-10">
            {results.map((res, ind) => (
              <Card
                key={res.serviceID}
                stype={category[ind]}
                sname={res.serviceName}
                sloc={res.locations}
              />
            ))}
          </div>
        </main>
      </>
    )
}
