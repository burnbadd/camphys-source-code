import Navbar from "./Navbar";

import AFD from "./pages/AFD";
import TSP from "./pages/TSP";
import AQP from "./pages/AQP";
import Home from "./pages/Home";
import OE from "./pages/OE";
import PNP from "./pages/PNP";
import QCM from "./pages/QCM";
import SCM from "./pages/SCM";
import REL from "./pages/REL";

import {Route, Routes} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AFD" element={<AFD/>} />
          <Route path="/TSP" element={<TSP/>} />
          <Route path="/AQP" element={<AQP/>} />
          <Route path="/OE" element={<OE/>} />
          <Route path="/PNP" element={<PNP/>} />
          <Route path="/QCM" element={<QCM/>} />
          <Route path="/SCM" element={<SCM/>} />
          <Route path="/REL" element={<REL/>} />
        </Routes>
      </div>
    </>
  )
}

export default App