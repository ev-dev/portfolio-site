import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Home Page' titleTemplate='%s - Developer Portfolio for Evan Reed' />
    <h1 className={css(styles.title)}>Evan Reed</h1>
    <Nav />
    {children}
    <h3 className={css(styles.footer)}>Personal Outlet For All Things JavaScript</h3>
    <h5 className={css(styles.footer)}>Created by Evan Reed</h5>
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 500,
    fontWeight: 'bold',
    fontSize: 56
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
