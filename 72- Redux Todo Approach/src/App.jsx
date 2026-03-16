import { BrowserRouter, Routes, Route } from "react-router-dom"


import TodoApp from "./features/todos/TodoApp"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App