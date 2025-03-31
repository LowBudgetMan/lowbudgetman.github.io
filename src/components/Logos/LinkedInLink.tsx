"use client";

import Image from "next/image";
import linkedInIconWhite from "../../../public/images/linkedIn/In-White.svg";
import linkedInIconBlue from "../../../public/images/linkedIn/In-Blue.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function LinkedInLink() {
    const isDarkMode = useDarkMode();

    return (
        <>
            <Link href="https://www.linkedin.com/in/nick-reuter-79a0a7103/" target={"_blank"}>
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
