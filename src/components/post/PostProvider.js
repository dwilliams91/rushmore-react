import React, { useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [Posts, setPosts] = useState([])

    const getPosts = (id) => {
        return fetch(`http://localhost:8000/options/${id}/viewthreadposts`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rushmore_id")}`
            }
        })
            .then(res => res.json())
            .then(setPosts)
    }
    
    
    return (
        <PostContext.Provider value={{
            Posts, getPosts, setPosts
        }}>
            {props.children}
        </PostContext.Provider>

    )
}