import Link from "next/link"
import getUsers from "../libs/getUsers"

export default async function users() {

  const users = await getUsers() 
  
  return (
    <div className="background-full">
       <div className="mx-auto w-4/5">
        <div className="flex justify-center items-center gap-2 mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
          Users
        </h2>
        <svg
          className="w-16 text-pinkAccent"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          ></path>
        </svg>
        </div>
    </div>
      <div  className="mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {users.map(user=> {
          return (
            <>
            <div key={user.id} className="w-full mx-auto py-4 px-3 border-[3px] border-blueMain hover:border-dashed rounded-lg bg-background shadow-md mb-3">
              <p className="text-2xl sm:text-3xl font-bold text-blueMain hover:text-pinkAccent mb-3">{user.name}
              </p>
              <p className="text-xl font-bold mb-2 uppercase">Gender: <span className="text-slate-900 capitalize font-light">{user.gender}</span></p>
              <p className="text-xl  font-bold mb-2 uppercase">Email: <span className="text-slate-900 capitalize font-light">{user.email}</span></p>
              <p className="text-xl  font-bold uppercase">Status: <span className={`${user.status == "inactive" ? "text-red-700" : "text-green-700"} capitalize`}>{user.status}</span></p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
