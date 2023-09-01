import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/boostrap.min.css';
import './index.css';
import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMePage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import Resume from './pages/ResumePage.jsx';
import ContactMe from './pages/ContactMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        root: 'AboutMe',
        element: <AboutMe />
      },
      {
        root: 'Projects',
        element: <Projects />
      },
      {
        root: 'Resume', 
        element: <Resume />
      },
      {
        root: 'ContactMe',
        element: <ContactMe />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
