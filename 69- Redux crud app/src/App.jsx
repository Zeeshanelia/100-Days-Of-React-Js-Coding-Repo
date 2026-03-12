import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import NewCustomer from "./NewCustomer"
import EditCustomer from "./EditCustomer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-customer" element={<NewCustomer />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App