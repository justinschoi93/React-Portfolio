//import Home, About, Resume and Projects
import AboutMeTab from './About.jsx';
import ResumeTab from './Resume';
import PortfolioTab from './Portfolio';
import ContactMeTab from './ContactMe';

const styles = {
    background: 'black',
    color: 'white'
}


export default function Navbar(){

    return (
        <div className="navbar-tabs">
            <div className="navbar-tab navbar-tab-about-me"><AboutMeTab /></div>
            <div className="navbar-tab navbar-tab-resume"><ResumeTab /></div>
            <div className="navbar-tab navbar-tab-projects"><PortfolioTab /></div>     
            <div className="navbar-tab navbar-tab-contact-me"><ContactMeTab /></div>     
        </div>
    )
};