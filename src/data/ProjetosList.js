// Imagens dos Projetos
const ResidencialPerim = "/img/projetos/ResidencialPerim/01.png";
const Multistep = "/img/projetos/react_multistep_form/01-alt.png";
const LojaZap = "/img/projetos/Loja_Zap_shadcn_ui/01.png";

// Logos das Empresas
const B7web = "/img/projetos/logos/b7web.png";
const Hdc = "/img/projetos/logos/HoradeCodar.png";
const logoBranco = "/img/projetos/logos/oculosbranco.png";
const logoCarlos = "/img/projetos/logos/ca.png";

// Ícones de Tecnologias
const Html = "/img/skills/Html.png";
const Css = "/img/skills/Css.png";
const React = "/img/skills/react.png";
const TailWindCss = "/img/skills/tailwindcss.png";
const vscode = "/img/skills/visual-studio-code.png";
const NextJs = "/img/skills/nextjs.png";
const JavaScript = "/img/skills/javascript.png";

export const ProjetosList = [
  {
    id: 0,
    name: "Residencial Desidério Perim",
    descricao:
      "Landing page institucional para lançamento imobiliário, com foco em conversão de leads e apresentação visual do empreendimento.",
    img: ResidencialPerim,
    link: "https://carlosarturb.github.io/lp-desiderio-perim/",
    logo: logoBranco,
    logo2: logoCarlos,
    freela: true,
    isNew: true,
    icones: [
      { id: 0, nome: Html },
      { id: 1, nome: Css },
      { id: 2, nome: JavaScript },
    ],
  },
  {
    id: 1,
    name: "React Multistep Form",
    descricao:
      "Formulário em múltiplas etapas construído em React, com validação por etapa, navegação controlada e componentes reutilizáveis.",
    img: Multistep,
    link: "https://github.com/GabrielAlvesB/multistep_form_react",
    logo: Hdc,
    freela: false,
    icones: [
      { id: 0, nome: React },
      { id: 1, nome: Css },
      { id: 2, nome: vscode },
    ],
  },
  {
    id: 2,
    name: "Loja Zap",
    descricao:
      "Sistema de restaurante japonês com catálogo de produtos e carrinho, construído com React, Next.js e TailwindCSS.",
    img: LojaZap,
    link: "https://github.com/GabrielAlvesB/sistemaDeRestauranteJapones",
    logo: B7web,
    freela: false,
    icones: [
      { id: 0, nome: React },
      { id: 1, nome: TailWindCss },
      { id: 2, nome: NextJs },
    ],
  },
];
