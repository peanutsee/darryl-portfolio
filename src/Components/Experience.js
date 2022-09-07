import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import colorSharp2 from "../Assets/Img/color-sharp2.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "../Assets/Img/school-solid.svg";
import { ReactComponent as WorkIcon } from "../Assets/Img/briefcase-solid.svg";

const experiences = [
  // {
  //   title: "NTT",
  //   subtitle: "Human Resource Administrative Assistant",
  //   start: "Mar 2020",
  //   end: "Jul 2022",
  //   icon: <WorkIcon />,

  //   description:
  //     "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  // },
  {
    title: "Nanyang Technological University",
    subtitle: "BSc. Data Science and AI",
    start: "Aug 2020",
    end: "Present",
    icon: <SchoolIcon />,
    description:
      "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  },
  // {
  //   title: "NCS Pte Ltd",
  //   subtitle: "Technical Refresher Engineer",
  //   start: "Dec 2020",
  //   end: "Jan 2021",
  //   icon: <WorkIcon />,

  //   description:
  //     "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  // },
  {
    title: "IvyPrep Pte Ltd",
    subtitle: "Data Analyst Intern",
    start: "Jun 2021",
    end: "Aug 2021",
    icon: <WorkIcon />,

    description:
      "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  },
  // {
  //   title: "Resorts World Sentosa",
  //   subtitle: "Dolphin Trainer",
  //   start: "May 2021",
  //   end: "Nov 2021",
  //   icon: <WorkIcon />,

  //   description:
  //     "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  // },
  {
    title: "Locable (Local Identities Pte Ltd)",
    subtitle: "Software Developer Intern",
    start: "Jan 2022",
    end: "Apr 2022",
    icon: <WorkIcon />,

    description:
      "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  },
  // {
  //   title: "Astralis Analytica LLP",
  //   subtitle: "Fullstack Web Developer",
  //   start: "Mar 2021",
  //   end: "Jun 2022",
  //   icon: <WorkIcon />,

  //   description:
  //     "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  // },
  {
    title: "Kodecoon Academy",
    subtitle: "Coding/STEM Instructor",
    start: "Dec 2021",
    end: "Present",
    icon: <WorkIcon />,
    description:
      "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  },
  {
    title: "Singapore District Cooling Pte Ltd (SP Group)",
    subtitle: "Data Science Intern",
    start: "Jul 2022",
    end: "Present",
    icon: <WorkIcon />,

    description:
      "Quis laborum culpa adipisicing mollit. Quis mollit reprehenderit reprehenderit Lorem nostrud ut est incididunt ex ea tempor officia tempor Lorem. Minim duis quis minim ad ipsum excepteur nostrud proident. Ex ex tempor enim do Lorem duis voluptate pariatur Lorem et veniam. Adipisicing adipisicing occaecat anim velit labore laboris culpa consequat reprehenderit dolor consectetur.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <div className="experience-bx">
              <h2>Experience</h2>
              <p>
                "Information is not knowledge. The only source of knowledge is
                experience. You need experience to gain wisdom."
              </p>
              <p className="text-end">~ Albert Einstein</p>
            </div>
            <VerticalTimeline>
              {experiences.map((experience, idx) => (
                <VerticalTimelineElement
                  key={idx}
                  className="vertical-timeline-element--work"
                  // Big Box Styling
                  contentStyle={{
                    background:
                      "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                    color: "#fff",
                    borderRadius: "32px",
                  }}
                  // Arrow Styling
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(255, 255, 255)",
                  }}
                  date={`${experience.start} - ${experience.end}`}
                  // Icon Styling
                  iconStyle={{
                    background: "rgb(255, 255, 255)",
                    color: "#fff",
                  }}
                  icon={experience.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {experience.subtitle}
                  </h5>
                  <p className="w-100 text-start">{experience.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
            <p>Many more experiences to come...</p>
          </Col>
        </Row>
      </Container>
      {/* <Image fluid src={colorSharp2} /> */}
    </section>
  );
}

export default Experience;
