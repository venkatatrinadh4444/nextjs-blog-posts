
import Link from "next/link"


const Posts = ({ data }: { data: any[] }) => {

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {data.map((post) => (
          <Link href={`/dashboard/${post.id}`} key={post.id}>
            <div className="border shadow-lg rounded mb-3 px-3 py-2 bg-blue-50 cursor-pointer">
            <h3>{post.title.slice(0,20)}...</h3>
            <hr/>
            <p>{post.body.slice(0,100)}...</p>
          </div>
          </Link>
        ))}
      </div>
    )
  }
  
  export default Posts
  