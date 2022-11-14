import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="">
      <Topbar />
      <div className="flex justify-between mt-2 overflow-x-hidden">
        <div className="w-1/4 xl:w-1/5">
          <Sidebar />
        </div>
        <div className="w-3/4 xl:w-4/5">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App;
