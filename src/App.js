import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './components/Practice.scss'

function App() {
  const [navState, setNavState] = useState(1)
  return (
    <div className="App">
      {navState === 1 && <Projects navState={navState} setNavState={setNavState}/>}
      {navState === 2 && <AboutMe navState={navState} setNavState={setNavState}/>}
      {navState === 3 && <Contact navState={navState} setNavState={setNavState}/>}
    </div>
  );
}

export default App;
