import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Section from '../components/Section'

const IndexPage = () => (
  <Section>
    <h1>
      Hi, I'm Thomas
    </h1>
    <p>
      I'm a developer working to build the future of education at{' '}
      <a href="https://www.thinkful.com" target="_blank">Thinkful</a>.
    </p>
    <p>
      Right now, I'm living in Denver, Colorado.
    </p>
  </Section>
)

export default IndexPage
