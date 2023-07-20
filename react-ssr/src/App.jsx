import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
      <Suspense
        fallback={
          <div>
            Component loading ....
            <h2 className="loader">🌀</h2>
          </div>
        }
      >
        <Routes>
          {/* <Route path="/lazy-2" element={<LazyComp02 />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
  );
}

export default App;
