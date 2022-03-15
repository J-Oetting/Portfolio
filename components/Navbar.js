import React from 'react';

export default class Navbar extends React.Component {
    render (){
        return (
            <nav className='navbar'>
                <ul>
                    <li>My Story</li>
                    <li>Projects</li>
                    <li>Education</li>
                    <li>Experience</li>
                </ul>
            </nav>
        )
    }
}