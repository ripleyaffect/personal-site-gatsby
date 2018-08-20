import React from 'react'
import Link from 'gatsby-link'
import { Github, Linkedin, Twitter } from 'react-feather'
import styled from 'styled-components'

import { gray, purple } from '../styling/vars'

import Logo from './Logo'
import Nav from './Nav'

const Container = styled.div`
  padding-top: 3px;
  display: flex;
`

const SocialLink = styled.a`
  height: 20px;
  margin-left: 15px;
  color: ${gray};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    color: ${purple};
  }
`

const SocialLinks = ({ siteTitle }) => (
  <Container>
    <SocialLink
      href="https://github.com/ripleyaffect/"
      target="_blank"
    >
      <Github size={20} />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/ripleyaffect/"
      target="_blank"
    >
      <Twitter size={20} />
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/thomas-peterson-0558104b/"
      target="_blank"
    >
      <Linkedin size={20} />
    </SocialLink>
  </Container>
)

export default SocialLinks
