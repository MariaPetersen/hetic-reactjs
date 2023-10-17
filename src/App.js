import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import Navigation from './components/Navigation';
import CalculatorPage from "./pages/CalculatorPage";
import Application from './pages/Application';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './components/Articles/Article';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Auth from './components/Auth';
import PrivateRoute from './PrivateRoute';

function App() {

  const articles = [
    { id: 1, title: "papou", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
    { id: 2, title: "con", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
    { id: 3, title: "hahaha", content: "fdsfdsqfdsqfsdqfsqfsqfdsfdsq" },
  ];

  return (
    <Auth>
      <div div className="App" >
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />} >
            <Route path="articles" element={<Articles articles={articles} />} />
            <Route path="articles/:id" element={<Article articles={articles} />} />
            <Route path="/applications" element={<Application />}>
              <Route path="/applications/gestion" element={<CalculatorPage />} />
              <Route path="/applications/todolist" element={<TodoPage />} />
            </Route>
            <Route path="profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </div >
    </Auth >
  );
}

export default App;
