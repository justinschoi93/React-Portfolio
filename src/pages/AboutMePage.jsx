import justin from '../assets/images/justin.jpeg';

export default function AboutMe (){
    return (
        <div className = "about-me-page">
            <img src={justin}></img>
            <p>
                An aspiring software engineer. I have many skills... many talents... but none of them have led to a career quite yet... so here I am!
            </p>
        </div>
    )
}