/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Edit.css'
import Input from '../InputFiels/Input';
function Edit() {
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

    const[name,setName]=useState("Duy")
    const[age,setAge]=useState(20)
    const[about,setAbout]=useState("I'm developer ")
    const[theme,setTheme]=useState("#ff9051")
    const[url,setUrl]=useState("https://i.redd.it/lfs78sg5t7w61.png")
    return (
        <>
           <form action="">
            <section className="edit-container">
                <button className="close"> Save </button>
            <div className="edit-profile">Edit profile</div>
            <div className="input-container">
                <Input label="Display name" data={name} setData={setName} />
                <Input label="Age " data={age} setData={setAge} />
                <Input label="About" data={about} setData={setAbout} inputType="textarea" classStyle="input-about" />
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