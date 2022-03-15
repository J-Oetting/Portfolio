import React from 'react';

export default class Navbar extends React.Component {
    render (){
        return (
            <nav className='navbar'>
                <ul>
                    <li>
                        <a href='#'>My Story</a>
                    </li>
                    <li>
                        <a href='#'>Projects</a>
                    </li>
                    <li>
                        <a href='#'>Education</a>
                    </li>
                    <li>
                        <a href='#'>Experience</a>
                    </li>
                </ul>
                <div className='hamburger'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        )
    }
}