import React from "react";
import NavBarComponent from "../components/navBarComponent";
import AboutComponent from "../components/aboutComponent";
import TimelineComponent from "../components/timelineComponent";
import ProjectsComponent from "../components/projectsComponent";

class PersonalWebsiteContainer extends React.Component {

    render() {
        return (
            <div>
            <NavBarComponent/>
            <AboutComponent/>
            <TimelineComponent/>
            <ProjectsComponent/>
        </div>
        )
    }
}

export default PersonalWebsiteContainer