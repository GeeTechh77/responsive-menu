import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonMenu from './ButtonMenu';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  return (
    <Router>
      <div>
        <ButtonMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;
