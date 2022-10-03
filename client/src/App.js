import NavBar from "./components/menu/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import Subitems from "./components/subitems/Subitems";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        {/* <main>
          <Banner />
          <Animation />
          <Footer />
        </main> */}

        <Routes>
          <Route path="/" element={<Subitems />}></Route>
          <Route path="/banner" element={<Employee />}></Route>
          <Route path="/employees" element={<Employee />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
