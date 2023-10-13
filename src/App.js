import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Applications</h1>
      <NavLink
        to="/todolist"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Liste de tâches
      </NavLink>
      <NavLink
        to="/calculator"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Calculateur
      </NavLink>
      <Outlet />
    </div>
  );
}

export default App;
