import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
    name:'post',
    initialState:{
        posts:[
            {
                title:"",
                description:"",
                tag:0,
            }
        ]
    },
    reducers:{
        createPost:(state,action)=>{
            // ...state.posts : giữ lại các post đã tạo
            // action.payload : do nó đã có đầy đủ title,des,tag nên chỉ cần action.payload
            // không cần action.payload.title
            state.posts=[...state.posts,action.payload]
        },
        deletePost:(state,action)=>{
            state.posts.splice(action.payload,1);
        }
    }
})

export const {createPost,deletePost} =PostSlice.actions
export default PostSlice.reducer