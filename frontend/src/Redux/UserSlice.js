import { createSlice } from "@reduxjs/toolkit";


 const userSlice= createSlice ({
    name:'user',
    initialState:{
        name:"Duy minh",
        age:"20",
        about:"I'm developer",
        avatarUrl: "https://i.redd.it/lfs78sg5t7w61.png",
        themeColor:"#ff9051"
    },
    reducers:{
        update:(state,action)=>{
            state.name=action.payload.name;// state.name là giá trị hiện tại là DUY 20 . còn action.payload.name là giá trị bên ngoài sẽ tha khi update

            state.age=action.payload.age;
            state.about=action.payload.about;
            state.avatarUrl=action.payload.avatarUrl;
            state.themeColor=action.payload.themeColor;
        }


    }


})
export const {update}=userSlice.actions;
export default userSlice.reducer;