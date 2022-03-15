import React from 'react';
import MyStory from './MyStory';

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

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( prevState => ({
            myStory: !prevState.myStory
        }))
    }

    render(){

        return (
                <div>
                    <div>
                        <h1>Jordan Oetting</h1>
                        <h2>Software Engineer with Soft Skills to Match</h2>
                    </div>
                    <div>
                        <button onClick={this.handleClick}>My Story</button>
                        <button>Projects</button>
                        <button>Work Experience</button>
                        <button>Education</button>
                    </div>
                    <div>
                        {this.state.myStory ? <MyStory/> : null }
                    </div>
                </div>
            
        )
    }
}