import React from 'react'

export default function BackButton(props) {

  return (
    <button onClick={props.goBack}>
    <img src='https://img.icons8.com/pastel-glyph/2x/circled-left.png'/>
    </button>
  )
}
