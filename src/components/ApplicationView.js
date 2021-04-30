import react from "react"
import { Route } from "react-router-dom"

import { ThreadList } from "./thread/ThreadList"
import { ThreadProvider } from "./thread/ThreadProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <ThreadProvider>
                <Route exact path="/threads">
                    <ThreadList></ThreadList>
                </Route>
            </ThreadProvider>


        </>
    )
}