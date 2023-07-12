import Link from "next/link";
import getPosts from "../libs/getPosts";

export default async function pages() {
  const posts = await getPosts();

  return (
    <div className="background-full">
      <div className="mx-auto w-4/5">
        <div className="flex justify-center items-center gap-2 mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
          Posts
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          ></path>
        </svg>
        </div>
        <div>
          {posts.map((post) => {
            return (
              <>
                <div
                  key={post.id}
                  className="mx-auto py-4 px-3 border-[3px] border-blueMain hover:border-dashed rounded-lg bg-background shadow-md mb-3 sm:mb-5 w-4/5 sm:w-4/6"
                >
                  <div className="text-2xl sm:text-3xl text-blueMain mb-3">
                    {post.title}
                  </div>
                  <p className="text-slate-900 hover:text-pinkAccent">
                    <Link href={`/posts/${post.id}`}> See details...</Link>
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
