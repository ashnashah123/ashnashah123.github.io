import React from "react";
import ProjectCardComponent from "./projectCardComponent";

class ProjectsComponent extends React.Component {

    state = {
        projects: [
            {
                'title': 'eau2', 
                'date': 'Spring 2020',
                'shortDescription': 'A distributed key-value store created in CS 4500 (Software Development).',
                'language': 'C++',
                'takeaways': 'The course was aimed at exposing students to writing and maintaining large software systems. While initially frustrated with the scope of the project and being unable to completely finish, I came to value the amount of effort it takes to not only write good code, but to also clean that code up, to prioritize what needs to stay and what needs to go, and how to balance moving forward with features without leaving behind code that is difficult to expand upon.',
                'url': 'https://github.com/ashnashah123/eau2'
                
            },
            {
                'title': 'eventsnobs',
                'date': 'Spring 2020',
                'shortDescription': 'A travel website created as the final project for CS 4550 (Web Development)',
                'language': 'Java/JPA/Spring, SQL, React/HTML/CSS',
                'takeaways': 'I worked in a group to create the site and it helped me strengthen my skills in full stack web development! I worked more on the frontend but helped with backend design. The site may be helpful after the virus clears out to plan a trip!',
                'url': 'https://wbdv-sp20-eventsnobs.herokuapp.com/',
                'imageUrl': '../images/event_snobs_logo.png'
            },
            {
                'title': 'bikinginboston',
                'date': 'Spring 2019',
                'shortDescription': 'A data visualization project for INSH 2102 (Bostonography) looking at biking accidents in Boston with the aim of improving the biker experience in the city',
                'language': 'R, Leaflet JS',
                'takeaways': 'I frequently bike around Boston, so this project made me excited to explore where accidents occur and it made me excited to brainstorm solutions. I also gained experience with datavisualizations and found myself enjoying it a lot more than I initially thought I would. Once I got past the initial learning curve of understanding how data comes in and how it can be manipulated, I was eager to make more visualizations!',
                'url': 'https://bikinginboston.github.io/'
            },
            {
                'title': 'ratemycoop',
                'date': 'Fall 2018',
                'shortDescription': 'A start on a project where students can rate their coops for the aim of helping others pick their coops.',
                'language': 'EmberJS, Ruby on Rails',
                'takeaways': 'I started the project with a friend and we wanted to tinker around with our web development skills and start a project that would be useful to our fellow students and help alleviate problems we faced during our coop searches. I would like to redo the project with a new stack that I better understand.',
                'url': 'http://ratemycoop.herokuapp.com/companies'

            },
            {
                'title': 'flyaoun',
                'date': 'March 2018',
                'shortDescription': 'A hackathon project during Hack the Burgh in Edinburgh aimed at helping us the cheapest trip between multiple cities via the Skyscanner API.',
                'language': 'Angular4',
                'takeaways': 'While we did not finish the project and were a bit ambitious with our algorithm, we learned about better estimating how much work we could complete in a given amount of time. We enjoyed chatting with the Skyscanner mentors and ended up winning a prize for best use of the API! My desire to travel only grew stronger after this project :)',
                'url': 'https://github.com/ashnashah123/Fly-Aoun'
            }

        ]
    }

    render() {
        return (
            <div id="projects">
                <h1 style={{'textAlign': 'center',  color:'#24305e'}}>Projects</h1>
                <h6 style={{'textAlign': 'center',  color:'#24305e'}}>Click on the title of a project to view it!</h6>
                <div className="row">
                        {
                            this.state.projects.map(project =>
                                <div className="col-sm-4 py-5"  key={project.id}>
                                    <ProjectCardComponent
                                        project={project}/>
                                </div>
                            )
                        }
                    </div>
            </div>
        )
    }

}

export default ProjectsComponent
