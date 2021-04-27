import React, { useState } from "react"

export const ThreadContext = React.createContext()

export const ThreadProvider = (props) => {
    const [Threads, setThreads] = useState([])

    const getThreads = () => {
        return fetch("http://localhost:8000/threads", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rushmore_id")}`
            }
        })
            .then(res => res.json())
            .then(setThreads)
    }
    
    
    return (
        <ThreadContext.Provider value={{
            Threads, getThreads, setThreads
        }}>
            {props.children}
        </ThreadContext.Provider>

    )
}