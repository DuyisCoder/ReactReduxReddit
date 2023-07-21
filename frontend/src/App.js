
import { useState } from 'react';
import './App.css';
import Edit from './Components/Edit/Edit';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Post/MakePost';
import Post from './Components/Post/Post';

function App() {
  const [edit,setEdit]=useState(false)
  const [isOpenPost,setOpenPost]=useState(false);
  const [loading,setLoading]=useState(false)
  // userSelector trong redux có thể sài bất cứ đâu
  const pending =useSelector((state)=>state.user.pending)
  const error =useSelector(state => state.user.error)
  return (
    <div className="App">
    { edit 
      ? <Edit setEdit={setEdit} />
      //Nếu edit:true thì hiện 1 trang Edit thôi không còn gì ữa
      // Ngược lại nếu edit và isOpenPost không đúng -> tức là true
      // -> Hiện Header và post  và footer
      : !edit && !isOpenPost ? (
        <>
        <Header setEdit={setEdit} />
        <div className='post-container'>
          {loading && <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>}
          <Post setLoading={setLoading} />
        </div>
        <Footer setOpenPost={setOpenPost} isOpenPost={isOpenPost} />
      </>
      ): (
        // Cuối cùng sẽ hiện header và post
        <>
        <Header  setEdit={setEdit} />
        <MakePost setOpenPost={setOpenPost} setLoading={setLoading} />
        </>
      )}
   
      {pending && 
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
       {!edit && error && (
        <p className='error'>Lỗi từ phía server !!</p>
       )}


{/* 
    // {isOpenPost   && <MakePost setOpenPost={setOpenPost} />}  */}
    {/* nếu isOpenPost true thì hiện makepost */}
    </div>
  );
}

export default App;
