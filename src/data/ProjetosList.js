// Imagens dos Projetos
import ResidencialPerim from "/img/projetos/ResidencialPerim/01.png"
import Multistep from "/img/projetos/react_multistep_form/01-alt.png"
import LojaZap from "/img/projetos/Loja_Zap_shadcn_ui/01.png"

// Logos das Empresas
import B7web from "/img/projetos/logos/b7web.png"
import Hdc from "/img/projetos/logos/HoradeCodar.png"
import logoAzul from "/img/projetos/logos/oculosazul.png"
import logoBranco from "/img/projetos/logos/oculosbranco.png"
import logoCarlos from "/img/projetos/logos/ca.png"


// Ícones de Tecnologias
import Html from "/img/skills/Html.png"
import Css from "/img/skills/Css.png"
import React from "/img/skills/react.png"
import TailWindCss from "/img/skills/tailwindcss.png"
import vscode from "/img/skills/visual-studio-code.png"
import NextJs from "/img/skills/nextjs.png"
import JavaScript from "/img/skills/javascript.png"

export const ProjetosList = [
    {id:0, name: 'Residencial Desidério Perim', img:ResidencialPerim, link:'https://carlosarturb.github.io/lp-desiderio-perim/', logo: logoBranco, logo2: logoCarlos, freela: true, icones:[
        {id:0, nome: Html},
        {id:1, nome: Css},
        {id:2, nome: JavaScript}
    ]},
    {id:1, name: 'React Multistep Form', img:Multistep, link:'https://github.com/GabrielAlvesB/multistep_form_react', logo: Hdc, freela: false, icones:[
        {id:0, nome: React},
        {id:1, nome: Css},
        {id:2, nome: vscode}
    ]},
    {id:2, name: 'Loja Zap', img:LojaZap, link:'https://github.com/GabrielAlvesB/sistemaDeRestauranteJapones', logo: B7web, freela: false, icones:[
        {id:0, nome: React},
        {id:1, nome: TailWindCss},
        {id:2, nome: NextJs}
    ]},

]