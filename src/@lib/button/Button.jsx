import React from 'react'
import classNames from 'classnames'

import Download from "../../components/icons/Download"
import "./Button.css"

const Button = ({ pattern, size, type = "button", name }) => {

    let sizeButton;

    switch (size) {
        case 'small':
            sizeButton = { smallGeneric: true }
            break;
        case 'medium':
            sizeButton = { mediumGeneric: true }
            break;

        default:
            sizeButton = { highGeneric: true }
            break;
    }

    const buttonGenricClass = classNames({
        buttonGeneric: true,
        ...sizeButton
    })

    const buttonGeneric = () => {
        return (
            <button className={buttonGenricClass} type={type}>
                {name}
            </button>
        )
    }

    const buttonDownload = () => {
        return (
            <button class="buttonDownload" type={type}>
                <span class="button__text">Download</span>
                <span class="button__icon"><Download /></span>
            </button>
        )
    }

    switch (pattern) {
        case 'download':
            return buttonDownload();
        default:
            return buttonGeneric();
    }

    // return (
    //     <div>
    //         {pattern === "generic" ? buttonGeneric() : buttonDownload()}

    //     </div>
    // )
}

export default Button