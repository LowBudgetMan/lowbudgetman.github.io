"use client";

import Image from "next/image";
import githubIconWhite from "../../../public/images/github/github-mark-white.svg";
import githubIconDark from "../../../public/images/github/github-mark.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function GitHubLink() {
    const isDarkMode = useDarkMode();

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
