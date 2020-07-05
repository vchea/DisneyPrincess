import React,{useState, useEffect} from 'react';
import './App.css';
import 'tachyons';
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import {PrincessData} from "./princess";
import Card from "./components/Card";

function App(){
  const [searchPrincess, setSearchPrinesses] = useState("");
  const [princesses, setPrincesses] = useState([]);

  function onSearchChange(event) {
    setSearchPrinesses(event.target.value);
  };
  useEffect(()=>{
    const outputs = PrincessData.filter(princess => princess.name.toLowerCase().includes(searchPrincess.toLowerCase()));
  setPrincesses(outputs);
}, [searchPrincess]);
return (
 !princesses.length ? <h1>Loading</h1>: 
 ( <div className= 'tc'>
  <h1 className ='f1'> Princesses Biography</h1>
  <SearchBox searchChange ={onSearchChange}/>
  <Scroll>
  {princesses.map((princess,i ) =>{
            return (<Card 
            key ={i} 
            name ={princess.name} 
            age ={princess.age}
            movie = {princess.movie}
            image = {princess.image}
            funfact ={princess.funfact}
            /> );
        })
}
  </Scroll>
  </div>
 )
);
  
}

export default App;
