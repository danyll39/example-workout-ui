import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//change to display
import Display from "./components/Display";
import WorkOutsData from "./components/WorkOutsDescription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/workouts/:index" element={<WorkOutsData/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
