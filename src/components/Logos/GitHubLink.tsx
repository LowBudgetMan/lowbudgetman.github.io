import Image from "next/image";
import githubIconWhite from "../../../public/images/github/github-mark-white.svg";
import Link from "next/link";
import {LogoHeight, LogoWidth} from "@/components/Logos/LogoConstants";

export default function GitHubLink() {
    return (
        <>
            <Link href="https://github.com/LowBudgetMan/">
                <Image src={githubIconWhite} width={LogoWidth} height={LogoHeight} alt="Nick's GitHub profile"/>
            </Link>
        </>
    )
}