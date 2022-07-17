import httpClient from "./httpClient";

export async function retrieveUsers() {   
    const result = await httpClient.get('/users')
    return result;
}

export async function retrievePost(userId) {   
    const result = await httpClient.get(`/posts`, {params: {userId}})
    return result;
}