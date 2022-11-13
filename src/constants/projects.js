import SocialNetwork from "../assets/SocailNetwork.jpg";
import BugTracker from "../assets/BugTracker.jpg";
import Dopify from "../assets/Dopify.jpg";
export const PROJECTS = [
  {
    id: "1",
    title: "Bug Tracker",
    description:
      "Bug Tracker is a PROJECT MANAGEMENT tool where you can track the status of a projects including the bugs that occur during making the project along with the features such as seriousness of the Bug, the date at which the bug occurs, the person who has to solve the bug",
    image: {
      src: BugTracker,
      placeholderSrc:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==",
    },
    links: {
      site: "https://bug-tracker-cliet.herokuapp.com/",
      repo: "https://github.com/aditya-kumar-129/Bug-Tracker",
    },
    technologies: ["#Reactjs", "#CSS", "#Nodejs", "#Expressjs", "#Passportjs"],
  },
  {
    id: "2",
    title: "Social Network",
    description:
      "A WEB APPLICATION used for connecting to friends and broadcast post. It works mostly like the way LINKEDIN works.(IN PROGRESS)",
    image: {
      src: `${SocialNetwork}`,
      placeholderSrc:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==",
    },
    links: {
      site: "#",
      repo: "https://github.com/aditya-kumar-129/Social-Network-NEO4j",
    },
    technologies: [
      "#Reactjs",
      "#CSS",
      "#Nodejs",
      "#Expressjs",
      "#Passportjs",
      "#Neo4j",
    ],
  },
  {
    id: "3",
    title: "DOPIFY",
    description:
      "Its a Web APPLICATION used to DECREASE THE NUMBER OF DOPING CASES THAT OCCURS DURING ANY INTERNATIONAL GAMES and RO MAKE THE ATHLETIC AWARE ABOUT THE USE OF DRUGS AND ITS CONSEQUENCES",
    image: {
      src: Dopify,
      placeholderSrc:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==",
    },
    links: {
      site: "#",
      repo: "https://github.com/aditya-kumar-129/Mini-Project",
    },
    technologies: [
      "#Reactjs",
      "#CSS",
      "#Nodejs",
      "#Expressjs",
      "#Tesseract",
      "#Socket.io",
    ],
  },
];
