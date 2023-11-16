import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";
import ExperienceCard from "../components/ExperienceCard";



const ExperiencePage = () => {
    return(    
        <div className="mx-auto px-6 py-12">
        <Navbar/>
        <div className="mt-10 mx-6 lg:mx-20">
            <ExperienceCard/>
        </div>
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Experience Page" />
    <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
    </>
)

export default ExperiencePage
