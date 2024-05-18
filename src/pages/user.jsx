import { Link, useParams } from "react-router-dom";
import {getUser} from '../api/users'
import { useQuery } from "@tanstack/react-query";

function User() {
  const {id} = useParams()
  const {
    status,
    error,
    data:user
  } = useQuery({
    queryKey:["users",id],
    queryFn:() => getUser(id)
  })

  if(status === 'pending') return <h1>loading..</h1>
  if(status === 'error'){
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (  
    <section className="flex justify-center items-center p-10">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" />
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {user.company.catchPhrase}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {user.name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {user.company.name}
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}

export default User;