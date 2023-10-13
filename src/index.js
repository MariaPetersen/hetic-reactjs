import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TodoPage from './pages/TodoPage';
import CalculatorPage from './pages/CalculatorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/todolist",
                element: <TodoPage />,
            },
            {
                path: "/calculator",
                element: <CalculatorPage />,
            },
        ]
    },
]);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
