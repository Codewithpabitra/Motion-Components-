import { Link } from "react-router-dom"

function Documentation() {
    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center ">
         <p className="text-2xl max-w-2xl text-center">Docs coming soon.</p>
         <Link to="/components" className="px-10 py-4 bg-neutral-900 text-neutral-300 rounded-xl font-semibold hover:text-white">Browse Components</Link>
        </div>
    )
}

export default Documentation;