function PostList({posts}) {
  return ( 
    posts.map(post =>(
         <div>{post.title}</div>
    ))
   );
}

export default PostList;