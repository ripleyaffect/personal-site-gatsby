import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { purple } from '../styling/vars'

import SocialLinks from './SocialLinks'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <Container>
    <span>© Thomas Peterson</span>
    <SocialLinks />
  </Container>
)

export default Header
