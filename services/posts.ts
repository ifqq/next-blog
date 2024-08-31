import { axiosInstance } from "./instance"


export const posts = async () => {
    return (await axiosInstance.get('/posts')).data;
}

export const postId = async (id:number) => {
    return (await axiosInstance.get(`/posts/${id}`)).data;
}