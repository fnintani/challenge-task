import getPost from "../../libs/getPost"

export default async function postPage({params: {id}}) {

  const post = await getPost(id)
 
  
  return (
    <div className="background-full">
    <div className="text-center">
      <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">Post Detail</h3>
      <div className="mx-auto py-4 px-3 border-[3px] border-blueMain hover:border-dashed rounded-lg bg-background shadow-md mb-3 sm:mb-5 w-4/5 sm:w-4/6">
        <p className="text-pinkAccent uppercase italic text-2xl mb-5 sm:mb-10">{post.title}</p>
        <p className="text-slate-400">{post.body}</p>
      </div>
    
    </div>

    </div>
  )
}
