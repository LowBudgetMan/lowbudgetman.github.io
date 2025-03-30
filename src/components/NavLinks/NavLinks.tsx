'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import navStyles from './NavLinks.module.css';
import GitHubLink from "@/components/Logos/GitHubLink";
import LinkedInLink from "@/components/Logos/LinkedInLink";

export function NavLinks() {
    return (
        <nav className={navStyles.nav}>
            <ActiveLink route='/' activeStyle={navStyles.home}>Home</ActiveLink>
            <ActiveLink route='/about' activeStyle={navStyles.about}>About</ActiveLink>
            <ActiveLink route='/projects' activeStyle={navStyles.projects}>Projects</ActiveLink>
            <ActiveLink route='/blog' activeStyle={navStyles.blog}>Blog</ActiveLink>
            <GitHubLink />
            <LinkedInLink />
        </nav>
    )
}

export function ActiveLink({route, activeStyle, children}: Readonly<{ route: string, activeStyle: string, children: React.ReactNode }>) {
    const pathname = usePathname()
    return <Link className={`${navStyles.link} ${(pathname.includes(route) && route !== '/') || pathname === route ? activeStyle : ''}`} href={route}>{children}</Link>
}
