import React from "react";
import styles from './header.module.css'
import Image from 'next/image'
import Logo from '../../assets/logo.jpg'

const Header = () => {
    return(
        <>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        <Image src={Logo} width={50} height={50} alt="" className={styles.logo} />
                        

                        <h2>Percentify</h2>

                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <a href="#references">References</a>
                        </div>

                        <div className={styles.link}>
                            <a href="https://github.com/aakvshh/sppu-cgpa-to-percentage" target="_blank">Project Link</a>
                        </div>

                    </div>
                    
                </div>
            </div>

            

        </>
    )
}

export default Header



