// ========== Tech Icons ========== //

// import html from "../../assets/images/html5.png";
import nodejs from "../assets/images/nodejs.png";
import semantic from "../assets/images/semantic-ui.png";
import redis from "../assets/images/Redis_Logo.svg";
import mongo from "../assets/images/mongodb-logo.png";
import pluarisDash from "../assets/images/pluaris-dashboard.png";

// ========== Portfolio Items ========== //
import portfolioDesktopImage from "../assets/images/portfolio_desktop.png";
import gameOfLifeFlower from "../assets/images/game-of-life.jpg";
import groupOrg1 from "../assets/images/group-org1.jpg";
import groupOrg2 from "../assets/images/group-org2.jpg";
import groupOrg3 from "../assets/images/group-org3.jpg";
import groupOrg4 from "../assets/images/group-org4.jpg";
import groupOrg5 from "../assets/images/group-org5.jpg";

const tech = {
  html: {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    attribution: `W3C, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons`,
  },
  python: {
    name: "Python",
    img: `https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg`,
    attribution: `www.python.org, GPL <http://www.gnu.org/licenses/gpl.html>, via Wikimedia Commons`,
  },
  node: {
    name: "Node.js",
    img: nodejs,
    attribution: ``,
    // img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    // attribution: `node.js authors, Public domain, via Wikimedia Commons`,
  },
  javascript: {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    attribution: `Chris Williams, Public domain, via Wikimedia Commons`,
  },
  ts: {
    name: "TypeScript",
    img: `https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg`,
    attribution: `™/®Microsoft, Public domain, via Wikimedia Commons`,
  },
  scss: {
    name: "SCSS",
    img: `https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg`,
    attribution: `http://sass-lang.com/, Public domain, via Wikimedia Commons`,
  },
  css: {
    name: "CSS",
    img: `https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg`,
    attribution: `daPhyre (File:CSS3 and HTML5 logos and wordmarks.svg)Elfi (File:CSS3 logo and wordmark.svg)ExE Boss, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons`,
  },
  graphql: {
    name: "GraphQL",
    img: `https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg`,
    attribution: `Facebook, BSD <http://opensource.org/licenses/bsd-license.php>, via Wikimedia Commons`,
  },
  go: {
    name: "Go",
    img: `https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg`,
    attribution: `The Go Authors, Public domain, via Wikimedia Commons`,
  },
  redis: {
    name: "Redis",
    img: redis,
    attribution: `Carlos Prioglio, Public domain, via Wikimedia Commons.  I removed the word redis and adjusted the sizing accordingly`,
  },
  mongodb: {
    name: "MongoDB",
    img: mongo,
    attribution: ``,
  },
  linux: {
    name: "Linux",
    img: `https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg`,
    attribution: `lewing@isc.tamu.edu Larry Ewing and The GIMP, CC0, via Wikimedia Commons`,
  },
  semantic: {
    name: "Semantic UI",
    img: semantic,
    attribution: ``,
  },
};

export const portfolioData = [
  {
    name: `Pluaris`,
    shortDesc: `Pluaris enables its users to quickly analyze boatloads of unstructured data, extract actionable insights from all the critical touch points happening within their ecosystem.`,
    techUsed: [
      tech.html,
      tech.javascript,
      tech.ts,
      tech.python,
      tech.go,
      tech.scss,
      tech.node,
      tech.mongodb,
      tech.graphql,
      tech.redis,
      tech.linux,
    ],
    description: `Pluaris specializes in reading and comprehending data, analyzing cause and effect, identifying benchmarks and measuring performance against them, tracing and linking intelligence by topics, extracting critical intelligence, alerting, answering questions on-the-fly, and synthesizing outputs. This saves each employee an average of 2 hours per day. It accelerates the pace of business resulting in revenue growth and increased profitability.`,
    Backend: `We are transitioning from a Monolith to a more Microservice approach. Some services are now ran with Docker. With a goal of having our Microservices containerized and running in Kubernetes.
      
  We use NodeJS, Fastify, TypeScript, GraphQL, MongoDB, Redis.
    
  I’m a big fan of automation and have tried to streamline lots of different tasks and workflows. GoLang Go has been a fantastic addition and a joy to work with! Not that NodeJS is a slouch in the speed department but I have a feeling more microservices will be written in Go in the future.
  
  For the DataScience side of the coin we use Python along with a Flask API. I won’t waste time name droping all of the DataScience tools and libraries we utilize as this is not my area of experteise. However; I have pitched in on the Flask API and helped on and off with things such as (architecture, preformance, deployment, debugging, scripting).`,
    Frontend: `On the frontend we are using React, along with TypeScript to handle the data and deliver rich user tailored expierences for our clients.  Your data Internal Memory, available to recall and curate a more personalized view into the inner workings of either your business or your brain in real-time.`,
    Infastructure: `Our current cloud provider is Digital Ocean. We have some automation scripts in place to pull in the new code, run some tests, re-build, and deploy. 
    
  Our NodeJS servers are spread across multiple droplets and we are load-balancing and using reverse proxies. 
  
  A key piece of kit in this set up has been Caddy and man is it awesome! Much cleaner and easier to work with than an Nginx config. It handles auto SSL renewal with minimal fuss. And automating different servers to run different Caddyfile(s) has been a fantastic experience. 
  
  As we contine moving everything for production into Docker and finishing our move to K8s we will have the freedom to take our platform and deploy it on AWS, Google Cloud, Azure, or anywhere we need to go!`,
    thumbnail: { src: pluarisDash, alt: `pluaris dashboard` },
    images: [{ src: pluarisDash, caption: `pluaris dashboard` }],
    Position: `Full Stack`,
    Organization: `Nowigence Inc.`,
    Year: `2019 - current`,
    link: `https://app.nowigence.ai/`,
  },
  {
    name: `Lambda Group Organizer`,
    shortDesc: `This was a hackathon winning app to help lambda school students sign up for projects.`,
    techUsed: [tech.html, tech.javascript, tech.css],
    description: `Lambda School put out a 2.5 day hackathon challenge for teams of up to 5 people.  I worked on this with two other engineers, Jonathan Palacio and Shawn Antonucci.  The problem we decided to solve was the difficulty around signing up for a group project or hackathon.  Previously there were issues with students accidentally erasing someone else's name from a group project since everything was done in a google sheet document.<br /><br />
    
  We created Lambda group organizer so a spreadsheet of projects (csv) could be loaded into the system each month for the group signups and the system would take care of pulling out group names, descriptions, project proposals, number of students per role, etc.  The system would create a new named project session for students to sign up for by project role. Students would have a specific period in which they could sign up and then it would close.  The administrator could then download the updated csv of all the data with student's names and roles associated with each project.<br /><br />
  
  The system itself has three roles that are allowed, students, teachers assistants and admin.  The students could only sign up for a project.  The teacher's assistants could help with moving students from one group to another or adjusting group requirements as needed.  The admin could of course do anything.<br /><br />
  
  After we finished the hackathon we were asked to actually help them put the project into action for the school because they intended to use it for student group signups!  Everyone from the group got hired to companies while working on getting it production ready, but we trained our replacements before we moved on.  I hope lambda students are getting to enjoy working on it, it was a blast to make!<br /><br />
  
  Side note: Jonathan Palacio and Shawn Antonucci were amazing to work with. I couldn't recommend them as team members more strongly.  In fact Jon and I work together currently at Nowigence Inc!`,
    Backend: `This one is super simple.  We it on netlify and setup a simple CI/CD with github main branch.  The database was using Google Firebase for speed and ease of setup when it came to the hackathon, however it has since been ported to MongoDB I believe.`,
    Frontend: `React, Javascript, CSS and Semantic UI.  We needed the speed of a UI Library to quickly put something together that looked decent but was still somewhat modifiable.  If I were going to work on this for years I would strip Semantic UI from the project to be honest.  It can make for some messy css when you have to overide styles in a lot of places.`,
    Infastructure: `Not a whole lot to say here, pretty much everything was a managed service since we were going for speed.  That wouldn't be the case if we were going to hang on to this for a long time for cost reasons.`,
    thumbnail: {
      src: groupOrg1,
      alt: `Lambda Group Organizer`,
    },
    images: [
      {
        src: groupOrg1,
        caption: ``,
      },
      {
        src: groupOrg2,
        caption: ``,
      },
      {
        src: groupOrg3,
        caption: ``,
      },
      {
        src: groupOrg4,
        caption: ``,
      },
      {
        src: groupOrg5,
        caption: ``,
      },
    ],
    Position: ``,
    Organization: `Me`,
    Year: `July 15 2019 - July 19 2019`,
    link: `https://lambda-group-organizer.netlify.app`,
  },
  {
    name: `Portfolio Site`,
    shortDesc: `The site you're looking at right now!`,
    techUsed: [tech.html, tech.javascript, tech.scss],
    description: `One of the most fun projects I've had the chance to work on with such potential for growth and change!  I'm really excited to see where this goes.  I plan to keep adding all sorts of fun easter eggs and fun little jokes.  This sit will never be truely finished, but I hope you enjoy what I've created!`,
    Backend: `This one is super simple.  I've hosted it on netlify and setup a simple CI/CD with github main branch.  In the future when I have a little more spare time, I'll put this up on Digital Ocean and use Caddy to serve it up.`,
    Frontend: `pure react and my blood sweat and cheers.`,
    Infastructure: ``,
    thumbnail: { src: portfolioDesktopImage, alt: `pluaris dashboard` },
    images: [
      { src: `1`, caption: `` },
      { src: `2`, caption: `` },
      { src: `3`, caption: `` },
    ],
    Position: ``,
    Organization: `Me`,
    Year: `Aug 2020 - current`,
    link: `https://jon-bernal.netlify.app`,
  },
  {
    name: `Conway's Game Of Life`,
    shortDesc: `This was a challenge to see if I could implement Conway's Game of Life using react.  A challenge for learning more about how video games work and having fun with graph data structures!`,
    techUsed: [tech.html, tech.javascript, tech.css],
    description: `Please keep in mind this was not about making a pretty application.  This was a 5 day test to see if I could make [conway's game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) happen with react.  The game itself is challenging for a new software engineer because you have to handle graph data structures and control frame rates to make sure the machine doesn't lock up. This was an extremely enjoyable game to write and I'll probably revisit this some day in the future to see if I can increase the performance and make it look nicer.`,
    Backend: `This one is super simple.  I've hosted it on netlify and setup a simple CI/CD with github main branch.  In the future when I have a little more spare time, I'll put this up on Digital Ocean and use Caddy to serve it up.`,
    Frontend: `React, Javascript and CSS.  Nothing crazy here, but I did have a little extra fun with the menu system since I finished the project a day early.`,
    Infastructure: `Nothing to really say here, sorry.  Since it's hosted on Netlify there weren't really many decisions to make.`,
    thumbnail: {
      src: gameOfLifeFlower,
      alt: `Conway's game of life with the flower formation`,
    },
    images: [
      {
        src: gameOfLifeFlower,
        caption: `Conway's game of life with the flower formation`,
      },
    ],
    Position: ``,
    Organization: `Me`,
    Year: `July 15 2019 - July 19 2019`,
    link: `https://conways-life-game.netlify.app/`,
  },
];
