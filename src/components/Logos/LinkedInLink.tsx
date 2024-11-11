import Image from "next/image";
import linkedInIconWhite from "../../../public/images/linkedIn/In-White.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";

export default function LinkedInLink() {
    return (
        <>
            <Link href="https://www.linkedin.com/in/nick-reuter-79a0a7103/">
                <Image src={linkedInIconWhite} width={LogoWidth} height={LogoHeight} alt="Nick's LinkedIn profile"/>
            </Link>
        </>
    )
}