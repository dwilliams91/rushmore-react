import react, { useContext, useEffect } from "react"
import { ThreadContext } from "./ThreadProvider"

export const ThreadList=()=>{
    const {Threads, getThreads}= useContext(ThreadContext)

    useEffect(()=>{
        getThreads()
        console.log("what what")
    },[])

    return(
        <>
        {console.log(Threads)}
        <p>whats up</p>
        </>
    )

}