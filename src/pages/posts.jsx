import React from 'react';
import { useQuery,useMutation } from '@tanstack/react-query';
import { getPosts } from '../api/posts';
import PostList from '../components/postlist';

function Posts() {
  const {
    status,
    error,
    data:posts
  } = useQuery({
    queryKey:["posts"],
    queryFn:getPosts
  })

  if(status === 'pending') return <h1>loading..</h1>
  if(status === 'error'){
    return <pre>{JSON.stringify(error)}</pre>
  }


  return ( 
    <div>
      <h1>POSTS</h1>
      {/* {posts?.map(post =>(
          <div key={post.id}>{post.title}</div>
        ))} */}
        <PostList posts={posts} />
    </div>
   );
}

export default Posts;