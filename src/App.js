import { useRef } from "react";
import "./App.css";
import ExperienceSection from "./UI/ExperienceSection/ExperienceSection";
import Header from "./UI/Header/Header";
import ProjectsSection from "./UI/ProjectsSection/ProjectsSection";
import SkillSection from "./UI/SkillSection/SkillSection";
export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div>
      <Header ref1={ref1} ref2={ref2} ref3={ref3} />
      <SkillSection ref1={ref1} />
      <ProjectsSection ref2={ref2} />
      <ExperienceSection ref3={ref3} />
    </div>
  );
}
