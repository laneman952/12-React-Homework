import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import ResumePage from './Pages/ResumePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
  },
  {
        path: 'about',
        element: <AboutPage />,
  },
  {
        path: 'portfolio',
        element: <PortfolioPage />,
  },
  {
        path: 'contact',
        element: <ContactPage />,
  },
  {
        path: 'resume',
        element: <ResumePage />,
  }  
  ]}    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
