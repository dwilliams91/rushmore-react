import react, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider"
import { useHistory, useParams } from 'react-router-dom'

export const PostList=(props)=>{
    const {Posts, getPosts}= useContext(PostContext)
    const id  = props.match.params
    console.log(id)

    useEffect(()=>{
        getPosts(parseInt(id.threadId))
    },[])


    return(
        <>
        {console.log(Posts)}
        <h2> Posts</h2>
        {Posts.map(singlePost=>{
            return <p key={singlePost.id} >{singlePost.option}</p>
        })}
        </>
    )

}