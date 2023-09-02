//import Home, About, Resume and Projects
import AboutMeTab from './About.jsx';
import ResumeTab from './Resume';
import PortfolioTab from './Portfolio.jsx';
import ContactMeTab from './ContactMe';
import './Navbar.css'


const highlightTab = (e) => {
    
    let targetID = e.target.parentNode.id;
    const tabs = Array.from(e.currentTarget.children);
    
    tabs.map( tab => tab.id===targetID?tab.className='navbar-tab-active':tab.className='navbar-tab' )
    console.log(e.target.parentNode);
    console.log(targetID);
    console.log(e.currentTarget);
    
}

export default function Navbar(){

    return (
        <nav className="navbar-tabs" onClick={highlightTab}>
            <div className="navbar-tab" id='about-me-tab'><AboutMeTab /></div>     
            <div className="navbar-tab" id='resume-tab'><ResumeTab /></div>     
            <div className="navbar-tab" id='portfolio-tab'><PortfolioTab /></div>     
            <div className="navbar-tab" id='contact-me-tab'><ContactMeTab /></div>     
        </nav>
    )
};
//{window.location.pathname === '/' ? "tab-active" : "tab"}