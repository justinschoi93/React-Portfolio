//import Home, About, Resume and Projects
import HomeTab from './Home.jsx';
import AboutMeTab from './About.jsx';
import ResumeTab from './Resume';
import ProjectsTab from './Projects';
import ContactMeTab from './ContactMe';

export default function Navbar(){

    return (
        <div className="navbar-tabs">
            <div className="navbar-tab navbar-tab-home"><HomeTab /></div>
            <div className="navbar-tab navbar-tab-about-me"><AboutMeTab /></div>
            <div className="navbar-tab navbar-tab-resume"><ResumeTab /></div>
            <div className="navbar-tab navbar-tab-projects"><ProjectsTab /></div>     
            <div className="navbar-tab navbar-tab-contact-me"><ContactMeTab /></div>     
        </div>
    )
};