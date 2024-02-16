import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="m-4 absolute end-0">
        <Link href="https://www.linkedin.com/in/jamin-chan-856b88222" passHref={true}>
          <button className="transition hover:-translate-y-2">
            <Image
              className="rounded-full shadow-lg bg-transparent mr-4"
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
              className="rounded-full shadow-lg bg-transparent mr-4"
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
              className="rounded-full shadow-lg bg-transparent mr-4"
              src="https://cdn.discordapp.com/attachments/1112541604318822600/1113947838007754752/github-mark.png?ex=65e0fc44&is=65ce8744&hm=9fea9a20980c29fdcb70b26e9fabf89955ce0bad19dcb0e7928b64e8b69166b0&"
              alt="Github Logo"
              width={50}
              height={50}
              priority
            />              
          </button>
        </Link>
      </div>

      <div className="grid place-items-center h-dvh">
        <p className="text-8xl font-bold relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
            Jamin Chan
        </p>
      </div>

      <div className="grid col-1 place-items-center h-dvh">
        <p className="text-4xl font-semibold">
            Education
        </p>
        <p className="text-4xl font-semibold">
            Education
        </p>
        <p className="text-4xl font-semibold">
            Education
        </p>
      </div>


    </main>
  );
}
