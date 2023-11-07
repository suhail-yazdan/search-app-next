"use client"
import React, { useState, useEffect } from 'react'
import { MdArrowForwardIos } from 'react-icons/md';

const Card = (props) => {
  const [number, setNumber] = useState(0);
  const [locations, setLocations] = useState([]);

  const getRoute = () => {
    const routeArray = props.sloc;
    const resultLocations = [];

    const routes = {
      RT101: ["Tiruchendur", "Tuticorin", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT102: ["Tiruchendur", "Tuticorin", "Madurai", "Karur", "Salem", "Hosur", "Bengaluru"],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: ["Coimbatore", "Erode", "Salem", "Dharmapuri", "Hosur", "Bengaluru"],
      RT106: ["Coimbatore", "Erode", "Salem", "Viluppuram", "Tindivanam", "Chennai"],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: ["Bengaluru", "Dharmavaram", "Anantapur", "Mahbubnagar", "Hyderabad"],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"]
    };

    routeArray.forEach((route) => {
      let opt = [];
      if (props.stype === "Buses" || props.stype === "Flights") {
        for (const obj in routes) {
          if (route === obj) {
            opt = routes[obj].map((arr) => (
                      <>
                        <li key={arr} className="flex items-center mx-4 ">{arr} </li>
                        <li className='last:hidden'><MdArrowForwardIos size={32} color="gray"/></li>
                      </>
                    ));
          }
        }
      } else if (props.stype === "Hotels") {
        opt = <li key={route} className="flex items-center" > {route} </li>
      }
      
      const dropdown = (
        <div key={route} className="flex items-center h-20 px-5 mt-6 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 rounded-xl">
          <ul className="flex">{opt}</ul>
        </div>
      );
      resultLocations.push(dropdown);
    });
    setNumber(resultLocations.length);
    setLocations(resultLocations);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getRoute();
  }, []);
  
  return (
    <>
      <section className="w-[85%] mx-auto px-8 py-10 rounded-2xl shadow-lg mt-8">
        <h2 className="text-3xl font-semibold">{props.sname}</h2>
        <h3 className="text-2xl">{number} {props.stype} available</h3>
        <div>{locations}</div>
      </section>
    </>
  )
}


{/* <div className="flex items-center h-20 px-5 mt-6 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 rounded-xl">
  Tiruchendur <MdArrowForwardIos size={32} color="gray" className="mx-4" /> 
  TutiCorin <MdArrowForwardIos size={32} color="gray" className="mx-4" />
  Madurai <MdArrowForwardIos size={32} color="gray" className="mx-4" />
  Trichi <MdArrowForwardIos size={32} color="gray" className="mx-4" />
  Perungulathur <MdArrowForwardIos size={32} color="gray" className="mx-4" />
  Chennai <MdArrowForwardIos size={32} color="gray" className="mx-4" />
</div> */}

export default Card