import Link from "next/link"

type User = {
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}


const Comments=async({params}:{params:Promise<{postId:string}>})=> {
    const {postId}=await params
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

    const comments:User[]=await res.json()

    return (
        <div className="bg-black px-5 py-5">
            <h1 className="text-white text-xl font-semibold pb-3">Comments For Post {postId}</h1>
            {comments.map(each=> {
                return (
                    <div key={each.id} className="bg-white rounded px-4 py-2 mb-3">
                        <h1><span className="font-semibold">Name</span>:{each.name}</h1>
                        <p><span className=" font-semibold">Email</span>:{each.email}</p>
                        <p><span className="font-semibold">Message</span>:{each.body}</p>
                    </div>
                )
            })}
        <div className="text-center">
        <Link href={`/dashboard/${postId}`} className='bg-blue-500 rounded text-white px-4 py-1.5 my-2 text-sm'>Go Back</Link>
        </div>
        </div>
    )
}

export default Comments