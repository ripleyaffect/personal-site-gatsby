import Color from 'color';
import React from 'react'
import styled from 'styled-components'

import { black, purple, white } from '../styling/vars'

import Section from './Section'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`

const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 200px;
  font-size: 120px;
`;

const ProjectDetails=styled.div`
  flex: 1;
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: sans-serif;
  height: 40px;
  width: fit-content;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${Color(purple).lighten(0.7).hex()};
  border: 2px solid ${Color(purple).lighten(0.6).hex()};
  border-radius: 20px;
  color: ${Color(purple).lighten(0.1).hex()};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  ${'' /* box-shadow: 0 1px 10px ${({ bgColor}) => Color(purple).lighten(0.4).hex()}; */}

  &:hover,
  &:focus {
    outline: none;
    border-color: ${Color(purple).lighten(0.2).hex()};
    color: ${Color(purple).darken(0.1).hex()};
  }
`

const Project = ({
  bgColor,
  description,
  emoji,
  textColor,
  title,
  url,
}) => (
  <Section bgColor={bgColor} textColor={textColor}>
    <Container>
      <ProjectDetails>
        <h2>{emoji}&nbsp;&nbsp;{title}</h2>
        <p>{description}</p>
        <ProjectLink bgColor={bgColor} href={url} target="_blank">
          Check it out
        </ProjectLink>
      </ProjectDetails>
    </Container>
  </Section>
)

Project.defaultProps = {
  bgColor: white,
  imageOn: 'left',
  textColor: black,
  emoji: '🎉'
}

export default Project
