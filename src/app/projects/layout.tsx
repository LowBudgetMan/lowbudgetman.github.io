import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nick Reuter | Projects",
    description: "Projects Nick has been involved in with varying levels of completion",
};

export default function ProjectsLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return <>
        {children}
    </>
}