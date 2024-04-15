'use client'
import Image from "next/image";
import Link from 'next/link';
import { FrontPage } from "../public/pages/frontPage";
import { Education } from "../public/pages/education";
import { AboutMe } from "../public/pages/aboutme";
import { Projects } from "../public/pages/projects";

export default function Home() {
  return (
    <main className="">
      <FrontPage/>
      <AboutMe/>
      <Education/>
      <Projects/>
    </main>
  );
}
