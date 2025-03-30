"use client";

import Image from "next/image";
import githubIconWhite from "../../../public/images/github/github-mark-white.svg";
import githubIconDark from "../../../public/images/github/github-mark.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";
import { useEffect, useState } from "react";

export default function GitHubLink() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial color scheme
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        // Listen for changes in color scheme
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };
        
        mediaQuery.addEventListener('change', handleChange);
        
        // Cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <>
            <Link href="https://github.com/LowBudgetMan/">
                <Image 
                    src={isDarkMode ? githubIconWhite : githubIconDark} 
                    width={LogoWidth} 
                    height={LogoHeight} 
                    alt="Nick's GitHub profile"
                />
            </Link>
        </>
    )
}
