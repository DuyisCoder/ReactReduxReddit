import { useState } from "react";
import Input from "../InputFiels/Input";
import './Post.css'
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/PostSlice";
function MakePost({setOpenPost,setLoading}) {
  const [title,setTitle]=useState('Add a title....')
  const [desc,setDesc]=useState('Add some desc....')
  const [selectedIdx,setSelectedIdx]=useState(0)
  const tags=['None','NSFW','Mood','Quotes','Shitpost'];
  
  const dispatch = useDispatch();
  const handlePost = () =>{
    setOpenPost(false);
    setLoading(true);
    // Tạo post
    const newPost ={
      title:title,
      description:desc,
      tag:selectedIdx,
    }
    setTimeout(() => {
      dispatch(createPost(newPost));
      setLoading(false);
    }, 500);
  }
    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
              <p className="makepost-save" onClick={handlePost}>Post</p>
            </div>
            <Input 
            data={title} 
            inputType="textarea" 
            setData={setTitle} 
            label='Title' 
            className="makepost-title" />

            <Input data={desc} 
            setData={setDesc}
            inputType='textarea'
            label='Description'
            className='makepost-desc' />
            <label>Tags:</label>
            <div className="makepost-tags">
              {tags.map((tag,idx)=>{
                return (
                  <button key={idx} 
                  className={`${
                    selectedIdx === idx 
                    ?`makepost-tags-selected`
                    :`makepost-tags-${tag}`}`}
                    onClick={()=>setSelectedIdx(idx)}
                  >{tag}</button>
                )
              })}
            </div>
        </section>
      );
}

export default MakePost;