'use client'

import React from "react";
import Image from "next/image";
import Link from 'next/link';
import NavigationMenu from "../components/Navigation";


export const FrontPage: React.FC= () => {
    return (
        <div>
            <div className="absolute border-2 border-gray-50 rounded">
                <NavigationMenu></NavigationMenu>
            </div>
            

            <div className="m-6 absolute end-0">
                <Link href="https://www.linkedin.com/in/jamin-chan-856b88222" passHref={true}>
                    <button className="transition hover:-translate-y-2">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\site\assets\linkedinLogo.png"
                            alt="LinkedIn Logo"
                            width={50}
                            height={50}
                            priority />
                    </button>
                </Link>
                <Link href="https://www.instagram.com/jamin.200/" passHref={true}>
                    <button className="transition hover:-translate-y-2">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\site\assets\instagramLogo.png"
                            alt="Instagram Logo"
                            width={50}
                            height={50}
                            priority />
                    </button>
                </Link>
                <Link href="https://github.com/Jamin-Chan" passHref={true}>
                    <button className="transition hover:-translate-y-2">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\site\assets\GithubLogo.png"
                            alt="Github Logo"
                            width={50}
                            height={50}
                            priority />
                    </button>
                </Link>
                <Link href="mailto:jaminchan321@gmail.com" passHref={true}>
                    <button className="transition hover:-translate-y-2">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\site\assets\mailLogo.png"
                            alt="Github Logo"
                            width={50}
                            height={50}
                            priority />
                    </button>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center h-dvh">
                    <p className="text-center text-8xl font-bold relative bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
                        Jamin Chan
                    </p>
            </div>
        </div>
    );
};

export default FrontPage;