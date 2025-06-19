import Link from "next/link";



const Post = async ({params}:{params:Promise<{postId:string}>}) => {
    const {postId}=await params
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const post = await res.json();

  return (
    <div className="flex items-center h-96">
    <div className="bg-white rounded-md mx-10 shadow-md p-6 shadow-black">
        <h1 className="font-bold text-center text-xl">Post : {postId}</h1>
      <h1><span className="font-semibold text-lg">Title</span> : {post.title}</h1>
      <p><span className="font-semibold text-lg">Body</span> : {post.body}</p>
      <div className="text-center mt-4">
      <Link href="/dashboard" className='bg-blue-500 rounded text-white px-4 py-1.5 my-2 text-sm'>Go Back</Link>
      <Link href={`/dashboard/${postId}/comments`} className='bg-slate-500 rounded text-white px-4 py-1.5 my-2 ml-5 text-sm'>
      comments
      </Link>
      </div>
    </div>
    </div>
  );
};

export default Post;
