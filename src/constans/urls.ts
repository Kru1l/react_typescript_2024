const baseURL = 'https://jsonplaceholder.typicode.com/';

const users: string = '/users';
const posts: string = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id: number): string => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id: number): string => `${posts}/${id}`
    }
};

export {
    baseURL,
    urls
};