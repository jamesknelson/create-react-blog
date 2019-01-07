import React from 'react'
import styles from './Bio.module.css'
import bioPic from './bio-pic.jpg'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={bioPic} alt="James K Nelson" />
      <p>
        Create a blog with a single command, by{' '}
        <a href="https://twitter.com/james_k_nelson/">James K Nelson</a>.
        <br />
        Themed after Gatsby's blog starter and Dan Abramov's{' '}
        <a href="https://overreacted.io/">overreacted.io</a>.<br />
        Based on{' '}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, and{' '}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p>
    </div>
  )
}

export default Bio
