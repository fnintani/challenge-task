import getUser from "../../libs/getUser"

export default async function userPage({params: {id}}) {

  const user = await getUser(id) 
  
  return (
    <div className="text-center">
      <h3>user detail</h3>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.status}</p>
      </div>
    
    </div>
  )
}
