import Image from "next/image";
import css from './Logo.module.css'

import logoImage from './assets/logo.svg'

export const Logo = () => {
    return (
        <div className={css.logoWrapper}>
            <div className={css.ellipse}></div>
            <Image src={logoImage} className={css.logo} alt="Logo MyWish" />
        </div>
    )
}