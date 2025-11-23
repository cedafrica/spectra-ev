import Hero from "@/components/contact/hero";
import ContactForm from "@/components/contact/contact";
import { useEffect } from "react";
import { split } from '@/animations/text.js'


const Contact = () => {
    useEffect(() => {
        split()
    }, [])
    return (
        <>
            <Hero />
            <ContactForm />
        </>
    );
}

export default Contact;