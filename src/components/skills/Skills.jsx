"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SkillsDb, SkillCategories } from "../../data/SkillsDb";
import Technologies from "./Technologies";
import "./Skills.css";

const Skills = () => {
  const router = useRouter();
  const [categoria, setCategoria] = useState("todas");

  const skillsFiltradas = useMemo(() => {
    if (categoria === "todas") return SkillsDb;
    return SkillsDb.filter((skill) => skill.categoria === categoria);
  }, [categoria]);

  return (
    <div className="skills-wrapper">
      <div className="skills-filters">
        {SkillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`skills-filter-btn ${categoria === cat.id ? "active" : ""}`}
            onClick={() => setCategoria(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillsFiltradas.map((skill) => (
          <Technologies
            key={skill.id}
            srcImg={skill.img}
            Icon={skill.Icon}
            mono={skill.mono}
            color={skill.color}
            skill={skill.nome}
          />
        ))}
      </div>

      <div className="skills-cta-wrapper">
        <button className="certificados-btn" onClick={() => router.push("/certificados")}>
          Certificados
        </button>
      </div>
    </div>
  );
};

export default Skills;
