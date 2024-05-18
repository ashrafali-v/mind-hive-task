import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import {getPost,getUser,getComments} from '../api/posts'

function Post() {
  const {id} = useParams()
  const {
    status:statusPost,
    error:errorPost,
    data:post,
  } = useQuery({
    queryKey:["posts",parseInt(id)],
    queryFn:() => getPost(id)
  })

  const {
    status:statusUser,
    error:errorUser,
    data:user,
  } = useQuery({
    enabled:post?.userId !== null,
    queryKey:["users",post?.userId],
    queryFn:() => getUser(post?.userId)
  })

  const {
    status:statusComments,
    error:errorComments,
    data:comments,
  } = useQuery({
    enabled:post?.userId !== null,
    queryKey:["comments",post?.id],
    queryFn:() => getComments(post?.id)
  })



  console.log(post?.title)
  if(statusPost === 'pending') return <h1>loading..</h1>
  if(errorPost === 'error') return <pre>{JSON.stringify(errorPost)}</pre>

  if(statusUser === 'pending') return <h1>loading..</h1>
  if(errorUser === 'error') return <pre>{JSON.stringify(errorUser)}</pre>

  if(statusComments === 'pending') return <h1>loading..</h1>
  if(errorComments === 'error') return <pre>{JSON.stringify(errorComments)}</pre>


  return ( 
    <div>
        <Link to={"/posts"}>All posts</Link>
        <h1>{post?.title}</h1>
        <Link to={`/users/${user.id}`} > {user?.name}</Link>
        <ul>
          {comments?.map(comment => (
            <li>{comment.body}</li>
          ))}
        </ul>
    </div>
   );
}

export default Post;