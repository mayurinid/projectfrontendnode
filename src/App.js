import Home from "./Components/Home";
import Bollywood from "./Components/Bollywood";
import Technology from "./Components/Technology";
import Hollywood from "./Components/Hollywood";
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import { Routes,Route } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css"
import DataDetails from "./Components/DataDetails";
// import BackBotton1 from "./Components/BackBotton";
import Newpage from "./Components/newpage";
import BackBotton1 from "./Components/BackBotton";

function App() {
  return (
<>
<DataDetails>
  <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Bollywood" element={<Bollywood/>}/>
    <Route path="/Technology" element={<Technology/>}/>
    <Route path="/Hollywood" element={<Hollywood/>}/>
    <Route path="/Fitness" element={<Fitness/>}/>
    <Route path="/Food" element={<Food/>}/>
    <Route path=":elements/elementsid" element={<Newpage/>}/>
    <Route path="*" element={<BackBotton1/>}/>
      </Routes>
   </DataDetails>
   </>
  );
}

export default App;
