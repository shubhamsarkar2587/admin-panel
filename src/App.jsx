import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"

const App = () => {
  return (
    <>
      <Topbar />
      <div className="flex justify-between ">
        <div className="w-1/4 xl:w-1/5">
          <Sidebar />
        </div>
        <div className="w-3/4 xl:w-4/5 bg-slate-200">
          other pages
        </div>
      </div>
    </>
  )
}

export default App;
