import React from "react";
import NavBarComponent from "../components/navBarComponent";
import AboutComponent from "../components/aboutComponent";
import TimelineComponent from "../components/timelineComponent";
import JeopardyComponent from "../components/jeopardyComponent";

class PersonalWebsiteContainer extends React.Component {

    render() {
        return (
            <div>
            <NavBarComponent/>
            <AboutComponent/>
            <TimelineComponent/>
            <JeopardyComponent/>
        </div>
        )
    }
}

export default PersonalWebsiteContainer