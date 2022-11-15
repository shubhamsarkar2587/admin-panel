import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import UserList from "./pages/userLIst/UserList";

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="flex justify-between mt-2 overflow-x-hidden">
        <div className="w-1/4 xl:w-1/5">
          <Sidebar />
        </div>
        <div className="w-3/4 xl:w-4/5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
