import React, { useState, useEffect }from 'react';
import axios from 'axios';

const btn = {
  color: 'black',
  background: 'rgb(255,255,255)',
  padding: '40px, 70px',
  margin: "40px",
  textAlign: "center"
}

const App = () => {
  
  const [num, setNum] = useState("Choose A Number");
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
   setName(res.data.name);
   setMoves(res.data.moves.length);
   
    }
    getData();
  })
  
  return (
    <>
    
    <h1>{num}</h1>
    <h1> selected pokemon name is {name}</h1>
    <h1> I have {moves} moves</h1>
    
    <select value={num} onChange={(event) => {
      setNum(event.target.value);
    }}> 
    <option value="1"> 1 </option>
    <option value="25"> 25 </option>
    <option value="3"> 3 </option>
    <option value="4"> 4 </option>
    <option value="5"> 5 </option>
    </select>
    </>
    )
}

export default App;