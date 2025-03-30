import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nick Reuter | Ramblings",
    description: "Thoughts Nick has had over the years",
};

export default function ProjectsLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return <>
        {children}
    </>
}