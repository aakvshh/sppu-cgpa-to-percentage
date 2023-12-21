import React from 'react'
import styles from './info.module.css'

const Info = () => {
  return (
    <>
        <section className={styles.section}>
            <h1 style={{textAlign: 'center'}}>References</h1><br /><br />
            <div className={styles.wrapper}>
                <div className={styles.table}>
                    <table>
                        <tbody>
                            <tr>
                                <td>CGPA Range</td>
                                <td>Formula</td>
                                <td>Grade</td>
                            </tr>
                            
                            <tr>
                                <td>4.00 to 4.75</td>
                                <td>CGPA * 6.6 + 13.5</td>
                                <td>D</td>
                            </tr>

                            <tr>
                                <td>4.75 to 5.25</td>
                                <td>CGPA * 10  - 2.5</td>
                                <td>C</td>
                            </tr>

                            <tr>
                                <td>5.25 to 5.75</td>
                                <td>CGPA * 5 + 26.25</td>
                                <td>B</td>
                            </tr>


                            <tr>
                                <td>5.75 to 6.75</td>
                                <td>CGPA * 10 - 7.5</td>
                                <td>B+</td>
                            </tr>

                            <tr>
                                <td>6.75 to 8.25</td>
                                <td>CGPA * 12 + 25</td>
                                <td>A</td>
                            </tr>
                            

                            <tr>
                                <td>8.25 to 9.50</td>
                                <td>CGPA * 20 - 100</td>
                                <td>A+</td>
                            </tr>

                            <tr>
                                <td>9.50 and above</td>
                                <td>CGPA * 10 - 7.5</td>
                                <td>O</td>
                            </tr>
           

                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>

                </div>
                <div className={styles.infoText}>
                    <p>Our platform is committed to precision and accuracy, ensuring that every conversion adheres to the standards set forth by SPPU (Savitribai Phule Pune University). The formulas utilized in our calculations are meticulously aligned with SPPU guidelines, guaranteeing reliable and authentic results.</p><br />

                    <a style={{textDecoration: 'underline'}} href="http://sppudocs.unipune.ac.in/sites/circulars/Boards%20And%20Meetings%20Circulars/Circular%20No.%20332-2020%20-%20Approval%20for%20Conversion%20Equation%20of%20CGPA%20to%20Percentage_08_122020.pdf?Mobile=1&Source=%2Fsites%2Fcirculars%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D85ab0d02%252D7304%252D478b%252Da04b%252D240d0a46dcae%26ID%3D618%26CurrentPage%3D1">Official Circular issued by SPPU</a>

                </div>

            </div>

        </section>
    </>
  )
}
export default Info;
