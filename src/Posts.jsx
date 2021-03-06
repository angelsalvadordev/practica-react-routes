import React, { Component } from 'react'
import PostsList from './PostsList';

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            req: false,
        }

        this.req = this.state.req
    }

    handleReq = async () => {
        this.setState({ req: true })
        const api = 'https://jsonplaceholder.typicode.com/posts'
        const req = await fetch(api, { "method": "get" })
        const toJson = await req.json()
        const data = await toJson
        this.setState({ posts: data, req: false })
    }

    render() {
        const { posts, req } = this.state
        return (
            <div>
                <button onClick={this.handleReq}>Conseguir posts</button>
                <div>
                    <PostsList req={req} posts={posts} />
                </div>
            </div>
        )
    }
}

export default Posts
