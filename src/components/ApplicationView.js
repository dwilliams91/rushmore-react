import react from "react"
import { Route } from "react-router-dom"
import { PostList } from "./post/PostList"
import { PostProvider } from "./post/PostProvider"

import { ThreadList } from "./thread/ThreadList"
import { ThreadProvider } from "./thread/ThreadProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <ThreadProvider>
                <Route exact path="/home">
                    <ThreadList></ThreadList>
                </Route>
            </ThreadProvider>
            <PostProvider>
            <Route exact path="/thread/:threadId(\d+)" render={
                        props => <PostList {...props} />
                                        } />
            </PostProvider>


        </>
    )
}