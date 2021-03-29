import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>MY Web Development portfolio</h2>
                <Typed className="typed-text"          
                strings={["Web Design", "Web Development"," With HTML and CSS","Javascript","React JS",""]}
typeSpeed={36}
backSpeed={58} 
loop

                />
<button type="button" class="btn btn-outline-warning" href="#">Contact</button>
            </div>
        </div>
    )
}

export default Header
