import { useDispatch, useSelector } from "react-redux";
import './Post.css'
import { deletePost } from "../../Redux/PostSlice";
function Post({setLoading}) {
    // state.post -> post này là ở bên store
    // state.post.posts -> posts này lấy từ PostSlice
    const tags=['None','NSFW','Mood','Quotes','Shitpost'];
    const post=useSelector((state)=>state.post.posts)
    const dispatch =useDispatch();
    const handleDelete = (index)=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            dispatch(deletePost(index))
        },500)
    }
    return (
        <>
            <section className="post-container">
              {post.slice(1).map((post,index)=>{
                return (
                    <div 
                    className="posts"
                    key={index}>
                        <p className="posts-title">{post.title}</p>
                        <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                        <p className="posts-description">{post.description}</p>
                        <button className="btn-delete" onClick={()=>handleDelete(index)}>Xóa</button>
                    </div>
                   
                )
              })}
            </section>
        </>
      );
}

export default Post;