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

export type Skills = 'React' | 'Java' | 'TypeScript' | 'Spring Boot' | "WebSockets" | "MongoDB" | "Angular" | 'C++' | 'Arduino' | 'Node.js' | 'SQL' | 'PostgreSQL' | 'GraphQL' | 'AWS' | 'RFID' | 'CSS' | 'HTML' | 'REST API';

export const projects: Project[] = [
    {
        title: "HungryMoose",
        description: "A set of libraries that use the same YAML request/response objects to both generate documentation and run as End-to-End API tests for Spring Boot RESTful API projects.",
        skills: ["Spring Boot", "Java", "HTML", "CSS", "REST API"],
        links: [
            {name: 'GitHub', url: 'https://github.com/FordLabs/hungrymoose'}
        ]
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
        title: "PeopleMover",
        description: "People allocation tool used to help facilitate movement of people between engagements based on preference.",
        skills: ["React", "TypeScript", "Spring Boot", "Java", "SQL"],
        links: [
            {name: 'GitHub', url: 'https://github.com/FordLabs/peoplemover'},
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