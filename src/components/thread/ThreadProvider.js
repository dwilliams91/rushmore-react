import react, {useState} from "react"

export const ThreadContext= react.createContext()

export const ThreadProvider=()=>{

    const [Threads, setThreads]= useState=([])

    const getThreads=()=>{
        return fetch("http://localhost:8000/threads", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rushmore_id")}`
            }
        })
        .then(res= res.json())
        .then((res)=>{setThreads(res)
        return res})
    }

    return(
        <ThreadContext.Provider value={{
            Threads, getThreads, setThreads
        }}>


        </ThreadContext.Provider>
    )
}