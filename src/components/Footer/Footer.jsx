import React from 'react'
import styles from './footer.module.css'
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    // const love = "<3"

    const emailAddress1 = 'tanayanene09@gmail.com'

    const handleMailButtonClick1 = () => {
        const mailtoLink = `mailto:${emailAddress1}`
        window.location.href = mailtoLink;
    }
    
    const emailAddress2 = 'aakashkasabekar@gmail.com'

    const handleMailButtonClick2 = () => {
        const mailtoLink = `mailto:${emailAddress2}`
        window.location.href = mailtoLink;
    }


  return (
    <>
      <div className={styles.wrapper}>
      <p className={styles.footer2}>No © issues. Contributed by <a href="https://www.linkedin.com/in/tanaya-nene-41b212217/" target='_blank'>Tanaya Nene</a> and <a href="https://www.linkedin.com/in/aakash-kasabekar-b36133202/" target='_blank'>Aakash Kasabekar</a></p>

        <div className={styles.links}>
          <div>
            <a href="https://github.com/tanayanene" target='_blank'><FaGithub size={30} className={styles.link} /></a>
            <a href="" onClick={handleMailButtonClick1}><CiMail size={30} className={styles.link} /></a>
          </div>
          <div>
            <p className={styles.footer}>No © issues. Contributed by <a href="https://www.linkedin.com/in/tanaya-nene-41b212217/" target='_blank' style={{textDecoration: 'underline'}}>Tanaya Nene</a> and <a href="https://www.linkedin.com/in/aakash-kasabekar-b36133202/" target='_blank' style={{textDecoration: 'underline'}}>Aakash Kasabekar</a></p>
          {/* <p>Contributed by Aakash Kasabekar {love} Tanaya Nene</p> */}
            {/* <p style={{textAlign: 'center'}}>Project Link</p> */}
          </div>
          
          <div >
            <a href="" onClick={handleMailButtonClick2}><CiMail size={30} className={styles.link} /></a>
            <a href="https://github.com/aakvshh" target='_blank'><FaGithub size={30} className={styles.link} /></a>
          </div>
        </div>
        
      </div>
      <div className={styles.projectLink}>
            <a href="https://github.com/aakvshh/sppu-cgpa-to-percentage" target="_blank">Project Link</a>
        </div>
        
    </>
  )
}

export default Footer