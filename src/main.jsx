import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AboutMe from './pages/AboutMePage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import Resume from './pages/ResumePage.jsx';
import ContactMe from './pages/ContactMe';
import ErrorPage from './pages/ErrorPage';
import 'bootstrap';


console.log(AboutMe)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'resume', 
        element: <Resume />
      },
      {
        path: 'contactme',
        element: <ContactMe />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
