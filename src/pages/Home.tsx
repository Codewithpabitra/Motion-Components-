import { BookOpen,ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container max-w-4xl py-5 ">
      <nav className="w-full h-16  flex justify-between items-center">
        <div className="text-white font-semibold text-xl"><span className="text-indigo-500">Nexora</span>.ui</div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-3 cursor-pointer ">
            <Link to="/about" className="hover:text-neutral-100">
              About
            </Link>
            <Link to="/components" className="hover:text-neutral-100">
              Components
            </Link>
            <Link to="/docs" className="hover:text-neutral-100">
              Docs
            </Link>
          </div>
          {/* <div className="buttons">
            <button className="px-10 py-4 bg-neutral-900 text-neutral-300 font-semibold rounded-2xl cursor-pointer">Sign in</button>
          </div> */}
        </div>
      </nav>
      <div className="hero flex flex-col gap-5 justify-center items-center py-20 ">
        <h1 className="text-5xl max-w-2xl text-center">Browse <span className="text-indigo-500">Beautiful Components</span> Built For Your Product</h1>
        <p className=" text-xl text-neutral-400 max-w-xl text-center">access beautifully designed components just by copy them.Your one stop solution for motion components.</p>

        <div className="flex justify-center items-center gap-3 ">
          <Link to={"/components"} className="px-7 py-3 bg-indigo-500 rounded-xl text-white font-semibold cursor-pointer flex justify-center items-center gap-3">Components <ChevronRight size={18} /></Link>
          <Link to={"/docs"} className="px-7 py-3 bg-neutral-900 rounded-xl text-white font-semibold cursor-pointer flex justify-center items-center gap-3">Docs <BookOpen size={18} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
