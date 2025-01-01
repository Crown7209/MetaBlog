import { useState } from "react"
import { DarkIcon } from "../svg/DarkIcon"
import { LightIcon } from "../svg/LightIcon"



export const SwitchIcon = () => {
    const [icon, seticon] = useState(true)
    const [dark, setDark] = useState(true)

    const icon1 = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
        seticon(!icon);
    }
    return (
        <div className="flex items-center">
            {icon ? (
                <button onClick={icon1}>
                    <DarkIcon />
                </button>
            ) : (
                <button onClick={icon1}>
                    <LightIcon />
                </button>
            )}
        </div>
    )
}
