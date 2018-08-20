import React from 'react'
import Link from 'gatsby-link'

import Project from '../components/Project'
import Section from '../components/Section'
import { purple, black, white } from '../styling/vars'

const PROJECTS = [
  {
    emoji: '🌈',
    title: 'Rainbows',
    description: 'A tool for creating designs with bezier curves.',
    url: 'http://rainbows.ripley.nyc/',
  },
  {
    emoji: '👨🏼‍💻',
    title: 'Mini Me',
    description: 'An avatar creator controlled by url params.',
    url: 'http://minime.ripley.nyc/?mouthId=4&noseId=1&eyesId=1&hairId=2&hairColor=F6E297&skinColor=FFD2AD&clothesPrimaryColor=67b',
  },
]

const Projects = () => (
  <div>
    <Section>
      <h1>Projects</h1>
      <p>These are a few of the projects I've done on the side.</p>
    </Section>
    {PROJECTS.map((project, idx) => (
      <Project {...project} key={project.title} />
    ))}
  </div>
)

export default Projects
