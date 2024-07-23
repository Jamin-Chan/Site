'use client'

import React from "react";
import FadeAnimation from "../components/FadeAnimation";

export const Education: React.FC= () => {
    return (
        <FadeAnimation>
        <div className="md:h-dvh h-fit">
            <div className="flex flex-col place-items-center">
                <div className="m-8">
                    <p className="text-7xl md:text-8xl font-semibold text-center">
                        Education
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 transition-all duration-1500 gap-10 w-11/12 h-min text-black text-wrap *m-2">
                    <div className="rounded-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-600 p-2">
                        <p className="m-2 text-center text-3xl font-semibold ">
                            University of California, Davis
                        </p>
                        <p className="text-center text-2xl">
                            2023-2025
                        </p>
                        <ul className="flex justify-center flex-wrap text-xl mt-4 *:p-1 *:m-1 *:bg-white *:rounded-md *:border-2 *:border-black *:border-solid hover:*:border-amber-500 hover:*:bg-slate-200">
                        <li>Computer Architecture</li>
                        <li>Software Development & Object-Oriented Programing in C++</li>
                        <li>Algorithm Design and Analysis</li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-fuchsia-500 p-2">
                        <p className="m-2 text-center text-3xl font-semibold p-2">
                            Skyline College
                        </p>
                        <p className="text-center text-2xl">
                            2021-2023
                        </p>
                        <ul className="flex justify-center flex-wrap text-xl mt-4 *:p-1 *:m-1 *:bg-white *:rounded-md *:border-2 *:border-black *:border-solid hover:*:border-amber-500 hover:*:bg-slate-200">
                        <li>Calculus 1</li>
                        <li>Calculus 2</li>
                        <li>Calculus 3</li>
                        <li>Intro Object-Oriented Prog:C++</li>
                        <li>Data Structures C++</li>
                        <li>Microcontrollers with C++</li>
                        <li>Computer Arch. & Assembly Lang</li>
                        <li>Linear Algebra</li>
                        <li>Discrete Mathematics</li>
                        <li>Ordinary Differential Equations</li>
                        </ul>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-pink-600 via-pink-500 to-fuchsia-500 p-2">
                        <p className="m-2 text-center text-3xl font-semibold">
                            Mills High School
                        </p>
                        <p className="text-center text-2xl">
                            2017-2021
                        </p>
                        <ul className="flex justify-center flex-wrap text-xl mt-4 *:p-1 *:m-1 *:bg-white *:rounded-md *:border-2 *:border-black *:border-solid hover:*:border-amber-500 hover:*:bg-slate-200">
                        <li>AP Calculus</li>
                        <li>AP Chemistry</li>
                        <li>AP Statistics</li>
                        <li>AP Computer Science A</li>
                        <li>AP Physics</li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>
        </FadeAnimation>
    );
};

export default Education;