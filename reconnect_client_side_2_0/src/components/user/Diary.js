import React, {Component} from 'react';
import { DiarySection } from './styles'

export default class Diary extends Component {
render() {
  const { diary } = this.props
  console.log('props', this.props);

  return (
    <h1> {diary.title} </h1>
  )
}
}
