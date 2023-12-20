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
        <div className={styles.heroOne}>
            <h1>SPPU CGPA TO PERCENTAGE CONVERTER</h1>
        </div>

        <div className={styles.heroTwo1}>
            <label htmlFor="cgpa">Enter your CGPA: </label>
            <input type="text" onChange={(e) => setUserGpa(e.target.value)} />
           <div className={styles.heroTwo2}>
            <button type='submit' onClick={handleCalculations}>Submit</button>
            </div> 
        </div>
        <br />
        <div className={styles.heroThree}>
        {result !== null ? (
          <h3>Your percentage is: {result}</h3>
        ) : (
          <h3>Please enter a valid CGPA.</h3>
        )}
        </div>


        <div className={styles.formulas}>
          <h2>~ CONVERSION FORMULAS ~</h2> 

        </div>



         <div className={styles.table}>
            <table>

             <tr>
              <th>CGPA range</th>
              <th>Formula</th>
              <th>Grade</th>
             </tr>

             <tr>
              <td>4.00 to 4.75</td>
              <td>CGPA * 6.6 + 13.5</td>
              <td>D</td>
             </tr>

             <tr>
              <td>4.75 to 5.75</td>
              <td>CGPA * 10  - 2.5</td>
              <td>C</td>
             </tr>

            <tr>
              <td>5.75 to 6.75</td>
              <td>CGPA * 5 + 26.25</td>
              <td>B</td>
            </tr>


            <tr>
              <td>6.75 to 8.25</td>
              <td>CGPA * 10 - 7.5</td>
              <td>A</td>
            </tr>

            <tr>
              <td>8.25 to 9.50</td>
              <td>CGPA * 12 + 25</td>
              <td>A+</td>
            </tr>
             

            <tr>
              <td>9.5 to 10.0</td>
              <td>CGPA * 20 - 100</td>
              <td>A++</td>
            </tr>
              

            </table>
          </div>

        
       


    </>
  )
}

export default Hero
