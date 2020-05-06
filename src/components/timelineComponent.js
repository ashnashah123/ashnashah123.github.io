import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaceDoodleComponent, ShinyTeethAndMeComponent, ChefComponent } from './doodleComponents';


const TimelineComponent = () => 
 <div id="experiences">
    <VerticalTimeline>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="Aug 2020"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        icon={<FaceDoodleComponent/>}
    >
        <h3 className="vertical-timeline-element-title">Software Engineer at Drift.</h3>
        <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>        
        <p>
            I am going to start my first full time job at Drift!! Super excited for the virus to go away and to get started :^)
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="June 2019 - Dec. 2019"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        icon={<ShinyTeethAndMeComponent/>}
    >
        <h3 className="vertical-timeline-element-title">Software Engineer Co-op at Intuit, Inc.</h3>
        <h5 className="vertical-timeline-element-subtitle">San Diego, CA</h5>
        <p>
            <ul>
                <li>Discussed business requirements and developed an engineering plan to implement a service migration.</li>
                <li>Migrated a service through standing up AWS infrastructure, writing a configuration service in Javascript
                    as well as using Java to modify APIs.</li>
                <li>Used various AWS services and Python to write a new service that syncs data between two platforms via
                    RESTful API calls.</li>
            </ul>
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="June 2018 - Dec. 2018"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        icon={<ChefComponent/>}
    >
        <h3 className="vertical-timeline-element-title">Software Engineer Co-op at FluidScreen, Inc.</h3>
        <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
        <p>
            <ul>
                <li>Implemented an Agile workflow to the software department. Scrum Master for the team and helped
                    manage the JIRA setup.</li>
                <li>Utilized OpenCV to write vision processing scripts in Python for image analysis from images uploaded
                    by the research and development laboratory team.</li>
            </ul>
            This coop was an..interesting experience. I was at a very small biotech startup where there was only one other software engineer,
            who had not even had as much CS experience as I did (keep in mind I had only completed one other coop and taken a few classes..). 
            It was a struggle teaching him how to work in a team, as well as navigating the disrespectful leadership at the company. I think it was
            one of the least ideal experiences I've had, yet one of the best ones in terms of learning to work with difficult people and keeping my cool. 
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="Jan. 2018 - May 2018"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        // icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Study #Abroad!</h3>
        <h4 className="vertical-timeline-element-subtitle">Edinburgh, UK</h4>
        <p>
        Edinburgh is the stunning capital of Scotland and has history dating back many centuries. I studied Natural Language Processing, Artificial Intelligence,
        Theory of Computation, and Celtic studies while there, and of course traveled a ton!
        The city is gorgeous and you can find:
        <ul>
            <li>Scots running around Cowgate after a night out</li>
            <li>Bagpipers playing at the top of Arthur's Peak (there is no sword in the stone)</li>
            <li>Locals dancing to celidh music</li>
            <li>People sipping on scotch throughout old town, new town, the highlands, the lowlands, you name it.</li>
        </ul>
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="May 2017 - May 2020"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        // icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">HackBeanpot Core Member + Vice President</h3>
        <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
        <p>
            HackBeanpot was the best organization I joined throughout college. I could talk for hours about it (see my medium articles).
            I attended spring 2017 as a sophomore fumbling her way through Computer Science, and was inspired by the team that put together 
            such a great event, and was opened to the world of CS. I wanted to be a part of bringing such a great experience to others and thus decided
            to join the core team. I eventually stepped up to the role of VP, where I enacted organizational changes and grew and helped others grow
            as leaders. The org shaped many of my professional and personal values that I have today.
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="June 2017 - Dec. 2017"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        // icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Software Engineer Co-op at Blueport Commerce</h3>
        <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
        <p>
            <ul>
                <li>Developed full stack to create ecommerce platforms for various clients using ASP.NET..</li>
                <li>Upgraded HTML pages to be ADA-compliant and created new ajax-enabled features for the platform.</li>
                <li>Led and implemented a project to add a new payment type to the checkout flow using Javascript and C#.</li>
            </ul>
            
            This was my first coop and working experience as a software engineer! This coop reaffirmed my decision to stick with CS as I
            learned that I was able to learn while on the job and was truly interested in the industry :)  
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24305e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #24305e' }}
        date="Sept 2015 - May 2020"
        iconStyle={{ background: '#f76767', color: '#fff' }}
        // icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">Northeastern University</h3>
        <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
        <p>
            I debated going on a pre-med track for a while, and took Computer Science courses as well, and eventually dropped the pre-med and never looked back. 
            I'm so glad I stuck out Computer Science, and had many great work experiences, met super cool people, and had some great adventures!  
        </p>
    </VerticalTimelineElement>
    </VerticalTimeline>
</div>

export default TimelineComponent