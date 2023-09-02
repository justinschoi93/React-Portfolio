import github_logo from '../assets/images/github_logo.png';
import linkedin_logo from '../assets/images/linkedin_logo.png';
import stackoverflow_logo from '../assets/images/stackoverflow_logo.png';

export default function Footer(){
    return (
        <footer>
            <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>

            <ul className = "buttons">
                <a href="https://github.com/justinschoi93"><li><img src={github_logo}></img></li></a>
                <a href="https://linkedin.com/in/justinschoi93"><li><img src={linkedin_logo}></img></li></a>
                <a href="https://stackoverflow.com"><li><img src={stackoverflow_logo}></img></li></a>
            </ul>
            
        </footer>
    )
}
