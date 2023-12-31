import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About page',
  description: 'About page',
  keywords: ['About']
}

export const About = () => {
  return (
    <div>
      <span>AboutPage</span>
    </div>
  )
}

export default About;
