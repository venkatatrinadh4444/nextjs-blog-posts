import Link from "next/link"
import Posts from "./Posts"


const Dashboard=()=> {

    return (
        <div className="text-center my-4 mx-10">
            <h1 className="text-xl font-medium text-blue-500">All Posts</h1>
            <Link href="/">
            <button className="rounded bg-blue-500 text-white font-semibold p-4 py-1 my-2 cursor-pointer" >Logout</button>
            </Link>
            <Posts/>
        </div>
    )
}

export default Dashboard