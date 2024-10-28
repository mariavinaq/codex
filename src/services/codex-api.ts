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

const putLike = async (postId: number) => {
    try {
        const response = await axios.put(`${baseUrl}/posts/${postId}/likes`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: PUT request for liking post failed`);
        } else {
            console.error('Error occurred while liking post');
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

const getBookmarks = async (userId: string) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${userId}/bookmarks`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for bookmarked posts failed`);
        } else {
            console.error('Error occurred while fetching bookmarked posts');
        }
    }
};

const postBookmark = async (reference: Reference) => {
    try {
        const response = await axios.post(`${baseUrl}/users/${reference.user_id}/bookmarks`, reference);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: POST request for bookmark failed`);
        } else {
            console.error('Error occurred while adding bookmark');
        }
    }
};

const getUser = async (userId: number) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${userId}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`${error.response?.status}: GET request for user failed`);
        } else {
            console.error('Error occurred while fetching user');
        }
    }
};

export { baseUrl, getPosts, getPost, postPost, putLike, getComments, postComment, getBookmarks, postBookmark, getUser };