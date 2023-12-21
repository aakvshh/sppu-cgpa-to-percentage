"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'

import { useState } from 'react'
import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info'
import Footer from '@/components/Footer/Footer';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Footer />
    </>
  )
}

// Header
// Hero
// Info
// Footer