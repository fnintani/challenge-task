export default async function getUser(id) {
 
const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`)

 if(!response.ok) {
    throw new Error('failed to fetch user')
 }

 return await response.json()
  
}