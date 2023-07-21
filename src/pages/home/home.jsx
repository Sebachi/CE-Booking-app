import React from "react";
import ActionAreaCard from "../../components/card";

const Home = ({ signIn }) => {
  const propDefault = {
    id: 6,
    name: "Habitacion en el Cocuy",
    idCategory: "playa",
    rating: 5,
    pricepernight: 360000,
    image: "https://i.ibb.co/6sHd878/montana2.jpg",
  };

  return (
    <>
      <button onClick={() => signIn(false)}>Cerrar sesion</button>
      <ActionAreaCard prop={propDefault}/>
    </>
  );
};

export default Home;
