import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import Navigation from './pages/Navigation';
import CalculatorPage from "./pages/CalculatorPage";
import Application from './pages/Application';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useState } from 'react';
import PrivateRoute from './pages/PrivateRoute';
import Status from './pages/Status';
import { UserContext } from './utils/contexts/UserContext';
import Articles from './components/Articles/Articles';
import Article from './components/Articles/Article';

function App() {
  const [status, setStatus] = useState("admin");
  const articles = [
    { id: 1, title: "papou", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
    { id: 2, title: "con", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
    { id: 3, title: "hahaha", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
  ];

  return (
    <div div className="App" >
      <UserContext.Provider value={status}>
        <Status setStatus={setStatus} />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles articles={articles} />} />
          <Route path="articles/:id" element={<Article articles={articles} />} />
          <Route element={<PrivateRoute />}>
            <Route path="/applications" element={<Application />}>
              <Route path="applications/gestion" element={<CalculatorPage />} />
              <Route path="applications/todolist" element={<TodoPage />} />
            </Route>
            <Route path="profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div >
  );
}

export default App;
