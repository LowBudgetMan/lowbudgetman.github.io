export interface Project {
    title: string;
    description: string;
    skills: string[];
    links: Link[];
}

export interface Link {
    name: string;
    url: string;
}

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Implemented features including product catalog, shopping cart, user authentication, payment processing, and order management.",
        skills: ["React", "Node.js", "MongoDB", "Stripe API"],
        links: [
            {name: 'Demo', url: '#'},
            {name: 'GitHub', url: '#'}
        ]
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates using WebSockets. Features include task creation, assignment, status tracking, due dates, and team collaboration tools.",
        skills: ["TypeScript", "React", "Spring Boot", "WebSockets"],
        links: [
            {name: 'Demo', url: '#'},
            {name: 'GitHub', url: '#'}
        ]
    },
    {
        title: "Health Tracking Dashboard",
        description: "A comprehensive health metrics dashboard for visualizing and analyzing personal health data. Integrates with various fitness APIs and devices to provide insights and progress tracking.",
        skills: ["React", "D3.js", "Express", "OAuth"],
        links: [
            {name: 'Demo', url: '#'},
            {name: 'GitHub', url: '#'}
        ]
    },
    {
        title: "Content Management System",
        description: "A custom CMS built for a media company to manage digital content across multiple platforms. Features include content creation, scheduling, approval workflows, and analytics.",
        skills: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
        links: [
            {name: 'Case Study', url: '#'},
        ]
    },
    {
        title: "Real-time Chat Application",
        description: "A secure messaging platform with end-to-end encryption, file sharing, and group chat capabilities. Implemented with a microservices architecture for scalability.",
        skills: ["React", "Socket.io", "Node.js", "Redis"],
        links: [
            {name: 'Demo', url: '#'},
            {name: 'GitHub', url: '#'}
        ]
    },
    {
        title: "Personal Finance Tracker",
        description: "An application for tracking personal finances, including expense categorization, budget planning, financial goal setting, and visualization of spending patterns.",
        skills: ["Vue.js", "Firebase", "Chart.js", "Plaid API"],
        links: [
            {name: 'Demo', url: '#'},
            {name: 'GitHub', url: '#'}
        ]
    }
];
