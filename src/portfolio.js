/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanjana B S",
  title: "Hi all, I'm Sanjana",
  subTitle: emoji(
    "Computer Science undergraduate specializing in AI & ML with strong frontend development and UI/UX skills. Experienced in building responsive web interfaces, integrating backend APIs, and applying machine learning models in real-world applications."
  ),
  resumeLink: "/Sanjana_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  gmail: "satannavarsanjana@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI & ML ENGINEER WITH A PASSION FOR FRONTEND DESIGN",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of machine learning models and backend APIs"),
    emoji("⚡ Building responsive and accessible web applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dayananda Sagar University",

      // Correction to self: require() is for src assets. For public assets, use string path "/filename.png".
      // The previous attempt used strings but I am seeing the file content has require().
      logo: "/College_Logo.png",
      subHeader: "B.Tech in Computer Science and Engineering (AI & ML)",
      duration: "Expected May 2027",
      desc: "GPA: 8.54 / 10",
      descBullets: [
        "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems",
        "Operating Systems, Machine Learning, Artificial Intelligence, Statistics & Applications"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: "/HealthPredict.jpg",
      projectName: "AI-Powered Preventive Healthcare Platform",
      projectDesc:
        "Built a preventive healthcare platform enabling ML-based disease risk assessment. Developed responsive patient dashboards with authentication using React and integrated FastAPI-based ML services.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://github.com/"
        }
      ]
    },
    {
      image: "/Infinityai.png",
      projectName: "InfinityAI — Frontend Lead",
      projectDesc:
        "Led frontend development for visualizing AI agent workflows. Designed interactive dashboards focusing on UX clarity and component architecture.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://flow-master-ej915hcbz-aspect022s-projects.vercel.app/"
        }
      ]
    },
    {
      image: "/ThreadMill.png",
      projectName: "ThreadMill",
      projectDesc:
        "Designed a visually rich, interactive frontend for a modern social media platform. Implemented advanced UI animations and 3D interactions using Three.js.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://thread-mill.vercel.app/"
        }
      ]
    },
    {
      image: "/Property_List.png",
      projectName: "Property Listing Platform (MERN)",
      projectDesc:
        "Developing a MERN-based property listing and reservation platform with authentication, search, filtering, and booking workflows.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://github.com/"
        }
      ]
    },
    {
      image: "/Personalized_Treatment.png",
      projectName: "Personalized Treatment Recommendation System",
      projectDesc:
        "Built ML pipelines to predict chemotherapy response using multi-cohort genomic data. Trained ensemble models (XGBoost, RF, SVM) with SHAP-based explainability.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://github.com/"
        }
      ]
    },
    {
      image: "/Cross-Lingual.png",
      projectName: "Cross-Lingual Language Processing",
      projectDesc:
        "Researched multilingual information retrieval using retrieval-augmented generation (RAG). Improved semantic alignment for low-resource language understanding.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Demo",
          url: "https://github.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8073317140",
  email_address: "satannavarsanjana@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
