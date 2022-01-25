
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import resume from "./assets/resume/Carlos_Martos_Resume_20220124.pdf"

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
  gitlab: null,
  facebook: null,
  medium: null,
  stackoverflow: "https://stackoverflow.com/users/5303894/csharpfiasco"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED FULL STACK DEVELOPER WITH COMPREHENSIVE KNOWLEDGE OF THE WEB DEVELOPMENT PROCESS",
  skills: [
    emoji("⚡ Develop single page applications with ReactJS and Tailwind CSS"),
    emoji("⚡ ReactJS deployment with AWS Amplify"),
    emoji("⚡ Relational database design"),
    emoji("⚡ Refactor of legacy web apps to .NET Core API solutions with ReactJS front-end"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mssql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: ".net",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Spherexx",
      companylogo: require("./assets/images/SpherexxLogo.png"),
      date: "September 2017 – August 2020",
      desc: "Classic ASP/.NET Framework/TSQL/Vue.js/jQuery",
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
      desc: ".NET Core/ReactJS/Tailwind CSS",
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
      date: "March 2020 – Current",
      desc: ".NET Core/AngularJS",
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "csharpfiasco", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: false // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements And Publications",
  subtitle: null,

  achivementsCards: [
    {
      title: "Reuse of variants in online repositories: Foraging for the fittest",
      subtitle: "Publication: 2016 IEEE Symposium on Visual Languages and Human-Centric Computing",
      image: require("./assets/images/googleAssistantLogo.webp"),
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

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: []
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: []
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
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
