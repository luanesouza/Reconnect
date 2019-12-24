import React, {Component} from 'react';
import { DiarySection } from './styles'

export default class Diary extends Component {
  render(){
    return (
      <section>
        <DiarySection />
        <DiarySection />
        <DiarySection />
        <DiarySection />
      </section>
    )
  }
}
