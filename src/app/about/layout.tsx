import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nick Reuter | About",
    description: "Nick Reuter is a Software Engineer who loves creating great experiences for people",
};

export default function AboutLayout({children}: Readonly<{children: React.ReactNode}>) {
    return <>
        {children}
    </>
}