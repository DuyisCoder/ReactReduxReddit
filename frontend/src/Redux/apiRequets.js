import { updateError,updateStart,updateSuccess } from "./UserSlice";

import axios from "axios";

export const updateUser = async (user,dispatch) =>{ // user là dữ liệu mới, dispatch là hành động
    dispatch(updateStart());
    try {
        const res = await axios.post("/v1/update",user);
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError());
        console.log('lỗi');
    }
}