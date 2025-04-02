export interface Project {
    title: string;
    description: string;
    skills: Skills[];
    links: Link[];
}

export interface Link {
    name: string;
    url: string;
}

export type Skills = 'React' | 'Java' | 'TypeScript' | 'Spring Boot' | "WebSockets" | "MongoDB" | "Angular" | 'C++' | 'Arduino' | 'Node.js' | 'SQL' | 'PostgreSQL' | 'GraphQL' | 'AWS' | 'RFID' | 'CSS' | 'HTML' | 'REST API' | 'Kotlin' | "Microservices";

export const projects: Project[] = [
    {
        title: "Auth Service",
        description: "Custom Authentication and Authorization service for a client. Combined standard OAuth 2.1 implementations via Spring Boot Authorization Server and existing internal standards",
        skills: ["Java", "Spring Boot", "AWS", "SQL", "REST API"],
        links: []
    },
    {
        title: "Financial Application",
        description: "Personal banking application utilizing a backing banking service API. Set up The registration web application and the service API for the mobile app.",
        skills: ["AWS", "React", "TypeScript", "Node.js", "GraphQL", "AWS", "SQL"],
        links: []
    },
    {
        title: "Find Your Ford",
        description: "Used car listing site. Guaranteed car features based on Ford VIN information and provided easy-to-use logical filters to make sure choices accurately represented selections. Hosted on AWS and utilized Lambdas, event queues, and secure file transport for various listing aggregation methods.",
        skills: ["Spring Boot", "Java", "HTML", "CSS", "Angular", "MongoDB", "AWS"],
        links: []
    },
    {
        title: "Global Ford Configuration Engine (GFORCE)",
        description: "Vehicle configuration engine. Contained microservices for car configuration, the creation of decision flows based on engineering and marketing rules, and the serving of content and pricing information related to the configured vehicles.",
        skills: ["Spring Boot", "Java", "REST API", "Microservices", "SQL"],
        links: []
    },
    {
        title: "RetroQuest",
        description: "A remote retrospective tool to help facilitate Retros for dispersed teams.",
        skills: ["TypeScript", "React", "Spring Boot", "WebSockets", "Java", "SQL"],
        links: [
            {name: 'GitHub', url: 'https://github.com/FordLabs/retroquest'}
        ]
    },
    {
        title: "Dealer Connectivity Platform",
        description: "API middleware to make communicating with various vendor Dealer Management Systems easier. Used as a backing service for FordPro.",
        skills: ["React", "Java", "Spring Boot", "SQL", "REST API"],
        links: []
    },
    {
        title: "PeopleMover",
        description: "People allocation tool used to help facilitate movement of people between engagements based on preference.",
        skills: ["React", "TypeScript", "Spring Boot", "Kotlin", "SQL"],
        links: [
            {name: 'GitHub', url: 'https://github.com/FordLabs/peoplemover'},
        ]
    },
    {
        title: "HungryMoose",
        description: "A set of libraries that use the same YAML request/response objects to both generate documentation and run as End-to-End API tests for Spring Boot RESTful API projects.",
        skills: ["Spring Boot", "Java", "HTML", "CSS", "REST API"],
        links: [
            {name: 'GitHub', url: 'https://github.com/FordLabs/hungrymoose'}
        ]
    },
    {
        title: "MagicBand Reader",
        description: "An Arduino project that mimics the basics of the Walt Disney World MagicBand readers. Using a MiFARE read and write module to read the MagicBands and Disney RFID room card DesFIRE chips.",
        skills: ["C++", "Arduino", "RFID"],
        links: [
            {name: 'GitHub', url: 'https://github.com/LowBudgetMan/MagicBand'}
        ]
    }
];

export const featuredProjects: Project[] = [projects[2], projects[4]];