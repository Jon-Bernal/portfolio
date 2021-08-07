// import html from "../../images/html5.png";
import nodejs from "../../images/nodejs.png";
import semantic from "../../images/semantic-ui.png";
import redis from "../../images/Redis_Logo.svg";
import mongo from "../../images/mongodb-logo.png";
import pluarisDash from "../../images/pluaris-dashboard.png";

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
    name: "Pluaris",
    shortDesc:
      "Pluaris enables its users to quickly analyze boatloads of unstructured data, extract actionable insights from all the critical touch points happening within their ecosystem.",
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
    description:
      "Pluaris specializes in reading and comprehending data, analyzing cause and effect, identifying benchmarks and measuring performance against them, tracing and linking intelligence by topics, extracting critical intelligence, alerting, answering questions on-the-fly, and synthesizing outputs. This saves each employee an average of 2 hours per day. It accelerates the pace of business resulting in revenue growth and increased profitability.",
    backendDesc:
      "We are transitioning from a Monolith to a more Microservice approach. Some services are now ran with Docker. With a goal of having our Microservices containerized and running in Kubernetes./n/n We use NodeJS, ExpressJS Fastify, TypeScript, GraphQL, MongoDB, Redis./n I’m a big fan of automation and have tried to streamline lots of different tasks and workflows. GoLang Go has been a fantastic addition and a joy to work with! Not that NodeJS is a slouch in the speed department but I have a feeling more microservices will be written in Go in the future./n/n For the DataScience side of the coin we use Python along with a Flask API. I won’t waste time name droping all of the DataScience tools and libraries we utilize as this is not my area of experteise. However; I have pitched in on the Flask API and helped on and off with things such as (architecture, preformance, deployment, debugging, scripting).",
    frontendDesc:
      "On the frontend we are using React, along with TypeScript to handle the data and deliver rich user tailored expierences for our clients./n/n Your data Internal Memory, available to recall and curate a more personalized view into the inner workings of either your business or your brain in real-time.",
    devOpsDesc:
      "Our current cloud provider is Digital Ocean. We have some automation scripts in place to pull in the new code, run some tests, re-build, and deploy./n/n Our NodeJS servers are spread across multiple droplets and we are load-balancing and using reverse proxies./n/n A key piece of kit in this set up has been Caddy and man is it awesome! Much cleaner and easier to work with than an Nginx config. It handles auto SSL renewal with minimal fuss. And automating different servers to run different Caddyfile(s) has been a fantastic experience./n/n As we contine moving everything for production into Docker and finishing our move to K8s we will have the freedom to take our platform and deploy it on AWS, Google Cloud, Azure, or anywhere we need to go!",
    thumbnail: { src: pluarisDash, alt: "pluaris dashboard" },
    images: [
      { src: "1", caption: "" },
      { src: "2", caption: "" },
      { src: "3", caption: "" },
    ],
    Position: "Full Stack",
    Organization: "Nowigence Inc.",
    Year: "2019 - current",
  },
  {
    name: "Portfolio Site",
    shortDesc: "The site you're looking at right now!",
    techUsed: [tech.html, tech.javascript, tech.scss],
    description:
      "One of the most fun projects I've had the chance to work on with such potential for growth and change!  I'm really excited to see where this goes.  I plan to keep adding all sorts of fun easter eggs and fun little jokes.  This sit will never be truely finished, but I hope you enjoy what I've created!",
    backendDesc:
      "This one is super simple.  I've hosted it on netlify and setup a simple CI/CD with github main branch.  In the future when I have a little more spare time, I'll put this up on Digital Ocean and use Caddy to serve it up.",
    frontendDesc: "pure react and my blood sweat and cheers.",
    devOpsDesc: "",
    thumbnail: { src: pluarisDash, alt: "pluaris dashboard" },
    images: [
      { src: "1", caption: "" },
      { src: "2", caption: "" },
      { src: "3", caption: "" },
    ],
    Position: "",
    Organization: "Me",
    Year: "Aug 2020 - current",
  },
];
