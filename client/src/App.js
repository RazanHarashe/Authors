import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthorsList from './Components/AuthorsList';
import AddAuthor from './Components/AddAuthor';
import EditAuthor from './Components/EditAuthor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthorsList />} />
          <Route path="/new" element={<AddAuthor />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
