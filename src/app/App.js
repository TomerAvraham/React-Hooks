import React from 'react'
import PostList from '../components/PostList/PostList'
import Layout from '../layout/Layout'
import "../style/global.css"

const App = () => {
  return (
    <Layout>
      <PostList/>
    </Layout>
  )
}

export default App