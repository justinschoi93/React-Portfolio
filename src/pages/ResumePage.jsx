const title = "I was feeling sad today so I asked chat gpt to write a fake biblical passage about Jesus accepting trans people";
const story = `Here’s what it came up with: And a woman, whose heart was divided between spirit and body, came before him. In quiet despair, she asked, 'Lord, I come to you estranged, for my spirit and body are not one. How shall I hope to enter the kingdom of God? Jesus looked upon her with kindness, replying, ‘my child, blessed are those who strive for unity within themselves, for they shall know the deepest truths of my Father’s creation. Be not afraid, for in the kingdom of God, there is no man nor woman, as all are one in spirit. The gates of my Father’s kingdom will open for those who love and are loved, for God looks not upon the body, but the heart. I know it’s not real, but it gave me some comfort.`;

export default function Resume () {
    return(
        <div className="resume">
            <h3>I don't currently have a resume... but here's a beautiful short story I found on reddit the other day!</h3>
            <a href="https://www.reddit.com/r/trans/comments/15brb7v/i_was_feeling_sad_today_so_i_asked_chat_gpt_to/">
            <div className="post">
            <h4>{title}</h4>
            <p>{story}</p>
            </div>
            </a>
            <h6>post by <a href="https://www.reddit.com/user/Psychological_Dog527/">Psychological_Dog527</a></h6>
            
        </div>
    )
}
