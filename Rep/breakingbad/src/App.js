import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );

  background-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition:background-size .5s ease;

  &:hover{cursor: pointer;
  background-size: 180%;

  }
`;

function App() {
  //State de Frases
  const [frase, setFrase] = useState({});

  //PRIMER METODO DE CONSULTA
  // const consultarApi=()=>{
  //   const api= fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase= api.then(respuesta=>respuesta.json())
  //   frase.then(resultado=>console.log(resultado))
  // }

  //SEGUNDO METODO DE CONSULTA
  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };

  //Cargar una frase
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarApi}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
