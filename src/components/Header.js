import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { black, purple } from '../styling/vars'

import Logo from './Logo'
import Nav from './Nav'

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const COLOR = purple

const LogoLink = styled(Link)``

const Header = ({ siteTitle }) => (
  <Container>
    <LogoLink to="/">
      <Logo color={black} size={50} />
    </LogoLink>
    <Nav activeColor={COLOR} />
  </Container>
)

export default Header
