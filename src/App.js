import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Grettings from './components/Grettings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard lastName='Pablo' picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <Grettings lang='es'> Chris</Grettings> 
      <Random min={1} max={6}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
