import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import Gallery from "./page/Gallery";
import About from "./page/About";
import Todos from "./page/Todos";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul></ul>
        <div id="page">
          {/* TODO: 현재는 Gallery 컴포넌트만 보이지만, URL에 의해 컴포넌트가 다르게 보여야 합니다. */}
          <div>
            <div>
              <Link to="/">Gallery</Link>
            </div>
            <div>
              <Link to="/About">About</Link>
            </div>
            <div>
              <Link to="/Todos">Todos</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
