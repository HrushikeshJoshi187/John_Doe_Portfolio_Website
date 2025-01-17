import SkillCard from "./SkillCard.tsx";

import figma_logo from "/figma.svg";
import css3_logo from "/css3.svg";
import javascript_logo from "/javascript.svg";
import nodejs_logo from "/nodejs.svg";
import expressjs_logo from "/expressjs.svg";
import mongodb_logo from "/mongodb.svg";
import react_logo from "/react.svg";
import tailwindcss_logo from "/tailwindcss.svg";

interface SkillItem {
  imgSrc: string;
  label: string;
  desc: string;
}

const skillItem: SkillItem[] = [
  {
    imgSrc: figma_logo,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css3_logo,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascript_logo,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: nodejs_logo,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressjs_logo,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodb_logo,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: react_logo,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwindcss_logo,
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = (): JSX.Element => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400  mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
