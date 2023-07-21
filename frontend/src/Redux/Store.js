// Nơi lưu trữ thông tin

//B1:tạo store
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import postReducer from './PostSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
    }
})



