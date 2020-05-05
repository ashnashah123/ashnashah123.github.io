import React from "react";
import NavBarComponent from "../components/navBarComponent";
import AboutComponent from "../components/aboutComponent";
import TimelineComponent from "../components/timelineComponent";

class PersonalWebsiteContainer extends React.Component {

    render() {
        return (
            <div>
            <NavBarComponent/>
            <AboutComponent/>
            <TimelineComponent/>
        </div>
        )
    }
}

export default PersonalWebsiteContainer