'use strict'

import $ from 'jquery'
import React, {Component} from 'react'

export default class Header extends Component {
  componentDidMount () {
    const animTime = 6
    const hueChange = 3

    $('.header').find('span').each(span => {
      console.log('foo')
      $(this).css('animation-delay', (animTime * ((span * hueChange) % 360) / 360) - animTime + 's')
    })

    $('.header').one('mouseover', () => {
      console.log('bar')
      $(this).addClass('animate')
    })
  }

  render () {
    return (
      <div>
        <h1 className='header'>
          <span>L</span>
          <span>u</span>
          <span>n</span>
          <span>c</span>
          <span>h</span>
          <span>L</span>
          <span>o</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
        </h1>
      </div>
    )
  }
}
