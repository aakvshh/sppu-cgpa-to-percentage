"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { useState } from 'react'


export default function Home() {
  const [value, setValue] = useState("");

const handleCLick = () => {
  setValue(e.target.value)
}
  return (
    <>
      <input type="text" value={value}  />
       {/* button onclick={handleClick} */}
      {/* <Header /> */}
      <Hero 
        name="Tanaya"
        gender="Female"
        age="21yrs"
      />
      <Hero 
        name="Aakash"
        gender="male"
        age="21yrs"
      />
    </>
  )
}

// Header
// Hero
// Info
// Footer