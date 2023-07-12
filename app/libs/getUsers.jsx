
export default async function getUsers() {
    const response = await fetch('https://gorest.co.in/public/v2/users')
   
    if(!response.ok) {
       throw new Error('failed to fetch posts')
    }
   
    return await response.json()
   }