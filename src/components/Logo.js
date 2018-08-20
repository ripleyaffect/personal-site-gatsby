import React from 'react'

import black from '../styling/vars'

const Logo = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Logo</title>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Artboard" transform="translate(-69.000000, -64.000000)" fill-rule="nonzero">
        <g id="Group" transform="translate(69.000000, 64.000000)">
          <rect id="VerticalBar" fill={color} x="50" y="12" width="6" height="88"></rect>
          <rect id="HorizontalBar" fill={color} x="12" y="12" width="44" height="6"></rect>
          <polygon id="DiagonalBar" fill={color} transform="translate(78.000000, 75.500000) rotate(-35.000000) translate(-78.000000, -75.500000) " points="75.0909658 51.0882325 80.7805182 43 81 108 75 103.818036"></polygon>
          <circle id="Circle" stroke={color} strokeWidth="6" cx="80" cy="30" r="15"></circle>
          <rect id="Border" stroke={color} strokeWidth="6" x="3" y="3" width="106" height="106"></rect>
        </g>
      </g>
    </g>
</svg>
)

Logo.defaultProps = {
  color: black,
  size: 60,
}

export default Logo
