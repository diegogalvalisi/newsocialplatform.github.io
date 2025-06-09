import axios from 'axios';
import { User, Post, Activity } from '../types';

const MASTODON_API_URL = 'https://your-mastodon-instance/api/v1'; // Replace with your Mastodon instance URL

export const fetchUserData = async (username: string): Promise<User> => {
    const response = await axios.get(`${MASTODON_API_URL}/accounts/${username}`);
    return response.data;
};

export const postContent = async (content: string): Promise<Post> => {
    const response = await axios.post(`${MASTODON_API_URL}/statuses`, {
        status: content,
    });
    return response.data;
};

export const fetchUserPosts = async (username: string): Promise<Post[]> => {
    const response = await axios.get(`${MASTODON_API_URL}/accounts/${username}/statuses`);
    return response.data;
};

export const createActivity = (type: string, object: Post): Activity => {
    return {
        '@context': 'https://www.w3.org/ns/activitystreams',
        type,
        object,
    };
};