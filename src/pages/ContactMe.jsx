import { useState, useRef, useEffect } from 'react';

export default function ContactMe () {

    const [email, setEmail] = useState('jcricket@makeawish.com');
    const [name, setName] = useState('Jimini Cricket');
    const [message, setMessage] = useState('Type message here...');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch(name) {
            case 'email':
                return setEmail(value);
            case 'name':
                return setName(value);
            case 'message':
                return setMessage(value);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (email === '' || email === 'jcricket@makeawish.com') {
            return alert('You must include an email address');
        } else if (name === '' || name === 'Jimini Cricket') {
            return alert('You must include a name');
        } else if (message === '' || message === 'Type message here...') {
            return alert('You must include a message');
        }

        alert('Email sent!');
        
        setEmail('jcricket@makeawish.com');
        setName('Jimini Cricket');
        setMessage('Type message here...')
    }
    


    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Jimini Cricket">
                </input>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="jcricket@makeawish.com">
                </input>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Type message here...">
                </textarea>
                <button type="submit">Send!</button>
            </form>
        </div>
    )
}