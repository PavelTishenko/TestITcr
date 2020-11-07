import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getUsers = async () => {
    return await axios.get(usersUrl);
}


export const getPosts = async () => {
    return await axios.get(postsUrl);
}