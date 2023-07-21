import { createSlice } from "@reduxjs/toolkit";


 const userSlice= createSlice ({
    name:'user',
    initialState:{
        name:"Duy minh",
        age:"20",
        about:"I'm developer",
        avatarUrl: "https://i.redd.it/lfs78sg5t7w61.png",
        themeColor:"#ff9051",
        pending:false,//pending : chờ
        error:false,
    },
    reducers:{
        updateStart:(state)=> {
            state.pending=true;// khi bắt đầu update thì chờ loading
        },
        updateError:(state)=>{
            state.pending=false; // khi update that bại thì phải loading xong r mới hiện nên pending:false
            state.error=true; // error true
        },
        updateSuccess:(state,action) => {
            state.pending=false; // chờ xong r nên false
            state.error=false; // case thành công nên case error = false

            state.name=action.payload.name;// state.name là giá trị hiện tại là DUY 20 . còn action.payload.name là giá trị bên ngoài sẽ tha khi update
            state.age=action.payload.age;
            state.about=action.payload.about;
            state.avatarUrl=action.payload.avatarUrl;
            state.themeColor=action.payload.themeColor;
        }
    }


})
export const {updateStart,updateError,updateSuccess}=userSlice.actions;
export default userSlice.reducer;