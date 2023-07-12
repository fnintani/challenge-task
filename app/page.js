import Link from "next/link";

export default function Home() {
  return (
    <div className="background-full">
      <div className="py-3 px-4 md:py-8 mx-auto text-center hover:border-dashed border-[5px] w-full sm:w-4/5 bg-background border-blueMain rounded-lg">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
          Welcome
        </h1>
        <div className="mx-auto flex flex-col gap-3 mt-10">
          <div className="py-3 px-3 rounded-lg hover:bg-pinkAccent mx-auto flex sm:flex-row justify-center items-center gap-1">
            <svg
              className="w-14"
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              ></path>
            </svg>
            <Link
              href="/posts"
              className="text-2xl sm:text-4xl hover:text-limeSecondary"
            >
              Go to posts
            </Link>
          </div>

          <div className="py-3 px-3 rounded-lg hover:bg-pinkAccent mx-auto flex sm:flex-row justify-center items-center gap-1">
            <svg
              className="w-14"
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
            <Link
              href="/users"
              className="hover:text-limeSecondary text-2xl sm:text-4xl"
            >
              See list of friends
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
