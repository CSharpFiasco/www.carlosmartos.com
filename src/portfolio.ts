
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import { ReactElement } from "react";
import emoji from "react-easy-emoji";
import svg from "./assets/images/googleAssistant.svg";
import resume from "./assets/resume/Carlos_Martos_Resume_20230111.pdf";
import { AchievementCardSection } from "./models/AchievementCardSection";
import { EducationInfo } from "./models/EducationInfo";
import { SoftwareSkill } from "./models/SoftwareSkill";
import { WorkExperienceSection } from "./models/WorkExperience";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Carlos Martos",
  title: "Hi all, I'm Carlos",
  subTitle: "A passionate Software Developer with experience building web applications with .NET, SQL Server and Angular",
  resumeLink: resume
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/csharpfiasco",
  linkedin: "https://www.linkedin.com/in/carlos-k-martos",
  gmail: "carloskmartos@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/5303894/csharpfiasco"
};

// Your Skills Section

const skillsSection: {
  title: string,
  subTitle: string,
  skills: ReactElement[],
  softwareSkills: SoftwareSkill[]
} = {
  title: "What I do",
  subTitle: "DEDICATED FULL STACK DEVELOPER WITH COMPREHENSIVE KNOWLEDGE OF THE WEB DEVELOPMENT PROCESS",

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  skills: [
    emoji("⚡ Develop single page applications with Angular and ReactJS"),
    emoji("⚡ ReactJS deployment with Azure Static Web App"),
    emoji("⚡ Relational database design"),
    emoji("⚡ Refactor of legacy web apps to modern .NET API solutions with Angular front-end"),
    emoji("⚡ Unit testing with xUnit and Jasmine"),
    emoji("⚡ Azure DevOps and Github Actions builds and deployments to cloud and on-premise systems"),
  ],

  softwareSkills: [
    {
      skillName: ".net",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "mssql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Education
const educationInfo: EducationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Tulsa",
      logo: require("./assets/images/UniversityOfTulsa.png"),
      subHeader: "Bachelor of Science Computer Science",
      duration: "September 2013 - May 2017",
      desc: "Proud graduate of the University of Tulsa",
      descBullets: [
        "Data Structures",
        "Database Systems",
        "Comparative Programming Languages",
        "Operating Systems",
        "Linear Algebra and Matrix Theory",
      ]
    }
  ]
};

// Your top 3 work experiences

const workExperiences: WorkExperienceSection = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Spherexx",
      companylogo: require("./assets/images/SpherexxLogo.png"),
      date: "September 2017 – August 2020",
      desc: "Classic ASP/.NET Framework/MSSQL/jQuery",
      descBullets: [
        "Custom site builds for property management companies",
        "Content management systems in Classic ASP and ASP.NET",
        "Dashboards in .NET Framework with Vue frontend",
        "Maintained multi-company beer distribution systems",
        "Developer and Project Lead",
        "Moved projects to version control (TFS)",
        "Payment gateway with Square's Payment API"
      ]
    },
    {
      role: "Technical Lead",
      company: "Techsico",
      companylogo: require("./assets/images/TechsicoLogoWhite.png"),
      date: "August 2020 – March 2021",
      desc: ".NET Core/MSSQL/ReactJS/Tailwind CSS",
      descBullets: [
        "Head of Web Development",
        "Maintained legacy internal management VB.NET system",
        "Train junior developers in ReactJS and .NET Core",
        "Maintained policies for AWS IAM",
        "Managed public DNS names to load balancers via Route53",
        "Maintained .NET Core API",
        "Managed relational database including architecture and security",
        "Product owner for Techsico's code infrastructure",
        "DocuSign integration"
      ]
    },
    {
      role: "Software Developer II",
      company: "QuikTrip",
      companylogo: require("./assets/images/QuikTripLogo.webp"),
      date: "March 2021 – Current",
      desc: ".NET 6/MSSQL/Angular",
      descBullets: [
        "API development",
        "Database design",
        "Front-end development",
        "Entity Framework",
        "OData",
        "Swagger (Swashbuckle)",
        "Dependency Injection",
        "Unit Tests (xUnit)",
        "ETL (SSIS)",
        "Azure DevOps",
      ]
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection: AchievementCardSection = {

  title: "Achievements And Publications",
  subtitle: null,

  achievementsCards: [
    {
      title: "Reuse of variants in online repositories: Foraging for the fittest",
      subtitle: "Publication: 2016 IEEE Symposium on Visual Languages and Human-Centric Computing",
      image: svg,
      footerLink: [{ name: "IEEE Publication", url: "https://ieeexplore.ieee.org/document/7739674" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: []
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: null,
  email_address: null
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails
};
