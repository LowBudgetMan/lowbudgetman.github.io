"use client";

import Image from "next/image";
import linkedInIconWhite from "../../../public/images/linkedIn/In-White.svg";
import linkedInIconBlue from "../../../public/images/linkedIn/In-Blue.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";
import { useEffect, useState } from "react";

export default function LinkedInLink() {
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
            <Link href="https://www.linkedin.com/in/nick-reuter-79a0a7103/">
                <Image 
                    src={isDarkMode ? linkedInIconWhite : linkedInIconBlue} 
                    width={LogoWidth} 
                    height={LogoHeight} 
                    alt="Nick's LinkedIn profile"
                />
            </Link>
        </>
    )
}
