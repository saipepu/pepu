import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="pb-[20px] text-[24px] w-full flex flex-col md:flex-row justify-end items-start md:justify-center md:gap-[20px]">
      <Link onClick={() => window.open('mailto:saipepu.mdy257@gmail.com?subject=SUBJECT&body=Dear_PEPU,')} href="/">EMAIL</Link>
      <Link href="https://github.com/saipepu" target="_blank">GITHUB</Link>
      <Link href="https://www.linkedin.com/in/pe-pu-6746441b6/" target="_blank">LINKEDIN</Link>
    </div>
  )
}

export default Footer