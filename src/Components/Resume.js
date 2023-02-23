import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title={"Designer and Developer"}
            subTitle={"Fiverr (Freelance)"}
            text={
              "Skills: Web Applications · Express.js · MySQL · SQL · Firebase · User Interface Design · Node.js · Git · React Hooks · Full-Stack Development · MaterialUI · TypeScript · Bootstrap · MERN Stack · Tailwind CSS · Next.js · Canva · Figma · Communication "
            }
          />
          <ResumeItem
            year={"Jul - Sep 2022"}
            title={"React Native Developer"}
            subTitle={"CrustPlay"}
            text={
              "- implemented the complete UI(android) which increased the downloads by 5% - built the website which increased the click ratio by 7%. Skills:· Web Applications · Android Studio · Android Development · React Native · Tailwind CSS · React.js · Communication"
            }
          />
          <ResumeItem
            year={"2021 - 2022"}
            title={"Web Master"}
            subTitle={"IEEE CS Chapter S. B. Jain Student Branch"}
            text={
              "- implemented the complete UI with Wordpress and followed modern UI-UX designs Skills:· Web Applications · Web Development · Visual Studio Code · Canva · Wordpress · HTML · CSS · Bootstrap · Javascript · User Interface Design · Communication"
            }
          />
          <ResumeItem
            year={"Jul - Oct 2021"}
            title={"Full Stack Developer"}
            subTitle={"DevTown"}
            text={
              "- built Rest APIs and customized API requests - worked with git and GitHub workflows #Skills:· Express.js · Firebase · MongoDB · Node.js · Git · React Hooks · Full-Stack Development · Redux · Bootstrap · API Development · MERN Stack · Tailwind CSS · Communication"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2019 - 2023"}
            title={"Computer Science Degree"}
            subTitle={"Nagpur University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2017 - 2019"}
            title={"Highschool Qualification"}
            subTitle={"Shivaji Science College"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2017"}
            title={"Primary School Education"}
            subTitle={"Gajanan Vidyalaya"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
