import { Metadata } from "next";
import ContactCard from "../ContactCard";

export const metadata: Metadata = {
    title: "Contact me",
    description: "Here are my social links if you need to get in touch with me",
    creator: "Emma Alexandria",
    keywords: ["Contact", "Full stack developer", "South Africa"]
} 

export default function ContactPage() {
    return (
        <article className="px-4 py-4">
            <div className="w-1/2 mx-auto divide-y-2 divide-light-800 border-2 border-light-700 rounded">
                <ContactCard href="https://www.emmalexandria.dev">Portfolio</ContactCard>
                <ContactCard href="https://www.github.com/emmalexandria" icon="mdi:github">Github</ContactCard>
                <ContactCard href="https://www.linkedin.com/in/emma-jb" icon="mdi:linkedin">LinkedIn</ContactCard>
            </div>
        </article>
    )
}