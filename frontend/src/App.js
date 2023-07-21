
import { useState } from 'react';
import './App.css';
import Edit from './Components/Edit/Edit';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';

function App() {
  const [edit,setEdit]=useState(false)
  // userSelector trong redux có thể sài bất cứ đâu
  const pending =useSelector((state)=>state.user.pending)
  const error =useSelector(state => state.user.error)
  return (
    <div className="App">
      {edit ? (<Edit setEdit={setEdit} />) : ( <Header setEdit={setEdit} />)}
      {pending && 
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
       {!edit && error && (
        <p className='error'>Lỗi từ phía server !!</p>
       )}

    </div>
  );
}

export default App;
