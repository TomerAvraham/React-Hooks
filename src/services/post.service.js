import axios from "axios"

const API_ENDPOINT = "https://jsonplaceholder.typicode.com"

export async function getAllPosts() {
    const { data } = await axios.get(`${API_ENDPOINT}/posts`)
    return data
}

export async function getPostsByNumber(number){
    const posts = await getAllPosts()
    return posts.slice(0, number)
}