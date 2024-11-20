import GitHubLink from "@/components/Logos/GitHubLink";
import LinkedInLink from "@/components/Logos/LinkedInLink";

export default function About() {
    return (
        <main>
            <h1 id={"about-me"}>About me</h1>
            <p>
                I&apos;m a <strong>software engineer</strong>, <strong>product architect</strong>, and <strong>tinkerer</strong>
                who has been heavily invested in the agile mindset since I joined the workforce in 2016. I specialize
                in quality, extensible code developed fast mainly in the web space. I&apos;m a fullstack engineer with the most
                experience in React SPAs and Spring Boot REST APIs.
            </p>
            <LinkedInLink />
            <GitHubLink />
        </main>
    );
}