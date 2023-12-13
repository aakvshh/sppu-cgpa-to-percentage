import React from 'react'
import Image from 'next/image'
import Random from '../../assets/download.jpg'

export const Hero = ({name, gender, age}) => {
  return (
    <>
        <div>
            <h1>{name}</h1>
            <h2>{gender}</h2>
            <h4>{age}</h4>
            <Image src={Random} width={100} height={100} />
        </div>
    </>
  )
}
