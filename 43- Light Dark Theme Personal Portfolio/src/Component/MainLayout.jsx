import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Headline } from './Headline'
import { Service } from './Service'
import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import { HeadlineSlider } from './HeadlineSlider'
import { Education } from "./Education"
import { PricesPlan } from './PricesPlan'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'
import { Footer } from './Footer'
import Cursor from "../../src/Cursor";
export const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300">

             <Cursor magnetic />


            {/* Navigation */}
            <Nav />

            {/* Main Content with top padding for fixed nav */}
            <main className="pt-16"> {/* Adjust based on your navbar height */}

                {/* Hero Section - should have id="home" */}
                <section id="home">
                    <Hero />
                </section>

                {/* HeadlineSlider - optional id if you want to link to it */}
                <HeadlineSlider />

                {/* Services Section - should have id="services" */}
                <section id="services">
                    <Service />
                </section>

                {/* About Me Section - should have id="about-me" */}
                <section id="about-me">
                    <AboutMe />
                </section>

                {/* Projects Section - should have id="projects" */}
                <section id="projects">
                    <Projects />
                </section>

                {/* Headline Section */}
                <Headline />

                {/* Education Section */}
                <Education />

                {/* PricesPlan Section - should have id="pricing" */}
                <section id="pricing">
                    <PricesPlan />
                </section>

                {/* Testimonials Section - should have id="testimonial" */}
                <section id="testimonial">
                    <Testimonials />
                </section>

                {/* Contact Section - should have id="contact-me" */}
                <section id="contact-me">
                    <Contact />
                </section>
            </main>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};