import React from "react";
import styles from './header.module.css'
import Image from 'next/image'
import Download from '../../assets/download.jpg'

const Header = () => {
    return(
        <>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        <Image src={Download} width={50} height={50} className={styles.logo} />
                        

                        <h2>Percentify</h2>

                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <p>References</p>
                        </div>

                        <div className={styles.link}>
                            <p>About Us</p>
                        </div>

                    </div>
                    
                </div>
            </div>

            

        </>
    )
}

export default Header



