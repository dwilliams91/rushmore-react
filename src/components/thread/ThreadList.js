import react, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ThreadContext } from "./ThreadProvider"

export const ThreadList=()=>{
    const {Threads, getThreads}= useContext(ThreadContext)

    useEffect(()=>{
        getThreads()
    },[])

    const ThreadCard=(thread)=>{
        console.log(thread)
        return(
            <>
            <div>
                <Link to={{
                    pathname:`/thread/${thread.thread.id}`
                }}>{thread.thread.title}</Link>
            </div>
            </>
        )
    }

    return(
        <>
        <h2> Threads</h2>
        {Threads.map(singleThread=>{
            return <ThreadCard key={singleThread.id} thread={singleThread}/>
        })}
        </>
    )

}