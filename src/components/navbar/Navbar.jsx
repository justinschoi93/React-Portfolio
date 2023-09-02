//import Home, About, Resume and Projects
import AboutMeTab from './About.jsx';
import ResumeTab from './Resume';
import PortfolioTab from './Portfolio.jsx';
import ContactMeTab from './ContactMe';



export default function Navbar(){

    return (
        <div className="navbar-tabs">
            <AboutMeTab />
            <ResumeTab />
            <PortfolioTab />
            <ContactMeTab />
        </div>
    )
};