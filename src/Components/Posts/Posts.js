import React, { useEffect, useState } from 'react'
import './Posts.css'
export const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <div className='posts'>
                {
                    posts.map((post) => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    )
}


export const Post = (props) => {
    console.log(props);
    const { title, body } = props.post;
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
