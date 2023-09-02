import github_logo from '../assets/images/github_logo.png';
import heroku_logo from '../assets/images/heroku_logo.png';
import breakingbad_dashboard_img from '../assets/images/breakingbad_dashboard.jpg';
import trivia_mania_photo from '../assets/images/trivia_mania.jpg';
import jate from '../assets/images/jate.jpg';
import DIY_socialmedia_photo from '../assets/images/DIY_socialmedia.jpg';
import notetaker from '../assets/images/notetaker.jpg';
import codequiz from '../assets/images/codequiz.jpg';
import googledrive_logo from '../assets/images/googledrive_logo.png';

export default function Portfolio () {
    return (
        <div className="portfolio">
            <div className="portfolio-1">
                <h3>Breaking Bad Dashboard</h3>
                <img src={breakingbad_dashboard_img}></img>
                <div className="description">
                    A Breaking Bad themed dashboard that displays the date, tells time, and displays a random quote by your favorite Breaking Bad characters!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/BreakingBad_Dashboard"><img src={github_logo}></img></a>
                    <a href="https://justinschoi93.github.io/BreakingBad_Dashboard/"><img src={github_logo}></img></a>
                </div>
            </div>
            <div className="portfolio-2">
                <h3>Trivia Mania</h3>
                <img src={trivia_mania_photo}></img>
                <div className="description">
                    A Trivia Game!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/Trivia-Mania"><img src={github_logo}></img></a>
                    <a href="https://trivia-mania-34ca81ef04dc.herokuapp.com/"><img src={heroku_logo}></img></a>
                </div>
            </div>
            <div className="portfolio-3">
                <h3> J.A.T.E. </h3>
                <img src={jate}></img>
                <div className="description">
                    J.A.T.E., which is an acronym for Just Another Text Editor, is a Progressive Web Application, that can be downloaded for offline use, without compromising it's functionality!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/PWA-challenge-JC93"><img src={github_logo}></img></a>
                    <a href="https://fierce-tor-72080-53a54ade824e.herokuapp.com/"><img src={heroku_logo}></img></a>
                </div>
            </div>
            <div className="portfolio-4">
                <h3> DIY Social Media BackEnd </h3>
                <img src={DIY_socialmedia_photo}></img>
                <div className="description">
                    A social media site server, that allows you to create an account, add friends, create thoughts as well as view and leave comments on thoughts that your friends have created!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/Happy-Camper-API"><img src={github_logo}></img></a>
                    <a href="https://drive.google.com/file/d/178bLwdrl74Wai2S7Pw9Ns_mT1F3tHyLv/view"><img src={googledrive_logo}></img></a>
                </div>
            </div>
            <div className="portfolio-5">
                <h3> Note Taker </h3>
                <img src={notetaker}></img>
                <div className="description">
                    A note taking application that utilizes localstorage to provide users with a smooth, bug-free experience!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/module-11-challenge-JC93"><img src={github_logo}></img></a>
                    <a href="https://enigmatic-forest-19013-c4a8bdfa0660.herokuapp.com/"><img src={heroku_logo}></img></a>
                </div>
            </div>
            <div className="portfolio-6">
                <h3> Code Quiz </h3>
                <img src={codequiz}></img>
                <div className="description">
                    An online quiz I designed!
                </div>
                <div className="buttons">
                    <a href="https://github.com/justinschoi93/module-4-challenge-JC93"><img src={github_logo}></img></a>
                    <a href="https://justinschoi93.github.io/module-4-challenge-JC93/"><img src={github_logo}></img></a>
                </div>
            </div>
        </div>)
}