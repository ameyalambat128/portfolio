import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const projects = [
  {
    title: "Median",
    description:
      "Created a decentralized web chat application using Nextjs, Moralis and TailwindCSS. Users can connect to this using their Ethereum wallet.",
    image: require("../components/assets/images/median.png").default,
    tags: ["Nextjs", "Tailwind CSS", "Moralis"],
    source: "https://github.com/ameyalambat128/median",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "Notetaking App",
    description:
      "Created a Note-Taking App using React for the frontend and Django as the backend. The notes that are typed in are immediately saved by the program. The app also shows the date the note was made.",
    image: require("../components/assets/images/Notetaking-App.png").default,
    tags: ["React", "Django"],
    source: "https://github.com/ameyalambat128/Notetaking-App",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "Air Quality Index API",
    description:
      "Created a serverless REST API using AWS Lambda to display an air quality index of the supplied city. Air Quality Index data is formatted, stored, and accessed from AWS DynamoDB.",
    image: require("../components/assets/images/AWS-AQI-API.png").default,
    tags: ["AWS Lambda", "AWS DynamoDB"],
    source:
      "https://0vr7lhfhw7.execute-api.us-west-1.amazonaws.com/dev/air/Maricopa/Arizona",
    visit: "https://google.com",
    id: 2,
  },
];
export const projects2 = [
  {
    title: "Uber-Clone",
    description:
      "Created an Uber clone using React Native, Redux, Tailwind CSS, and React Navigation for the routing and navigation between pages. Used different APIs like Google Autocomplete and Directions API for the map.",
    image: require("../components/assets/images/uber-clone.png").default,
    tags: ["React Native", "Redux", "TailwindCSS", "Navigation"],
    source: "https://github.com/ameyalambat128/uber-clone",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Dr. App",
    description:
      "Working on a Progressive Web App (PWA) developed for the Doctors to manage their OPD data using Angular 11 and Indexed DB for storing offline data.",
    image: require("../components/assets/images/Dr.App.png").default,
    tags: ["Angular", "IndexedDB"],
    source: "https://gitlab.com/code_chefs/dr-app",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Netflix-Clone",
    description:
      "Created a Netflix clone using React and Redux using Axios to fetch information from the API of TMBD.",
    image: require("../components/assets/images/netflix-clone.png").default,
    tags: ["React", "TailwindCSS", "Redux", "Axios"],
    source: "https://github.com/ameyalambat128/netfilx-clone",
    visit: "https://google.com",
    id: 3,
  },
];
export const projects3 = [
  {
    title: "Password Generator",
    description:
      "Created a password generator with HTML, CSS, and vanilla JavaScript (ES6), and ported it to React Native to experience it on a mobile device.",
    image: require("../components/assets/images/Password-Generator.png")
      .default,
    tags: ["HTML", "CSS", "JavaScript", "React Native"],
    source: "https://github.com/ameyalambat128/Password-Generator",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Speed Climbing Timer",
    description:
      "Co-created a speed climbing timer with my father which is successfully being used in my training center. Raspberry Pi is used for hosting Node-RED and MQTT. ESP8266 and flex sensors are used for wireless communication.",
    image: require("../components/assets/images/SpeedClimbing-Timer.png")
      .default,
    tags: ["Raspberry PI", "Node-RED", "MQTT", "ESP8266"],
    source: "",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Todo-List",
    description:
      "Created a to-do list app using React Native and Expo for a to-do list app that allows one to add and complete tasks to keep up with their schedule.",
    image: require("../components/assets/images/Todo-List.png").default,
    tags: ["React Native", "Expo"],
    source: "https://github.com/ameyalambat128/Todo-List",
    visit: "https://google.com",
    id: 0,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

export const ContactInfo = [
  {
    icon: <AiFillGithub />,
    name: "GitHub",
    link: "https://github.com/ameyalambat128",
    id: 0,
  },
  {
    icon: <AiFillLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ameyalambat/",
    id: 1,
  },
  {
    icon: <AiFillTwitterSquare />,
    name: "Twitter",
    link: "https://twitter.com/LambatAmeya",
    id: 2,
  },
  {
    icon: <AiFillInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/ameyalambat128/",
    id: 3,
  },
];
