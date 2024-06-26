import axios from "axios";

export function getPosts(){
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
}

export function getPost(id){
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.data)
}

export function getUser(id){
    return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data)
}

export function getPostsPaginated(page) {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: { _page: page, _limit: 2 },
    })
    .then(res => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      }
    })
}

export function getComments(id){
   return axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.data)
}