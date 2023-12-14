import React from 'react'
import styles from './Hero.module.css'
import { useState, useEffect} from 'react'

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
      number >= 8.25 && number < 9.50 ? number = number * 12 + 25 :
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
        <div className={styles.heroSection}>
            <h1>Welcome bla bla bla</h1>
        </div>
        <div>
            <label htmlFor="cgpa">Enter your CGPA</label>
            <input type="text" onChange={(e) => setUserGpa(e.target.value)} />
            <button type='submit' onClick={handleCalculations}>Submit</button>
        </div><br />
        <div>
        {result !== null ? (
          <p>Your percentage is: {result}</p>
        ) : (
          <p>Please enter a valid CGPA.</p>
        )}
        </div>


    </>
  )
}

export default Hero
