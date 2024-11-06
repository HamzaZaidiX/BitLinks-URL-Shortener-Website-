import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[90vh] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-4" >
          <p className="text-4xl font-bold">
            The best URL Shortener in the Market
          </p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex justify-start gap-3'>
          <Link href="/shorten"><button className='p-3 py-1 font-bold text-white bg-purple-500 rounded-lg shadow-lg'>Try Now</button></Link>
          <Link href="/github"><button className='p-3 py-1 font-bold text-white bg-purple-500 rounded-lg shadow-lg'>GitHub</button></Link>
        </div>
        </div>
        <div className="relative flex justify-start">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}