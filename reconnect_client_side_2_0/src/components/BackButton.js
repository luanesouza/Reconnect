import React from 'react'
import {Container} from './user/styles'

export default function BackButton(props) {

  return (
    <img onClick={props.goBack} src='https://img.icons8.com/pastel-glyph/2x/circled-left.png'/>
  )
}
