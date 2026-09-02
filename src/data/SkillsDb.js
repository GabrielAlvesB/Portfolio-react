import {
  SiClaudecode,
  SiPerplexity,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

// Categorias disponíveis para filtro na seção de Skills
export const SkillCategories = [
  { id: "todas", label: "Todas" },
  { id: "front", label: "Front-end" },
  { id: "back", label: "Back-end" },
  { id: "banco", label: "Banco de Dados" },
  { id: "ia", label: "IA" },
  { id: "ferramentas", label: "Ferramentas" },
];

// Skills com imagem (arquivos existentes em /public/img/skills)
// e skills com ícone de componente (react-icons) ou monograma (quando não há logo disponível
// na biblioteca de ícones — caso do ChatGPT e do Antigravity).
export const SkillsDb = [
  { id: 0, nome: "HTML", categoria: "front", img: "/img/skills/Html.png" },
  { id: 1, nome: "CSS", categoria: "front", img: "/img/skills/Css.png" },
  { id: 2, nome: "JavaScript", categoria: "front", img: "/img/skills/javascript.png" },
  { id: 3, nome: "TypeScript", categoria: "front", img: "/img/skills/typescript.png" },
  { id: 4, nome: "Bootstrap", categoria: "front", img: "/img/skills/bootstrap.png" },
  { id: 5, nome: "React", categoria: "front", img: "/img/skills/react.png" },
  { id: 6, nome: "TailwindCSS", categoria: "front", img: "/img/skills/tailwindcss.png" },
  { id: 7, nome: "Next.js", categoria: "front", img: "/img/skills/nextjs.png" },

  { id: 8, nome: "Node.js", categoria: "back", Icon: SiNodedotjs, color: "#5fa04e" },
  { id: 9, nome: "PHP", categoria: "back", Icon: SiPhp, color: "#777bb4" },
  { id: 10, nome: "Laravel", categoria: "back", Icon: SiLaravel, color: "#ff2d20" },

  { id: 11, nome: "MySQL", categoria: "banco", img: "/img/skills/mysql.png" },
  { id: 12, nome: "PostgreSQL", categoria: "banco", Icon: SiPostgresql, color: "#4169e1" },
  { id: 13, nome: "Supabase", categoria: "banco", Icon: SiSupabase, color: "#3ecf8e" },

  { id: 14, nome: "ChatGPT", categoria: "ia", mono: "GPT", color: "#10a37f" },
  { id: 15, nome: "Claude Code", categoria: "ia", Icon: SiClaudecode, color: "#da7756" },
  { id: 16, nome: "Perplexity", categoria: "ia", Icon: SiPerplexity, color: "#20808d" },
  { id: 17, nome: "Antigravity", categoria: "ia", mono: "AG", color: "#4285f4" },

  { id: 18, nome: "Git", categoria: "ferramentas", img: "/img/skills/git.png" },
  { id: 19, nome: "Docker", categoria: "ferramentas", img: "/img/skills/docker.png" },
  { id: 20, nome: "Linux", categoria: "ferramentas", img: "/img/skills/linux.png" },
  { id: 21, nome: "Windows", categoria: "ferramentas", img: "/img/skills/windows.png" },
  { id: 22, nome: "Bash", categoria: "ferramentas", img: "/img/skills/terminal.png" },
  { id: 23, nome: "Figma", categoria: "ferramentas", img: "/img/skills/figma.png" },
  { id: 24, nome: "Inkscape", categoria: "ferramentas", img: "/img/skills/inkscape.png" },
];
