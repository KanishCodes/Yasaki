import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Navbar from './components/Navbar';
import Booking from './pages/booking';
import Tatami from './pages/tatami';
import Newsletter from './pages/newsletter';
import MeetUs from './pages/meetus';
import JoinUs from './pages/joinus';
import OurStory from './pages/ourstory';
import HoursLocation from './pages/hours-location';
import Studio from './pages/studio';
import Play from './pages/play';
import SushiMaker from './pages/sushi-maker';
import OrigamiPopUp from './pages/origami-popup';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Render once here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tatami" element={<Tatami />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/meetus" element={<MeetUs />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/hours-location" element={<HoursLocation />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/play" element={<Play />} />
        <Route path="/sushi-maker" element={<SushiMaker />} />
        <Route path="/origami-popup" element={<OrigamiPopUp />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
