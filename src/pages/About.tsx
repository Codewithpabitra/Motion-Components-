import { Link } from "react-router-dom"

function About() {
    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center ">
         <p className="text-2xl max-w-2xl text-center">This is a Component Library building with React,Typescript, Tailwind and motion/react.</p>
         <Link to="/components" className="px-10 py-4 bg-neutral-900 text-neutral-300 rounded-xl font-semibold hover:text-white">Browse Components</Link>
        </div>
    )
}

export default About;