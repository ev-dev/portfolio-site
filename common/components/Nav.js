import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => ( 
    <div>
        <IndexLink to = '/' 
            className={css(styles.link)}
            activeClassName={css(styles.link, styles.activeLink)} 
        > Home </IndexLink>
        
        <a href='https://ev-dev.github.io/fullstack-guessing-game'
            className={css(styles.link)}
            target='_blank'
        > Guessing Game </a>

        <Link to='/posts'
            className={css(styles.link)}
            activeClassName={css(styles.link, styles.activeLink)}
        > Feed </Link>

        <a href='https://github.com/ev-dev/isomorphic-react-testing'
            className={css(styles.link)}
            target='_blank'
        > GitHub </a>
        
        <a href='https://twitter.com'
            className={css(styles.link)}
            target = '_blank'
        > Twitter </a> 
    </div>
)

const styles = StyleSheet.create({
    link: {
        maxWidth: 700,
        color: '#999',
        margin: '1.5rem 1rem 1.5rem 0',
        display: 'inline-block',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: '.2s opacity ease',
        ':hover': {
            opacity: 0.6
        }
    },
    activeLink: {
        color: '#000'
    }
})

export default Nav