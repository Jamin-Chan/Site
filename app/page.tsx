import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="m-6 absolute end-0">
        <Link href="https://www.linkedin.com/in/jamin-chan-856b88222" passHref={true}>
          <button className="transition hover:-translate-y-2">
            <Image
              className="rounded shadow-lg bg-transparent mr-4"
              src="https://cdn.discordapp.com/attachments/1207939238163910736/1207939307709669376/2048px-LinkedIn_icon.png?ex=65e17825&is=65cf0325&hm=12d9b49dddd2c8f01844f6310b46cac11e40a2cc71ba6a43a63600e2ed7f7458&"
              alt="LinkedIn Logo"
              width={50}
              height={50}
              priority
            />              
          </button>
        </Link>
        <Link href="https://www.instagram.com/jamin.200/" passHref={true}>
          <button className="transition hover:-translate-y-2">
            <Image
              className="rounded shadow-lg bg-transparent mr-4"
              src="https://cdn.discordapp.com/attachments/1112541604318822600/1113948933572534314/174855.png?ex=65e0fd49&is=65ce8849&hm=e0c4c9a54b02e179384c0e075406858f1e03d95bab3157ecbf2c40fb753fcf1a&"
              alt="Instagram Logo"
              width={50}
              height={50}
              priority
            />
          </button>
        </Link>
        <Link href="https://github.com/Jamin-Chan" passHref={true}>
          <button className="transition hover:-translate-y-2">
            <Image
              className="rounded shadow-lg bg-transparent mr-4"
              src="https://cdn.discordapp.com/attachments/1112541604318822600/1113947838007754752/github-mark.png?ex=65e0fc44&is=65ce8744&hm=9fea9a20980c29fdcb70b26e9fabf89955ce0bad19dcb0e7928b64e8b69166b0&"
              alt="Github Logo"
              width={50}
              height={50}
              priority
            />              
          </button>
        </Link>
        <Link href="mailto:jaminchan321@gmail.com" passHref={true}>
          <button className="transition hover:-translate-y-2">
            <Image
              className="rounded shadow-lg bg-transparent mr-4"
              src="https://cdn.discordapp.com/attachments/1207939238163910736/1208003151060279296/768px-Mail_28iOS29.png?ex=65e1b39a&is=65cf3e9a&hm=4a2deff000ef4c85e37b7cd7275f280da8abfc6ed684fda6c34606714e495159&&"
              alt="Github Logo"
              width={50}
              height={50}
              priority
            />              
          </button>
        </Link>
      </div>

      <div className="grid place-items-center h-dvh">
        <p className="text-8xl font-bold relative bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Jamin Chan
        </p>
      </div>

      <div className="grid grid-cols-1 place-items-center h-fit">
        <div className="m-8">
          <p className="text-6xl font-semibold">
              Education
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-9/10 h-80">
          <div className="rounded-lg bg-gradient-to-r from-red-900 to-yellow-400">
            <p className="text-3xl font-semibold ">
                Mills High School
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-red-900 via-yellow-400 to-white">
            <p className="text-3xl font-semibold ">
                Skyline College
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-blue-900 to-yellow-400">
            <p className="text-3xl font-semibold ">
                University of California, Davis
            </p>
          </div>
        </div>
        
      </div>


    </main>
  );
}
