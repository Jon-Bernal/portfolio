export const portfolioData = [
  {
    name: "Pluaris",
    shortDesc:
      "Pluaris enables its users to quickly analyze boatloads of unstructured data, extract actionable insights from all the critical touch points happening within their ecosystem.",
    techUsed: [
      "Python",
      "Node.js",
      "TypeScript",
      "GraphQL",
      "Go",
      "Redis",
      "MongoDB",
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
