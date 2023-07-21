/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './Edit.css'
import Input from '../InputFiels/Input';
// import { update } from '../../Redux/UserSlice';
import { updateUser } from '../../Redux/apiRequets';
function Edit(props) {
    const avatarUrl=[
        "https://i.redd.it/lfs78sg5t7w61.png",
        "https://preview.redd.it/ivquvp9s7o281.png?width=587&format=png&auto=webp&s=e37d16f40b1605f7d7199158a6261fc051e58949",
        "https://i.redd.it/sgbrrbxevb061.png",
        "https://i.redd.it/4dxwri0vjtw51.jpg",
        "https://i.redd.it/fbtoo37rimv51.png",
        "https://i.redd.it/n9nnnionfu361.png",
        "https://i.redd.it/sotj4t8vlnw81.png",
        "https://i.redd.it/8lhmmwdcx4381.png",
    ];
    const {setEdit}=props;
    // useSelector là thằng để lấy dữ liệu
    // userDispatch dùng để truyền dữ liệu vào store
    const dispatch=useDispatch();

    const user=useSelector((state)=>state.user) //user bên store
    

    const[name,setName]=useState(user.name)
    const[age,setAge]=useState(user.age)
    const[about,setAbout]=useState(user.about)
    const[theme,setTheme]=useState("#ff9051")
    const[url,setUrl]=useState(user.avatarUrl)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEdit(false);
        const updatedUser= {
            name:name,
            age:age,
            about:about,
            avatarUrl:url,
            themeColor:theme,
        };
        // dispatch 1 action là update bên UserSlice và phải export ra và import ms sài đc
        // dispatch(update(updateUser)); 
        updateUser(updatedUser,dispatch);
    
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
            <section className="edit-container">
                <button className="close"> Save </button>
            <div className="edit-profile">Edit profile</div>
            <div className="input-container">
                <Input label="Display name" data={user.name} setData={setName} />
                <Input label="Age " data={user.age} setData={setAge} />
                <Input label="About" data={user.about} setData={setAbout} inputType="textarea" classStyle="input-about" />
            <label> Profile Picture</label>
            <div className="input-image-container">
                {avatarUrl.map((url)=>{
                    return(
                        <>
                        <img onClick={(e)=> setUrl(e.target.src)} src={url} alt="" className='input-image'/>
                        </>
                    )
                })}
            </div>
            <div className="theme-container">
                <label>Them:</label>
                <input type="color" className='theme-color'onChange={(e)=> setTheme(e.target.value)} />
            </div>
            </div>
            </section>
           </form>
        </>
      );
}

export default Edit;