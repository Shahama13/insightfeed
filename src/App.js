import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/science" element={<News setProgress={setProgress} key="Science" category="Science" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="Entertainment" category="Entertainment" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="Business" category="Business" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/" element={<News setProgress={setProgress} key="General" category="General" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="Sports" category="Sports" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="Health" category="Health" pageSize={9} country="us" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="Technology" category="Technology" pageSize={9} country="us" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
