'use client'

import React from "react";
import Image from "next/image";

import me from "/assets/me.png";

export const AboutMe: React.FC= () => {
    return (
        <div className="md:h-dvh h-fit">
            <div className="flex flex-col justify-center items-center">
                <div className="m-8">
                    <p className="text-8xl font-semibold text-center">
                    About Me
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="m-8">
                        <p className="text-4xl text-center">
                            Hi! <br/>
                            My name is Jamin Chan. I am a Computer Scientist, Developer, and Student.
                            I attend UC Davis pursuing a degree in Computer Science. To see what I have 
                            achieved so far - &nbsp;
                            <a href="\assets\Resume - Jamin Chan.pdf" target="_blank" className="no-underline hover:underline text-blue-400">View Resume</a>
                        </p>
                        
                    </div>
                    <div className="m-8 grid place-items-center">
                        <Image
                            className="rounded shadow-lg bg-transparent mr-4"
                            src="site\assets\me.png"
                            alt="me"
                            width={600}
                            height={600}
                            priority />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;