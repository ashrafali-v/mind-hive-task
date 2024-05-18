import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import {getPostsPaginated} from "../api/posts"

function PostList() {
  const [page, setPage] = useState(1)
  const { status, error, data } =useQuery({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPostsPaginated(page),
  })

  if (status === "loading") return <h1>Loading...</h1>
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>


  return ( 
    <>
      {data?.posts.map(post => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
      {data?.previousPage && (
        <button onClick={() => setPage(data.previousPage)}>Previous</button>
      )}{" "}
      {data?.nextPage && (
        <button onClick={() => setPage(data.nextPage)}>Next</button>
      )}
    </>
   )
}

export default PostList;