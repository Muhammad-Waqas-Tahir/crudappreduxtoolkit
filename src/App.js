import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowTodo from "./Components/ShowTodo";
import AddTodo from "./Components/AddTodo";
import EditTodo from "./Components/EditTodo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowTodo />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
