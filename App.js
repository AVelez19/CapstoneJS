import logo from './logo.svg';
import './App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

function App() {
  return (
    <div className="App">
      <h1>React Vertical Timeline</h1>
      <div className="empty">
        <h2>My Journey</h2>
        <p>I went to college thinking I knew what to do. I didn't.</p>
        <p>The specific events that eventually lead me to Year Up are detailed below.</p>
        <p>Thanks to the program, I feel confident in my path in life. Like, 
          I was given another chance at success. I have solid plans after Year Up and cannot be more excited with my future.</p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Hunter College After HS</h3>
          <h4 className="vertical-timeline-element-subtitle">Majored in General Studies</h4>
          <p>
            Most of the classes were social sciences and some math & science classes. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Covid 2020</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Was an Essential Worker
          </h4>
          <p>
            Took on the responsibilites of 3 employees: Preparing Pastries, Mixing and Forming Bread, Baking Loaves (over 100 each night)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Worked in Coporate America</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Transportation Coordinator for Global Company
          </h4>
          <p>Organized logistics of shipments worth millions to be transported globally</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Went Back to Part-Time</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Wanted more work-life balance and less stress
          </h4>
          <p>Worked overnight while trying to figure out what to do going forward</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="End of 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Year Up Process
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Was told about Year Up and Coding as a Career</h4>
          <p>Applied for the Software Track and took free courses to learn some basics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Built First Computer Setup
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Wanted to be a little knowledgable about the field I was going into</h4>
          <p>Wanted to be as prepared as possible since I had only what I taught myself</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024-Present"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Finishing Learning & Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gained so much more knowledge than I first expected
          </h4>
          <p>Loved every step of the way, even when there were difficulties</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default App;
