import axios from "axios"

axios.defaults.baseURL = import.meta.env.WEBANT_API_URL

export const getAxios = async(url) => {
    try{
        const res = await axios.get(url)
        return res
    }
    catch(err){
        console.log(err)
    }
}

export const postAxios = async(url, postBody, postTitle, postId) => {
    try{
        const res = await axios.post(url, {body: postBody, title: postTitle, userId: postId})
        return res
    }
    catch(err){
        console.log(err)
    }
}

export const deleteAxios = async(url, postBody, postTitle, postId) => {
    try{
        const res = await axios.delete(url, {body: postBody, title: postTitle, userId: postId})
        return res
    }
    catch(err){
        console.log(err)
    }
}

// export const getFetch = async(url) => {
//     try{
//         const res = await fetch(url)
//         const data = res.json()
//         return data
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const postFetch = async(url, postBody, postTitle, postId) => {
//     try{
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({body: postBody, title: postTitle, userId: postId})
//         }).then(response => console.log(response))
//         return res
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const deleteFetch = async(url, postBody, postTitle, postId) => {
//     try{
//         const res = await fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({body: postBody, title: postTitle, userId: postId})
//         })
//         return res
//     }
//     catch(err){
//         console.log(err)
//     }
// }