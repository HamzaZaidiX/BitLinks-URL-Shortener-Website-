"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")   
            setshorturl("")
            console.log(result)
        toast("Your Short URL Generated! 🙂")
        })
        .catch((error) => console.error(error),
      );
}

  return (
    <div className="flex flex-col max-w-lg gap-4 p-8 mx-auto my-16 bg-purple-100 rounded-lg">
      <h1 className="text-2xl font-bold text-center">
        Generate Your Short URL&apos;s 👇
      </h1>
      <div className="flex flex-col gap-2">
        <input
          typ="text"
          value={url}
          onChange={e => { seturl(e.target.value) }}
          className="px-4 py-2 rounded-md focus:outline-purple-600"
          placeholder="Enter your URL here"
        />
        <input
          type="text"
          value={shorturl}
          onChange={e => { setshorturl(e.target.value) }}
          className="px-4 py-2 rounded-md focus:outline-purple-600"
          placeholder="Enter your preferred short URL text"
        />
        <button onClick={generate} className="p-3 py-2 my-3 font-bold text-white bg-purple-500 rounded-lg shadow-lg hover:scale-105">
          Generate 🚀
        </button>
      </div>
          {generated && <> <span className='text-lg font-bold'>Your Link 🔗</span><code className="text-center hover:scale-105"><Link className="text-lg font-bold text-purple-600 cursor-pointer" target="_blank" href={generated}>{generated}</Link> 
      </code></>}
    </div>
  );
};

export default Shorten;
