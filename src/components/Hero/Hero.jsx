import React from 'react'
import styles from './Hero.module.css'
import { useState, useEffect} from 'react'
import Image from 'next/image'
import Animation from '../../assets/animation.gif'
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Hero = () => {
  const [usergpa, setUserGpa] = useState('');
  const [result, setResult] = useState(null);
  const [isConfettiActive, setConfettiActive] = useState(false);
  const { width, height } = useWindowSize();

  const handleCalculations = () => {
    let number = parseFloat(usergpa);

    if (number < 4) {
      setResult("Better luck next time");
      return;
    }

    if (number > 10) {
      setResult("Bas kar bhai");
      return;
    }

    if (number >= 6.75 && number < 10){
    setConfettiActive(true);

    setTimeout(() => {
      setConfettiActive(false);
    }, 8000); // duration of confetti
    } 
    
    number >= 4.00 && number < 4.75 ? number = number * 6.6 + 13.5 :
    number >= 4.75 && number < 5.75 ? number = number * 10 - 2.5 :
    number >= 5.75 && number < 6.75 ? number = number * 5 + 26.25 :
    number >= 6.75 && number < 8.25 ? number = number * 10 - 7.5 :
    number >= 8.25 && number < 9.50 ? number = number * 12 - 25 :
    number >= 9.5 && number <= 10.0 ? number = number * 20 - 100 : null

      setResult(number !== null ? `${number.toFixed(2)}%` : null);
    
    console.log(result)

    
  } 

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      handleCalculations();
    }
  }

  useEffect(() => {
    // Add additional logic to handle the null case
    // (e.g., display a message or nothing)
  }, [result]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
            <div className={styles.heroLeft}>
                <h1>Effortlessly Convert SPPU CGPA to Percentage with Our Streamlined Tool!</h1><br />
                <label htmlFor="cgpa"><b>Enter your CGPA: </b></label>
                <input type="tel" onChange={(e) => setUserGpa(e.target.value)} onKeyDown={handleKeyDown} /><br /><br />
                <button type='submit' onClick={handleCalculations}>Submit</button><br />
                {isConfettiActive && (
                  <Confetti width={window.innerWidth - 18} height={window.innerHeight - 18} />
                )} 
                <div className={styles.result}>
                  {result !== null ? (
                    <>
                    <div>Your percentage is: </div>
                      <div className={styles.resultValue}><b>{result}</b></div>
                    </>
                  ) : (
                    <h3>Please enter a valid CGPA.</h3>
                  )}
                </div>
            </div>

          <div className={styles.heroRight}>
            <Image className={styles.animation} src={Animation} width={400} height={300} alt='' quality={100} /> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
