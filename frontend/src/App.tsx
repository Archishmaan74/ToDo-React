import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path="/addtask" element={<AddTask/>} />
            <Route path="/edittask" element={<EditTask/>}/>
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App