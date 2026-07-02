import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Components from "./pages/Components";

const App = () => {
  return (
   <div className="min-h-screen w-full bg-neutral-950 text-neutral-300 flex justify-center px-20 "
   style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}
   >
     <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/components" Component={Components} />
      <Route path="/docs" Component={Documentation} />
     </Routes>
   </div>
  )
}

export default App;
