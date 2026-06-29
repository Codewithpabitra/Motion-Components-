import GlowButton from "./components/Button/GlowButton"
import BorderdButton from "./components/Button/BorderdButton";
import DownloadButton from "./components/Button/DownloadButton";
import BrowsersCard from "./components/Card/BrowsersCard";

const App = () => {
  return (
   <div className="h-screen w-full bg-neutral-950 text-neutral-500 flex gap-20 justify-center items-center "
   style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}
   >
    {/* <GlowButton /> */}
    <BorderdButton title="Subscribe" bgColor="cyan" textColor="white" shadow="xl" />
    <DownloadButton />
    <BrowsersCard />
   </div>
  )
}

export default App;
