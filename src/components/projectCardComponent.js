import React from "react";
import {Link} from "react-router-dom";


const ProjectCardComponent = ({project}) => 
<div class="container">
    <div class="card" style={{'height': '35rem'}}>
        <div class="card-body">
            <a href={project.url} target="_blank" style={{color:'#24305e'}}>
            <h2 class="card-title">{project.title}</h2>
            </a>
            <p class="card-text">Date: {project.date}</p>
            <p class="card-text">Short Description: {project.shortDescription}</p>
            <p class="card-text">Language(s): {project.language}</p>
            <p class="card-text">Takeaways: {project.takeaways}</p>
        </div>
    </div>
</div>

export default ProjectCardComponent