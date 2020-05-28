import React from "react";
import {Link} from "react-router-dom";


const ProjectCardComponent = ({project}) => 
<div class="container">
    <div class="card border-dark" style={{'height': '35rem', backgroundColor:'fff'}}>
            <a href={project.url} target="_blank" style={{color:'#24305e'}}>
                <h2 class="card-header">{project.title}</h2>
            </a>
            <div class="card-body">

            <p class="card-text"><strong>Date:</strong> {project.date}</p>
            <p class="card-text"><strong>Short Description:</strong> {project.shortDescription}</p>
            <p class="card-text"><strong>Language(s):</strong> {project.language}</p>
            <p class="card-text"><strong>Takeaways:</strong> {project.takeaways}</p>
            {
                project.imageUrl && <img className="w-10 rounded" src={require("../images/event_snobs_logo.png")} style={{'verticalAlign': 'center'}}/>
                && <img className="w-10 rounded" src={require("../images/event_snobs_logo.png")} style={{'verticalAlign': 'center'}}/>
                && <img className="w-10 rounded" src={require("../images/event_snobs_logo.png")} style={{'verticalAlign': 'center'}}/>
            }
        </div>
    </div>
</div>

export default ProjectCardComponent