import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
import toast from "react-hot-toast";


export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    console.log(doc)
    if(doc){
         redirect(doc.url)
        toast(`Error redirecting to ${shorturl}`)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
        toast("Error redirecting to Homepage")
    }

    return <div>My Post: {url}</div>
  }