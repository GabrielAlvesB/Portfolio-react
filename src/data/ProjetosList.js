import MediCenter from "../../public/img/projetos/MediCenter/01.png"
import Multistep from "../../public/img/projetos/react_multistep_form/01-alt.png"
import LojaZap from "../../public/img/projetos/Loja_Zap_shadcn_ui/01.png"

//Logos
import B7web from "../../public/img/projetos/logos/b7web.png"
import Hdc from "../../public/img/projetos/logos/HoradeCodar.png"

//Icone
import Html from "../../public/img/skills/Html.png"
import Css from "../../public/img/skills/Css.png"
import React from "../../public/img/skills/react.png"
import TailWindCss from "../../public/img/skills/tailwindcss.png"
import vscode from "../../public/img/skills/visual-studio-code.png"
import NextJs from "../../public/img/skills/nextjs.png"

export const ProjetosList = [
    {id:0, name: 'MediCenter', img:MediCenter, link:'https://github.com/GabrielAlvesB/MediCenter', logo: B7web, icones:[
        {id:0, nome: Html},
        {id:1, nome: Css},
        {id:2, nome: vscode}
    ]},
    {id:1, name: 'React Multistep Form', img:Multistep, link:'https://github.com/GabrielAlvesB/multistep_form_react', logo: Hdc, icones:[
        {id:0, nome: React},
        {id:1, nome: Css},
        {id:2, nome: vscode}
    ]},
    {id:2, name: 'Loja Zap', img:LojaZap, link:'https://github.com/GabrielAlvesB/sistemaDeRestauranteJapones', logo: B7web, icones:[
        {id:0, nome: React},
        {id:1, nome: TailWindCss},
        {id:2, nome: NextJs}
    ]},

]