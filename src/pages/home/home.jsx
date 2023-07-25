import React, { useEffect, useState } from "react";
import ActionAreaCard from "../../components/card";
import { getAlojamientos } from "../../servises/bookingServices";

const Home = ({ signIn }) => {
  const [booking, setBooking] = useState([])
  const propDefault = {
    id: 6,
    name: "Habitacion en el Cocuy",
    idCategory: "playa",
    rating: 5,
    pricepernight: 360000,
    image: "https://i.ibb.co/6sHd878/montana2.jpg",
  };
useEffect(() => {
  getAlojamientos().then((response)=>{
    setBooking(response)
  })

}, [])


  return (
    <>
      <button onClick={() => signIn(false)}>Cerrar sesion</button>
      {booking.length > 0 && booking.map(item => (
         <ActionAreaCard key={item.id} prop={item}/>
      )
        )}
    </>
  );
};

export default Home;
