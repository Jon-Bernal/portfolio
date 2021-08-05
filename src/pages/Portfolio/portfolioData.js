// import html from "../../images/html5.png";
// import nodejs from "../../images/nodejs.png";

const tech = {
  html: {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    attribution: `W3C, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons`,
  },
  python: {
    name: "Python",
    img: `https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg`,
    attribution: `www.python.org, GPL <http://www.gnu.org/licenses/gpl.html>, via Wikimedia Commons`,
  },
  node: {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    attribution: `node.js authors, Public domain, via Wikimedia Commons`,
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
    img: ``,
    attribution: ``,
  },
  css: {
    name: "CSS",
    img: ``,
    attribution: ``,
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
    img: ``,
    attribution: ``,
  },
  mongodb: {
    name: "MongoDB",
    img: ``,
    attribution: ``,
  },
};

const html =
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
// const css = "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"

export const portfolioData = [
  {
    name: "Pluaris",
    shortDesc:
      "Pluaris enables its users to quickly analyze boatloads of unstructured data, extract actionable insights from all the critical touch points happening within their ecosystem.",
    techUsed: [
      tech.html,
      tech.javascript,
      tech.python,
      tech.node,
      tech.scss,
      tech.go,
      tech.graphql,
      tech.mongodb,
      tech.redis,
      tech.ts,
    ],
    description:
      "Pluaris specializes in reading and comprehending data, analyzing cause and effect, identifying benchmarks and measuring performance against them, tracing and linking intelligence by topics, extracting critical intelligence, alerting, answering questions on-the-fly, and synthesizing outputs. This saves each employee an average of 2 hours per day. It accelerates the pace of business resulting in revenue growth and increased profitability.",
    backendDesc:
      "We are transitioning from a Monolith to a more Microservice approach. Some services are now ran with Docker. With a goal of having our Microservices containerized and running in Kubernetes./n/n We use NodeJS, ExpressJS Fastify, TypeScript, GraphQL, MongoDB, Redis./n I’m a big fan of automation and have tried to streamline lots of different tasks and workflows. GoLang Go has been a fantastic addition and a joy to work with! Not that NodeJS is a slouch in the speed department but I have a feeling more microservices will be written in Go in the future./n/n For the DataScience side of the coin we use Python along with a Flask API. I won’t waste time name droping all of the DataScience tools and libraries we utilize as this is not my area of experteise. However; I have pitched in on the Flask API and helped on and off with things such as (architecture, preformance, deployment, debugging, scripting).",
    frontendDesc:
      "On the frontend we are using React, along with TypeScript to handle the data and deliver rich user tailored expierences for our clients./n/n Your data Internal Memory, available to recall and curate a more personalized view into the inner workings of either your business or your brain in real-time.",
    devOpsDesc:
      "Our current cloud provider is Digital Ocean. We have some automation scripts in place to pull in the new code, run some tests, re-build, and deploy./n/n Our NodeJS servers are spread across multiple droplets and we are load-balancing and using reverse proxies./n/n A key piece of kit in this set up has been Caddy and man is it awesome! Much cleaner and easier to work with than an Nginx config. It handles auto SSL renewal with minimal fuss. And automating different servers to run different Caddyfile(s) has been a fantastic experience./n/n As we contine moving everything for production into Docker and finishing our move to K8s we will have the freedom to take our platform and deploy it on AWS, Google Cloud, Azure, or anywhere we need to go!",
    thumbnail: { src: "http://google.com", alt: "pluaris dashboard" },
    images: [
      { src: "1", caption: "" },
      { src: "2", caption: "" },
      { src: "3", caption: "" },
    ],
    Position: "Full Stack",
    Organization: "Nowigence Inc.",
    Year: "2019 - current",
  },
];