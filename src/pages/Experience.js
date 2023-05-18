import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <VerticalTimeline
          lineColor="#3e497a"
          animate={true}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2013-2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">University of Santo Tomas</h3>
            <h4 className="vertical-timeline-element-subtitle">Manila, Philippines</h4>
            <p>Bachelor's Degree - Electronics Engineering</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2019-present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SatelliteAltIcon />}
          >
            <h3 className="vertical-timeline-element-title">ABS Global Ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Subic Bay, Philippines</h4>
            <p>Capacity Management</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2022-2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Uplift Code Camp - Full Stack Bootcamp (MERN)</h3>
            <h4 className="vertical-timeline-element-subtitle">Philippines</h4>
            <p>Student</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
