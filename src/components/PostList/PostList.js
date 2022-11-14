import React, { useEffect, useState } from 'react'
import PostItem from '../PostItem/PostItem'
import "./PostList.css"
import { getPostsByNumber } from "../../services/post.service"

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      getPostsByNumber(10)
      .then(setPosts)
    }, [])

  return (
    <div className='post-list-container' >{posts.map(post => <PostItem key={post.id} post={post} />)}</div>
  )
}

export default PostList