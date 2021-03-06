import React from 'react';
import MyStory from './MyStory';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Navbar from './Navbar';

export default class Main extends React.Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
    }

    render(){

        return (
                <div>
                    <header>
                        <Navbar />
                    </header>
                    <div className='title'>
                        <div id='titleText'>
                            <h1>Jordan Oetting</h1>
                            <h2>Software Engineer with Soft Skills to Match</h2>
                        </div>
                        <div id='titlePic'>
                            <img id='pic' src='./ProfilePic.jpg' />
                        </div>
                    </div>
                    <MyStory />
                    <Projects />
                    <Education />
                    <Experience />
                </div>
            
        )
    }
}