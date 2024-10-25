import axios from 'axios';
import { NewComment, Reference } from '../interfaces';

const baseUrl = import.meta.env.VITE_API_URL;

const getPosts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/posts`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for posts failed`);
        } else {
            console.error('Error occurred while fetching posts');
        }
    }
};

const getPost = async (postId: string) => {
    try {
        const response = await axios.get(`${baseUrl}/posts/${postId}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for post failed`);
        } else {
            console.error('Error occurred while fetching post');
        }
    }
};

const postPost = async (formData: FormData) => {
    try {
        const response = await axios.post(`${baseUrl}/posts`, formData, { headers: {'Content-Type': 'multipart/form-data'}});
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for post failed`);
        } else {
            console.error('Error occurred while posting post');
        }
    }
};

const getComments = async (postId: string) => {
    try {
        const response = await axios.get(`${baseUrl}/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for post failed`);
        } else {
            console.error('Error occurred while fetching post');
        }
    }
};

const postComment = async (postId: string, newComment: NewComment) => {
    try {
        const response = await axios.post(`${baseUrl}/posts/${postId}/comments`, newComment);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: Post request for comment failed`);
        } else {
            console.error('Error occurred while posting comment');
        }
    }
};

const postBookmark = async (reference: Reference) => {
    try {
        const response = await axios.post(`${baseUrl}/users/bookmarks`, reference);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: POST request for bookmark failed`);
        } else {
            console.error('Error occurred while adding bookmark');
        }
    }
};

const getUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for users failed`);
        } else {
            console.error('Error occurred while fetching users');
        }
    }
};

export { baseUrl, getPosts, getPost, postPost, getComments, postComment, postBookmark, getUsers };