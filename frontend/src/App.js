
import { useState } from 'react';
import './App.css';
import Edit from './Components/Edit/Edit';
import Header from './Components/Header/Header';

function App() {
  const [edit,setEdit]=useState(false)
  return (
    <div className="App">
      {edit ? (<Edit />) : ( <Header setEdit={setEdit} />)}
       

    </div>
  );
}

export default App;
