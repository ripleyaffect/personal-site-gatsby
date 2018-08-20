import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { black, purple } from '../styling/vars'

import SocialLinks from './SocialLinks'

const Container = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  color: ${black};
  text-decoration: none;
  margin-right: 25px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus {
    color: ${({ activeColor }) => activeColor};
    border-color: ${({ activeColor }) => activeColor};
    outline: none;
  }
`

const LINKS = [
  { to: '/', title: 'Home' },
  { to: '/projects', title: 'Projects' },
  { to: '/writing', title: 'Writing' }
]

const Nav = ({ activeColor }) => (
  <Container>
    {LINKS.map(link => (
      <NavLink {...link} activeColor={activeColor}>{link.title}</NavLink>
    ))}
    <SocialLinks />
  </Container>
)

export default Nav
