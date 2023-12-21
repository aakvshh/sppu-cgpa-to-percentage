import React from 'react'
import styles from './Hero.module.css'
import { useState, useEffect} from 'react'
import Image from 'next/image'
import Animation from '../../assets/animation.gif'

const Hero = () => {
  const [usergpa, setUserGpa] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculations = () => {
    let number = parseFloat(usergpa);

    //Method 1:

    // if (number >= 4.00 && number < 4.75){
    //   number = number * 6.6 + 13.5
    //   setResult(number)
    // } else if (number >= 4.75 && number < 5.75){
    //   number = number * 10 - 2.5
    //   setResult(number)
    // } else if (number >= 5.75 && number < 6.75){
    //   number = number * 5 + 26.25
    //   setResult(number)
    // }
    // else {
    //   setResult(null)
    // }

    //  Method 2: Using ternary operator

      number >= 4.00 && number < 4.75 ? number = number * 6.6 + 13.5 :
      number >= 4.75 && number < 5.75 ? number = number * 10 - 2.5 :
      number >= 5.75 && number < 6.75 ? number = number * 5 + 26.25 :
      number >= 6.75 && number < 8.25 ? number = number * 10 - 7.5 :
      number >= 8.25 && number < 9.50 ? number = number * 12 - 25 :
      number >= 9.5 && number < 10.0 ? number = number * 20 - 100 :
      null

    setResult(number)
    
    console.log(result)
  } 

  useEffect(() => {
    // Display the result directly in your component
    // You might want to add additional logic to handle the null case
    // (e.g., display a message or nothing)
  }, [result]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
            <div className={styles.heroLeft}>
                <h1>Effortlessly Bridge CGPA to Percentage with Our Streamlined Tool!</h1><br />
                <label htmlFor="cgpa"><b>Enter your CGPA: </b></label>
                <input type="text" onChange={(e) => setUserGpa(e.target.value)} /><br /><br />
                <button type='submit' onClick={handleCalculations}>Submit</button><br />
                <div className={styles.result}>
                  {result !== null ? (
                    <h3>Your percentage is: {result}{`%`}</h3>
                  ) : (
                    <h3>Please enter a valid CGPA.</h3>
                  )}
                </div>
            </div>

          <div className={styles.heroRight}>
            <Image className={styles.animation} src={Animation} width={400} height={300} /> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
