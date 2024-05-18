import { Link } from "react-router-dom";
import {getUsers} from '../api/users'
import { useQuery } from "@tanstack/react-query";

function UsersList() {
  const {
    status,
    error,
    data:users
  } = useQuery({
    queryKey:["users"],
    queryFn:getUsers
  })

  if(status === 'pending') return <h1>loading..</h1>
  if(status === 'error'){
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (  
    users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))
  );
}

export default UsersList;