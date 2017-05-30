import React from 'react'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'

const NotFound = () => (
  <div>
    <Helmet title='Guessing Game' />
    <h1 className={css(styles.header)}>Guessing Game</h1>
    <p className={css(styles.lead)}>
      This is the guessing game project for FullStack Academy Foundations
    </p>

    <div>
      <input placeholder='Your Guess...' maxlength='3' autofocus></input>

      <button>Submit</button>
    </div>
  
  </div>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1rem',
    color: '#555'
  }
})

export default NotFound
