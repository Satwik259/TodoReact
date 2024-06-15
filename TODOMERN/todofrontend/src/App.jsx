import Additem from "./components/Additem"
import Todolist from "./components/Todolist";
import {  MyProvider } from "./contextObj";
 

const App = () => {
  return (
    <MyProvider >
    <div className="h-[100vh]">
     <Additem/>
     <Todolist/>
    </div>
    </MyProvider>
  )
}

export default App