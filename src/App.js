
import './App.css';
import Scroll from './components/scroll';
import "./fonts/Fontspring-DEMO-viata-extrabold.otf";
import ComingSoonComp from './components/coming_soon';
import Event from './components/event';
import Title from './components/title';
// import EventFAB from './components/EventFAB';
import Form from "./components/register/form"
import Home from './components/Home';
import EventCard from './components/EventCard';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [index,setIndex]=useState([]);
  return (
    <div className="App">
      {/* <Title />
      <div className="landing-page-images">
        <img src="/assets/1.png" alt=""/>
      </div>
      <div className="characters-image">
        <img src="/assets/Characters3.png" alt="" />
      </div>
      <ComingSoonComp />
      <div className="event-list-main">
        <Event />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Form/>} />
        </Routes>
      </Router>
     

      {/* <EventFAB /> */}
    </div>
  );
}

export default App;
