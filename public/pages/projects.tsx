'use client'

import React from "react";
import Image from "next/image";

import me from "/assets/me.jpg";

export const Projects: React.FC= () => {
    return (
        <div className="md:h-dvh h-fit">
            <div className="flex flex-col place-items-center m-8">
                <p className="text-8xl font-semibold">
                Projects
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="m-8">
                        <p className="text-4xl text-center">
                            Website Portfolio
                        </p>
                        <p className="text-2xl text-center">
                            This is my website created with Next.js React.js using typescript and tailwind.
                            <br/>
                            To find more about the website and look at the code click &nbsp;
                            <a href="https://github.com/Jamin-Chan/site" target="_blank" className="no-underline hover:underline text-blue-400">here</a>
                            &nbsp; to the github repository.
                        </p>              
                    </div>
                    <div className="m-8 grid place-items-center">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\assets\reactnext.png"
                            alt="reactNext"
                            width={600}
                            height={600}
                            priority />
                    </div>
                    <div className="md:mt-24 md:mb-24 md:border-t border-gray-400 ml-20"></div>
                    <div className="mt-24 mb-24 border-t border-gray-400 mr-20 ml-20 md:ml-0"></div>
                    <div className="m-8 grid place-items-center order-5 md:order-none">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="\assets\pythonapi.png"
                            alt="pythonapi"
                            width={400}
                            height={400}
                            priority />
                    </div>
                    <div className="m-8">
                        <p className="text-4xl text-center">
                            Hypixel GXP Bot <br/>
                        </p>
                        <p className="text-2xl text-center">
                            Created with Python using mojang API and Hypixel API
                        </p>              
                    </div>
                </div>
        </div>
    );
};

export default Projects;