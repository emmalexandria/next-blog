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
        <article className="px-4 py-4 w-fit mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-center text-dark-100">Contact me</h1>
            <div className="w-fit mx-auto">
                <ContactCard href="https://www.emmalexandria.dev" icon="mdi:briefcase">Portfolio</ContactCard>
                <ContactCard href="https://www.github.com/emmalexandria" icon="mdi:github">Github</ContactCard>
                <ContactCard href="https://www.linkedin.com/in/emma-jb" icon="mdi:linkedin">LinkedIn</ContactCard>
            </div>
        </article>
    )
}