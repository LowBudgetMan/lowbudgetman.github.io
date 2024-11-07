'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import styles from './NavLinks.module.css';

export function NavLinks() {
    return (
        <nav>
            <ActiveLink route='/'>Home</ActiveLink>
            <ActiveLink route='/about'>About</ActiveLink>
            <ActiveLink route='/projects'>Projects</ActiveLink>
            <ActiveLink route='/musings'>Musings</ActiveLink>
        </nav>
    )
}

export function ActiveLink({route, children}: Readonly<{ route: string, children: React.ReactNode }>) {
    const pathname = usePathname()
    return <Link className={`link ${pathname === route ? styles.active : ''}`} href={route}>{children}</Link>
}