import { FormData } from "@/lib/schema";
import { axiosInstance } from "./instance"


export const posts = async (page?: number, limit?: number ) => {
    return (await axiosInstance.get('/posts', {params: { page, limit, sortBy:'id', order:'desc'}} )).data;
}


export const postId = async (id:number) => {
    return (await axiosInstance.get(`/posts/${id}`)).data;
}

export const submitPost = async (payload: FormData) => {
    const apiPayload = {
        name: payload.postName,
        text: payload.postText,
        imageUrl: payload.postImage,
      };
    return (await axiosInstance.post('/posts', apiPayload)).data;
}