import React from 'react'
import styles from './Bio.module.css'
import bioPic from './bio-pic.jpg'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className}
    `}>
      <img src={bioPic} alt="James K Nelson" />
      <p>
        Create a blog with a single command, by{' '}
        <a href="https://twitter.com/james_k_nelson/">James K Nelson</a>.
        <br />
        Based on create-react-app, <a href="https://mdxjs.com/">MDX</a>,{' '}
        <a href="https://frontarm.com/navi/">Navi</a>, and Dan Abramov's{' '}
        <a href="https://overreacted.io/">overreacted.io</a> theme.
      </p>
    </div>
  )
}

export default Bio
