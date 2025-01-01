import { useState } from "react";
import { MenuIcon } from "../svg/MenuIcon";
import { CloseIcon } from "../svg/CloseIcon";

export const NavIcon = () => {
    const [menu, setMenu] = useState(true)
    const [close, setClose] = useState(true)

    const icon2 = () => {
        setClose(!close);
        document.body.classList.toggle("close")
        setMenu(!menu);
    }
    return (
        <div className="flex items-center">
            {menu ? (
                <button onClick={icon2}>
                    <MenuIcon />
                </button>
            ) : (
                <button onClick={icon2}>
                    <CloseIcon />
                </button>
            )}
        </div>
    )
}