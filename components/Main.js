import React from 'react';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            main: true,
            myStory: false,
            projects: false,
            work: false,
            education: false
        }
    }

    render(){
        return (
                <div>
                    <div>
                        <h1>Jordan Oetting</h1>
                        <h2>Software Engineer with Soft Skills to Match</h2>
                    </div>
                    <div>
                        <button>My Story</button>
                        <button>Projects</button>
                        <button>Work Experience</button>
                        <button>Education</button>
                    </div>
                </div>
            
        )
    }
}