import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skill from "./components/Skill.tsx";
import Work from "./components/Work.tsx";
import Review from "./components/Review.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = (): JSX.Element => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up") as HTMLElement[];

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Review />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default App;
