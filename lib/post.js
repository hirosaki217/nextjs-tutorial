import axios from 'axios';

export const getPosts = async (limit) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPostIds = async (limit) => {
    const posts = await getPosts(limit);
    return posts.map((p) => ({
        params: {
            id: `${p.id}`,
        },
    }));
    // return posts.map(p => `/posts/${p.id}`);
};

export const getPostById = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
