import React from 'react'
import styled from 'styled-components'

import { black, white } from '../styling/vars'

const Container = styled.section`
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
`

const InnerContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Project = ({ bgColor, children, textColor }) => (
  <Container bgColor={bgColor} textColor={textColor}>
    <InnerContainer>
      {children}
    </InnerContainer>
  </Container>
)

Project.defaultProps = {
  bgColor: white,
  textColor: black,
}

export default Project
