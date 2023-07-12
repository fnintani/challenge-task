
export default async function getPosts() {
 const response = await fetch('https://gorest.co.in/public/v2/posts')

 if(!response.ok) {
    throw new Error('failed to fetch posts')
 }

 return await response.json()
}
