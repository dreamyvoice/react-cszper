import React from 'react';
import './style.css';
import React, { useState } from 'react';
import Home from './Home';
import About from './LOGIN';

export default function App() {
  const [comp, setComp] = useState(Home);
  return (
    <>
      <header>
        <nav>
          <button onClick={() => setComp(Home)}>LOGO</button>
          <button class="nav-btn">item1</button>
          <button class="nav-btn">item2</button>
          <button class="nav-btn">item3</button>
          <button class="nav-btn">item4</button>
          <button onClick={() => setComp(About)}>로그인</button>
        </nav>
      </header>

      <hr />

      <main children={comp} />
    </>
  );
}
