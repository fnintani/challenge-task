
export default async function getPost(id) {
 
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`)

 if(!response.ok) {
    throw new Error('failed to fetch post')
 }

 return await response.json()
  
}
